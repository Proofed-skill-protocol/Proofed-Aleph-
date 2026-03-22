"""
Integration tests for ProofOfSkill (contracts/proofed.py).

These cover deployment, funding, submissions, and access control without calling
`evaluate` (that path depends on nondeterministic LLM + web fetches).

Run with GenLayer Studio / localnet up: `gltest` (see project README).
"""

from gltest import get_contract_factory, default_account, accounts
from gltest.helpers import load_fixture
from gltest.assertions import tx_execution_succeeded, tx_execution_failed

# Small native-token amount for pool deposits (wei-style integer).
_POOL_WEI = 1_000_000_000_000_000  # 0.001 in 18-decimal terms if chain uses 18 decimals


def deploy_proofed_contract():
    factory = get_contract_factory("ProofOfSkill")
    contract = factory.deploy()

    assert contract.get_all_challenges(args=[]) == []
    assert contract.get_leaderboard(args=[]) == []
    rep = contract.get_reputation(args=[default_account.address])
    assert rep["cumulative_score"] == 0
    assert rep["challenges_passed"] == 0

    return contract


def test_proofed_create_challenge_and_views():
    contract = load_fixture(deploy_proofed_contract)

    cid = "basic_challenge_1"
    tx = contract.create_challenge(
        args=[
            cid,
            "Build a REST API",
            "Implement CRUD for items",
            "Code quality; tests; API design",
        ],
        value=_POOL_WEI,
    )
    assert tx_execution_succeeded(tx)

    ch = contract.get_challenge(args=[cid])
    assert ch["id"] == cid
    assert ch["title"] == "Build a REST API"
    assert ch["pool_amount"] == _POOL_WEI
    assert ch["is_open"] is True
    assert ch["creator"] == default_account.address

    all_ch = contract.get_all_challenges(args=[])
    assert len(all_ch) == 1
    assert all_ch[0]["id"] == cid


def test_proofed_duplicate_challenge_rejected():
    contract = load_fixture(deploy_proofed_contract)

    cid = "dup_test"
    tx1 = contract.create_challenge(
        args=[cid, "t", "d", "r"],
        value=_POOL_WEI,
    )
    assert tx_execution_succeeded(tx1)

    tx2 = contract.create_challenge(
        args=[cid, "t2", "d2", "r2"],
        value=_POOL_WEI,
    )
    assert tx_execution_failed(tx2)


def test_proofed_fund_challenge():
    contract = load_fixture(deploy_proofed_contract)

    cid = "fund_me"
    assert tx_execution_succeeded(
        contract.create_challenge(
            args=[cid, "title", "desc", "rubric"],
            value=_POOL_WEI,
        )
    )

    extra = _POOL_WEI // 2
    assert tx_execution_succeeded(
        contract.fund_challenge(args=[cid], value=extra)
    )

    ch = contract.get_challenge(args=[cid])
    assert ch["pool_amount"] == _POOL_WEI + extra


def test_proofed_fund_unknown_challenge_fails():
    contract = load_fixture(deploy_proofed_contract)

    tx = contract.fund_challenge(args=["missing"], value=_POOL_WEI)
    assert tx_execution_failed(tx)


def test_proofed_submit_and_query_submission():
    contract = load_fixture(deploy_proofed_contract)

    cid = "submit_flow"
    assert tx_execution_succeeded(
        contract.create_challenge(
            args=[cid, "Task", "Details", "Rubric text"],
            value=_POOL_WEI,
        )
    )

    repo = "https://github.com/octocat/Hello-World"
    assert tx_execution_succeeded(contract.submit(args=[cid, repo]))

    sub = contract.get_submission(args=[cid, default_account.address])
    assert sub["github_url"] == repo
    assert sub["has_evaluated"] is False
    assert sub["score"] == 0
    assert sub["reward_claimed"] is False

    subs = contract.get_challenge_submissions(args=[cid])
    assert len(subs) == 1
    assert subs[0]["submitter"] == default_account.address
    assert subs[0]["has_evaluated"] is False


def test_proofed_double_submit_rejected():
    contract = load_fixture(deploy_proofed_contract)

    cid = "double_submit"
    assert tx_execution_succeeded(
        contract.create_challenge(args=[cid, "t", "d", "r"], value=_POOL_WEI)
    )
    url = "https://github.com/octocat/Hello-World"
    assert tx_execution_succeeded(contract.submit(args=[cid, url]))

    tx2 = contract.submit(args=[cid, url])
    assert tx_execution_failed(tx2)


def test_proofed_non_creator_cannot_close():
    contract = load_fixture(deploy_proofed_contract)

    cid = "acl_close"
    assert tx_execution_succeeded(
        contract.create_challenge(args=[cid, "t", "d", "r"], value=_POOL_WEI)
    )

    other = contract.connect(accounts[1])
    tx = other.close_challenge(args=[cid])
    assert tx_execution_failed(tx)

    assert tx_execution_succeeded(contract.close_challenge(args=[cid]))
    ch = contract.get_challenge(args=[cid])
    assert ch["is_open"] is False


def test_proofed_evaluate_requires_prior_submit():
    """Calling evaluate without a submission must fail (no LLM run)."""
    contract = load_fixture(deploy_proofed_contract)

    cid = "eval_guard"
    assert tx_execution_succeeded(
        contract.create_challenge(args=[cid, "t", "d", "r"], value=_POOL_WEI)
    )

    tx = contract.evaluate(args=[cid])
    assert tx_execution_failed(tx)
