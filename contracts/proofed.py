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
    score: int          # FIX #4: was u32 — plain int avoids float-cast panic
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
    # Internal helpers                                                     #
    # ------------------------------------------------------------------ #

    @staticmethod
    def _github_to_readme_url(github_url: str) -> str:
        """
        FIX #2: Convert a GitHub repo URL to its raw README URL.
        GitHub repo pages render as a React SPA — gl.nondet.web.render()
        gets navigation boilerplate, not actual code content.
        Fetching the raw README gives validators real content to evaluate.

        https://github.com/user/repo  ->
        https://raw.githubusercontent.com/user/repo/main/README.md
        """
        url = github_url.rstrip("/")
        raw = url.replace("https://github.com/", "https://raw.githubusercontent.com/")
        return raw + "/main/README.md"

    # ------------------------------------------------------------------ #
    # Internal: AI evaluates a GitHub submission against a rubric         #
    # ------------------------------------------------------------------ #
    def _evaluate(self, github_url: str, task_title: str, rubric: str) -> dict:

        # FIX #2: use raw README URL so validators read actual repo content
        readme_url = self._github_to_readme_url(github_url)

        def get_result() -> str:
            # Fetch the README — this is where the real submission content lives
            page_content = gl.nondet.web.render(readme_url, mode="text")

            # Fallback message so the LLM still scores rather than errors
            if not page_content or len(page_content.strip()) < 50:
                page_content = (
                    "[README not accessible or empty. "
                    "Score based on URL pattern and available signals only.]"
                )

            prompt = f"""You are an expert technical evaluator for a Proof-of-Skill protocol.

Task Title: {task_title}
Evaluation Rubric:
{rubric}

Candidate's submitted GitHub repository README:
{page_content}

Evaluate the submission strictly against the rubric above.

Respond ONLY with this exact JSON format — no markdown, no code fences, no explanation outside the JSON:
{{
    "score": <integer from 0 to 100>,
    "passed": <true if score >= {PASS_THRESHOLD}, otherwise false>,
    "strengths": "<brief summary of what was done well>",
    "improvements": "<brief summary of what could be improved>",
    "category_breakdown": "<one sentence per rubric category with a sub-score>"
}}

Rules:
- Score must be an integer 0-100 based purely on the rubric.
- passed must equal true if and only if score >= {PASS_THRESHOLD}.
- Output must be valid JSON only. No markdown. No text before or after the JSON object.
"""
            # FIX #1: do NOT use response_format="json"
            # That returns a Python dict, whose serialization can differ
            # across validators (float precision, key order edge cases).
            # Instead: get the raw string, strip any markdown fences the
            # LLM occasionally adds, parse it, then re-serialize with
            # sort_keys=True so every validator produces an identical string.
            raw_str = gl.nondet.exec_prompt(prompt)
            clean = (
                raw_str.strip()
                .removeprefix("```json")
                .removeprefix("```")
                .removesuffix("```")
                .strip()
            )
            return json.dumps(json.loads(clean), sort_keys=True)

        # This is what makes the three validators reach consensus:
        # each runs get_result() independently and compares the JSON strings.
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
            raise gl.vm.UserError("Challenge ID already exists")  # FIX #3: must raise

        deposited = gl.message.value

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
            raise gl.vm.UserError("Challenge not found")  # FIX #3

        challenge = self.challenges[challenge_id]

        if not challenge.is_open:
            raise gl.vm.UserError("Challenge is closed")  # FIX #3

        challenge.pool_amount += gl.message.value

    # ------------------------------------------------------------------ #
    # Write: anyone submits a GitHub link for a challenge                 #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def submit(self, challenge_id: str, github_url: str) -> None:
        if challenge_id not in self.challenges:
            raise gl.vm.UserError("Challenge not found")  # FIX #3

        if not self.challenges[challenge_id].is_open:
            raise gl.vm.UserError("Challenge is closed")  # FIX #3

        sender_hex = gl.message.sender_address.as_hex

        if (
            challenge_id in self.submissions
            and sender_hex in self.submissions[challenge_id]
        ):
            raise gl.vm.UserError(  # FIX #3
                "You already have a submission for this challenge"
            )

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

        # FIX #5: explicit check instead of get_or_insert_default
        # get_or_insert_default() can throw if the inner TreeMap has no
        # registered default factory in some SDK versions.
        if challenge_id not in self.submissions:
            self.submissions[challenge_id] = TreeMap()
        self.submissions[challenge_id][sender_hex] = submission

    # ------------------------------------------------------------------ #
    # Write: evaluate your own submission (calls the AI)                  #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def evaluate(self, challenge_id: str) -> None:
        sender_hex = gl.message.sender_address.as_hex

        if (
            challenge_id not in self.submissions
            or sender_hex not in self.submissions[challenge_id]
        ):
            raise gl.vm.UserError("Submission not found")  # FIX #3

        sub = self.submissions[challenge_id][sender_hex]

        if sub.has_evaluated:
            raise gl.vm.UserError("Already evaluated")  # FIX #3

        challenge = self.challenges[challenge_id]
        result = self._evaluate(sub.github_url, challenge.title, challenge.rubric)

        sub.has_evaluated = True

        # FIX #4: plain int() — avoids panic if LLM returns 85.0 instead of 85
        sub.score = int(result["score"])
        sub.passed = bool(result["passed"])

        sub.feedback = json.dumps({
            "strengths": result.get("strengths", ""),
            "improvements": result.get("improvements", ""),
            "category_breakdown": result.get("category_breakdown", ""),
        })

        # FIX #4: use plain int arithmetic, let storage layer handle u256 typing
        sender_addr = gl.message.sender_address
        self.reputation[sender_addr] = (
            int(self.reputation.get(sender_addr, 0)) + int(sub.score)
        )

        if sub.passed:
            self.pass_count[sender_addr] = (
                int(self.pass_count.get(sender_addr, 0)) + 1
            )

    # ------------------------------------------------------------------ #
    # Write: creator closes challenge to new submissions                  #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def close_challenge(self, challenge_id: str) -> None:
        if challenge_id not in self.challenges:
            raise gl.vm.UserError("Challenge not found")  # FIX #3

        challenge = self.challenges[challenge_id]

        if challenge.creator != gl.message.sender_address.as_hex:
            raise gl.vm.UserError("Only the creator can close this challenge")  # FIX #3

        challenge.is_open = False

    # ------------------------------------------------------------------ #
    # Write: a passing submitter claims their proportional reward         #
    # ------------------------------------------------------------------ #
    @gl.public.write
    def claim_reward(self, challenge_id: str) -> None:
        sender_hex = gl.message.sender_address.as_hex

        if (
            challenge_id not in self.submissions
            or sender_hex not in self.submissions[challenge_id]
        ):
            raise gl.vm.UserError("Submission not found")  # FIX #3

        sub = self.submissions[challenge_id][sender_hex]

        if not sub.has_evaluated:
            raise gl.vm.UserError("Submission not yet evaluated")  # FIX #3

        if not sub.passed:
            raise gl.vm.UserError(  # FIX #3
                "Submission did not pass — not eligible for reward"
            )

        if sub.reward_claimed:
            raise gl.vm.UserError("Reward already claimed")  # FIX #3

        challenge = self.challenges[challenge_id]

        if challenge.is_open:
            raise gl.vm.UserError(  # FIX #3
                "Challenge must be closed before claiming rewards"
            )

        total_passing_score = 0
        for submitter_hex, s in self.submissions[challenge_id].items():
            if s.has_evaluated and s.passed:
                total_passing_score += int(s.score)

        if total_passing_score == 0:
            raise gl.vm.UserError("No valid scores to calculate payout")  # FIX #3

        pool = int(challenge.pool_amount)
        fee = pool * PROTOCOL_FEE_BPS // 100
        distributable = pool - fee

        payout = distributable * int(sub.score) // total_passing_score

        sub.reward_claimed = True
        gl.message.sender_address.transfer(payout)

    # ------------------------------------------------------------------ #
    # Views                                                               #
    # ------------------------------------------------------------------ #
    @gl.public.view
    def get_challenge(self, challenge_id: str) -> dict:
        if challenge_id not in self.challenges:
            raise gl.vm.UserError("Challenge not found")  # FIX #3
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
            raise gl.vm.UserError("No submissions for this challenge")  # FIX #3
        submitter_hex = Address(submitter_address).as_hex
        if submitter_hex not in self.submissions[challenge_id]:
            raise gl.vm.UserError("Submission not found")  # FIX #3
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
        entries.sort(key=lambda x: x["cumulative_score"], reverse=True)
        return entries