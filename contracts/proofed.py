# { "Depends": "py-genlayer:test" }

import json
from dataclasses import dataclass
from genlayer import *

PROTOCOL_FEE_BPS = 10  # 10% fee taken from each pool on payout
PASS_THRESHOLD = 60    # minimum score to be eligible for payout


@allow_storage
@dataclass
class Challenge:
    id: str
    title: str
    description: str
    rubric: str
    creator: str        # address as hex string
    pool_amount: u256   # total reward pool (in wei / native token units)
    is_open: bool       # True while accepting submissions


@allow_storage
@dataclass
class Submission:
    id: str
    challenge_id: str
    submitter: str      # address as hex string
    github_url: str
    has_evaluated: bool
    score: u32          # 0–100 after evaluation
    feedback: str
    passed: bool
    reward_claimed: bool


class ProofOfSkill(gl.Contract):
    challenges: TreeMap[str, Challenge]
    # challenge_id -> submitter_hex -> Submission
    submissions: TreeMap[str, TreeMap[str, Submission]]
    # address -> total cumulative score (reputation)
    reputation: TreeMap[Address, u256]
    # address -> number of passing submissions
    pass_count: TreeMap[Address, u256]

    def __init__(self):
        pass

    # ------------------------------------------------------------------ #
    # Internal: AI evaluates a GitHub submission against a rubric         #
    # ------------------------------------------------------------------ #
    def _evaluate(
        self, github_url: str, task_title: str, rubric: str
    ) -> dict:
        def get_result() -> str:
            page_content = gl.nondet.web.render(github_url, mode="text")

            prompt = f"""
You are an expert technical evaluator for a Proof-of-Skill protocol.

Task Title: {task_title}
Evaluation Rubric:
{rubric}

Candidate's submitted GitHub repository page:
{page_content}

Evaluate the submission strictly against the rubric above.

Respond ONLY with this exact JSON format, no other text:
{{
    "score": <integer from 0 to 100>,
    "passed": <true if score >= {PASS_THRESHOLD}, otherwise false>,
    "strengths": "<brief summary of what was done well>",
    "improvements": "<brief summary of what could be improved>",
    "category_breakdown": "<one sentence per rubric category with a sub-score>"
}}

Rules:
- Score 0-100 based purely on the rubric.
- passed must equal (score >= {PASS_THRESHOLD}).
- Output must be valid JSON only. No markdown, no explanation outside the JSON.
"""
            result = gl.nondet.exec_prompt(prompt, response_format="json")
            return json.dumps(result, sort_keys=True)

        result_json = json.loads(gl.eq_principle.strict_eq(get_result))
        return result_json

    # ------------------------------------------------------------------ #
    # Write: anyone can create a challenge and fund its reward pool       #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def create_challenge(
        self,
        challenge_id: str,
        title: str,
        description: str,
        rubric: str,
    ) -> None:
        if challenge_id in self.challenges:
            gl.vm.UserError("Challenge ID already exists")

        deposited = gl.message.value  # native token sent with the transaction

        self.challenges[challenge_id] = Challenge(
            id=challenge_id,
            title=title,
            description=description,
            rubric=rubric,
            creator=gl.message.sender_address.as_hex,
            pool_amount=deposited,
            is_open=True,
        )

    # ------------------------------------------------------------------ #
    # Write: creator can top up the pool while challenge is open          #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def fund_challenge(self, challenge_id: str) -> None:
        if challenge_id not in self.challenges:
            gl.vm.UserError("Challenge not found")

        challenge = self.challenges[challenge_id]

        if not challenge.is_open:
            gl.vm.UserError("Challenge is closed")

        challenge.pool_amount += gl.message.value

    # ------------------------------------------------------------------ #
    # Write: anyone submits a GitHub link for a challenge                 #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def submit(self, challenge_id: str, github_url: str) -> None:
        if challenge_id not in self.challenges:
            gl.vm.UserError("Challenge not found")

        if not self.challenges[challenge_id].is_open:
            gl.vm.UserError("Challenge is closed")

        sender_hex = gl.message.sender_address.as_hex

        if challenge_id in self.submissions and sender_hex in self.submissions[challenge_id]:
            gl.vm.UserError("You already have a submission for this challenge")

        submission_id = f"{challenge_id}_{sender_hex}"

        submission = Submission(
            id=submission_id,
            challenge_id=challenge_id,
            submitter=sender_hex,
            github_url=github_url,
            has_evaluated=False,
            score=0,
            feedback="",
            passed=False,
            reward_claimed=False,
        )
        self.submissions.get_or_insert_default(challenge_id)[sender_hex] = submission

    # ------------------------------------------------------------------ #
    # Write: evaluate your own submission (calls the AI)                  #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def evaluate(self, challenge_id: str) -> None:
        sender_hex = gl.message.sender_address.as_hex

        if challenge_id not in self.submissions or sender_hex not in self.submissions[challenge_id]:
            gl.vm.UserError("Submission not found")

        sub = self.submissions[challenge_id][sender_hex]

        if sub.has_evaluated:
            gl.vm.UserError("Already evaluated")

        challenge = self.challenges[challenge_id]
        result = self._evaluate(sub.github_url, challenge.title, challenge.rubric)

        sub.has_evaluated = True
        sub.score = u32(int(result["score"]))
        sub.passed = bool(result["passed"])

        # Store full feedback as JSON string for the frontend to parse
        sub.feedback = json.dumps({
            "strengths": result.get("strengths", ""),
            "improvements": result.get("improvements", ""),
            "category_breakdown": result.get("category_breakdown", ""),
        })

        # Update on-chain reputation regardless of pass/fail
        sender_addr = gl.message.sender_address
        if sender_addr not in self.reputation:
            self.reputation[sender_addr] = 0
        self.reputation[sender_addr] += u256(int(sub.score))

        if sub.passed:
            if sender_addr not in self.pass_count:
                self.pass_count[sender_addr] = 0
            self.pass_count[sender_addr] += 1

    # ------------------------------------------------------------------ #
    # Write: creator closes challenge to new submissions                  #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def close_challenge(self, challenge_id: str) -> None:
        if challenge_id not in self.challenges:
            gl.vm.UserError("Challenge not found")

        challenge = self.challenges[challenge_id]

        if challenge.creator != gl.message.sender_address.as_hex:
            gl.vm.UserError("Only the creator can close this challenge")

        challenge.is_open = False

    # ------------------------------------------------------------------ #
    # Write: a passing submitter claims their proportional reward         #
    #                                                                     #
    # Payout formula (from the doc):                                      #
    #   each winner's share = (their_score / sum_of_all_passing_scores)   #
    #   payout = share * (pool_amount * (1 - protocol_fee))               #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def claim_reward(self, challenge_id: str) -> None:
        sender_hex = gl.message.sender_address.as_hex

        if challenge_id not in self.submissions or sender_hex not in self.submissions[challenge_id]:
            gl.vm.UserError("Submission not found")

        sub = self.submissions[challenge_id][sender_hex]

        if not sub.has_evaluated:
            gl.vm.UserError("Submission not yet evaluated")

        if not sub.passed:
            gl.vm.UserError("Submission did not pass — not eligible for reward")

        if sub.reward_claimed:
            gl.vm.UserError("Reward already claimed")

        challenge = self.challenges[challenge_id]

        if challenge.is_open:
            gl.vm.UserError("Challenge must be closed before claiming rewards")

        # Sum scores of all passing, evaluated submissions for this challenge
        total_passing_score = 0
        for submitter_hex, s in self.submissions[challenge_id].items():
            if s.has_evaluated and s.passed:
                total_passing_score += int(s.score)

        if total_passing_score == 0:
            gl.vm.UserError("No valid scores to calculate payout")

        # Apply 10% protocol fee
        pool = int(challenge.pool_amount)
        fee = pool * PROTOCOL_FEE_BPS // 100
        distributable = pool - fee

        # Proportional payout
        payout = distributable * int(sub.score) // total_passing_score

        sub.reward_claimed = True

        gl.message.sender_address.transfer(payout)

    # ------------------------------------------------------------------ #
    # Views                                                               #
    # ------------------------------------------------------------------ #
    @gl.public.view
    def get_challenge(self, challenge_id: str) -> dict:
        if challenge_id not in self.challenges:
            gl.vm.UserError("Challenge not found")
        c = self.challenges[challenge_id]
        return {
            "id": c.id,
            "title": c.title,
            "description": c.description,
            "rubric": c.rubric,
            "creator": c.creator,
            "pool_amount": int(c.pool_amount),
            "is_open": c.is_open,
        }

    @gl.public.view
    def get_all_challenges(self) -> list:
        result = []
        for k, c in self.challenges.items():
            result.append({
                "id": c.id,
                "title": c.title,
                "pool_amount": int(c.pool_amount),
                "is_open": c.is_open,
            })
        return result

    @gl.public.view
    def get_submission(self, challenge_id: str, submitter_address: str) -> dict:
        if challenge_id not in self.submissions:
            gl.vm.UserError("No submissions for this challenge")
        submitter_hex = Address(submitter_address).as_hex
        if submitter_hex not in self.submissions[challenge_id]:
            gl.vm.UserError("Submission not found")
        s = self.submissions[challenge_id][submitter_hex]
        return {
            "challenge_id": s.challenge_id,
            "submitter": s.submitter,
            "github_url": s.github_url,
            "has_evaluated": s.has_evaluated,
            "score": s.score,
            "feedback": s.feedback,
            "passed": s.passed,
            "reward_claimed": s.reward_claimed,
        }

    @gl.public.view
    def get_challenge_submissions(self, challenge_id: str) -> list:
        if challenge_id not in self.submissions:
            return []
        result = []
        for submitter_hex, s in self.submissions[challenge_id].items():
            result.append({
                "submitter": s.submitter,
                "score": s.score,
                "passed": s.passed,
                "has_evaluated": s.has_evaluated,
                "reward_claimed": s.reward_claimed,
            })
        return result

    @gl.public.view
    def get_reputation(self, player_address: str) -> dict:
        addr = Address(player_address)
        return {
            "cumulative_score": int(self.reputation.get(addr, 0)),
            "challenges_passed": int(self.pass_count.get(addr, 0)),
        }

    @gl.public.view
    def get_leaderboard(self) -> list:
        entries = []
        for addr, score in self.reputation.items():
            entries.append({
                "address": addr.as_hex,
                "cumulative_score": int(score),
                "challenges_passed": int(self.pass_count.get(addr, 0)),
            })
        # Sort descending by cumulative score
        entries.sort(key=lambda x: x["cumulative_score"], reverse=True)
        return entries