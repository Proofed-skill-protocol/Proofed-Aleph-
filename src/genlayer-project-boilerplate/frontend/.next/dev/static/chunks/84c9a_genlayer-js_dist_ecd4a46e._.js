(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-MLKGABMK.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__export",
    ()=>__export
]);
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
;
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-GEN4SJ6K.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chains_exports",
    ()=>chains_exports,
    "localnet",
    ()=>localnet,
    "studionet",
    ()=>studionet,
    "testnetAsimov",
    ()=>testnetAsimov
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-MLKGABMK.js [app-client] (ecmascript)");
// src/chains/localnet.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
// src/chains/index.ts
var chains_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__export"])(chains_exports, {
    localnet: ()=>localnet,
    studionet: ()=>studionet,
    testnetAsimov: ()=>testnetAsimov
});
;
var SIMULATOR_JSON_RPC_URL = "http://127.0.0.1:4000/api";
var CONSENSUS_MAIN_CONTRACT = {
    address: "0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575",
    abi: [
        {
            inputs: [],
            name: "AccessControlBadConfirmation",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    internalType: "bytes32",
                    name: "neededRole",
                    type: "bytes32"
                }
            ],
            name: "AccessControlUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "CallerNotMessages",
            type: "error"
        },
        {
            inputs: [],
            name: "CanNotAppeal",
            type: "error"
        },
        {
            inputs: [],
            name: "EmptyTransaction",
            type: "error"
        },
        {
            inputs: [],
            name: "FinalizationNotAllowed",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidAddress",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidGhostContract",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidInitialization",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidVote",
            type: "error"
        },
        {
            inputs: [],
            name: "MaxNumOfIterationsInPendingQueueReached",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "numOfMessages",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "maxAllocatedMessages",
                    type: "uint256"
                }
            ],
            name: "MaxNumOfMessagesExceeded",
            type: "error"
        },
        {
            inputs: [],
            name: "NonGenVMContract",
            type: "error"
        },
        {
            inputs: [],
            name: "NotInitializing",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }
            ],
            name: "OwnableInvalidOwner",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "ReentrancyGuardReentrantCall",
            type: "error"
        },
        {
            inputs: [],
            name: "TransactionNotAtPendingQueueHead",
            type: "error"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "appealer",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "appealBond",
                    type: "uint256"
                },
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "appealValidators",
                    type: "address[]"
                }
            ],
            name: "AppealStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }
            ],
            name: "ErrorMessage",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "ghostFactory",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genManager",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genTransactions",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genQueue",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genStaking",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genMessages",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "idleness",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "tribunalAppeal",
                    type: "address"
                }
            ],
            name: "ExternalContractsSet",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint64",
                    name: "version",
                    type: "uint64"
                }
            ],
            name: "Initialized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "activator",
                    type: "address"
                }
            ],
            name: "InternalMessageProcessed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "activator",
                    type: "address"
                }
            ],
            name: "NewTransaction",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferred",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "previousAdminRole",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "newAdminRole",
                    type: "bytes32"
                }
            ],
            name: "RoleAdminChanged",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleGranted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleRevoked",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "SlashAppealSubmitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionAccepted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "leader",
                    type: "address"
                }
            ],
            name: "TransactionActivated",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "batchId",
                    type: "uint256"
                },
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "validators",
                    type: "address[]"
                }
            ],
            name: "TransactionActivatedValidators",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "TransactionCancelled",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionFinalized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "oldValidator",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newValidator",
                    type: "address"
                }
            ],
            name: "TransactionIdleValidatorReplaced",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "validatorIndex",
                    type: "uint256"
                }
            ],
            name: "TransactionIdleValidatorReplacementFailed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newLeader",
                    type: "address"
                }
            ],
            name: "TransactionLeaderRotated",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionLeaderTimeout",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "bytes32[]",
                    name: "tx_ids",
                    type: "bytes32[]"
                }
            ],
            name: "TransactionNeedsRecomputation",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                },
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "validators",
                    type: "address[]"
                }
            ],
            name: "TransactionReceiptProposed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionUndetermined",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "TribunalAppealVoteCommitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "TribunalAppealVoteRevealed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "VoteCommitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "enum ITransactions.VoteType",
                    name: "voteType",
                    type: "uint8"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                },
                {
                    indexed: false,
                    internalType: "enum ITransactions.ResultType",
                    name: "result",
                    type: "uint8"
                }
            ],
            name: "VoteRevealed",
            type: "event"
        },
        {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "EVENTS_BATCH_SIZE",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes",
                    name: "_vrfProof",
                    type: "bytes"
                }
            ],
            name: "activateTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_sender",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "_numOfInitialValidators",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "_maxRotations",
                    type: "uint256"
                },
                {
                    internalType: "bytes",
                    name: "_txData",
                    type: "bytes"
                }
            ],
            name: "addTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "cancelTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_commitHash",
                    type: "bytes32"
                }
            ],
            name: "commitTribunalAppealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_commitHash",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_validatorIndex",
                    type: "uint256"
                }
            ],
            name: "commitVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "contracts",
            outputs: [
                {
                    internalType: "contract IGenManager",
                    name: "genManager",
                    type: "address"
                },
                {
                    internalType: "contract ITransactions",
                    name: "genTransactions",
                    type: "address"
                },
                {
                    internalType: "contract IQueues",
                    name: "genQueue",
                    type: "address"
                },
                {
                    internalType: "contract IGhostFactory",
                    name: "ghostFactory",
                    type: "address"
                },
                {
                    internalType: "contract IGenStaking",
                    name: "genStaking",
                    type: "address"
                },
                {
                    internalType: "contract IMessages",
                    name: "genMessages",
                    type: "address"
                },
                {
                    internalType: "contract IIdleness",
                    name: "idleness",
                    type: "address"
                },
                {
                    internalType: "contract ITribunalAppeal",
                    name: "tribunalAppeal",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256"
                },
                {
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }
            ],
            name: "executeMessage",
            outputs: [
                {
                    internalType: "bool",
                    name: "success",
                    type: "bool"
                }
            ],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "finalizeTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "getContracts",
            outputs: [
                {
                    components: [
                        {
                            internalType: "contract IGenManager",
                            name: "genManager",
                            type: "address"
                        },
                        {
                            internalType: "contract ITransactions",
                            name: "genTransactions",
                            type: "address"
                        },
                        {
                            internalType: "contract IQueues",
                            name: "genQueue",
                            type: "address"
                        },
                        {
                            internalType: "contract IGhostFactory",
                            name: "ghostFactory",
                            type: "address"
                        },
                        {
                            internalType: "contract IGenStaking",
                            name: "genStaking",
                            type: "address"
                        },
                        {
                            internalType: "contract IMessages",
                            name: "genMessages",
                            type: "address"
                        },
                        {
                            internalType: "contract IIdleness",
                            name: "idleness",
                            type: "address"
                        },
                        {
                            internalType: "contract ITribunalAppeal",
                            name: "tribunalAppeal",
                            type: "address"
                        }
                    ],
                    internalType: "struct IConsensusMain.ExternalContracts",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                }
            ],
            name: "getRoleAdmin",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "addr",
                    type: "address"
                }
            ],
            name: "ghostContracts",
            outputs: [
                {
                    internalType: "bool",
                    name: "isGhost",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "hasRole",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "pendingOwner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "proceedPendingQueueProcessing",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes",
                    name: "_txReceipt",
                    type: "bytes"
                },
                {
                    internalType: "uint256",
                    name: "_processingBlock",
                    type: "uint256"
                },
                {
                    components: [
                        {
                            internalType: "enum IMessages.MessageType",
                            name: "messageType",
                            type: "uint8"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptance",
                            type: "bool"
                        }
                    ],
                    internalType: "struct IMessages.SubmittedMessage[]",
                    name: "_messages",
                    type: "tuple[]"
                },
                {
                    internalType: "bytes",
                    name: "_vrfProof",
                    type: "bytes"
                }
            ],
            name: "proposeReceipt",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "callerConfirmation",
                    type: "address"
                }
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_voteHash",
                    type: "bytes32"
                },
                {
                    internalType: "enum ITribunalAppeal.TribunalVoteType",
                    name: "_voteType",
                    type: "uint8"
                },
                {
                    internalType: "uint256",
                    name: "_nonce",
                    type: "uint256"
                }
            ],
            name: "revealTribunalAppealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_voteHash",
                    type: "bytes32"
                },
                {
                    internalType: "enum ITransactions.VoteType",
                    name: "_voteType",
                    type: "uint8"
                },
                {
                    internalType: "uint256",
                    name: "_nonce",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "_validatorIndex",
                    type: "uint256"
                }
            ],
            name: "revealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_ghostFactory",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genManager",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genTransactions",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genQueue",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genStaking",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genMessages",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_idleness",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_tribunalAppeal",
                    type: "address"
                }
            ],
            name: "setExternalContracts",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "submitAppeal",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "submitSlashAppeal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4"
                }
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }
    ],
    bytecode: ""
};
var CONSENSUS_DATA_CONTRACT = {
    address: "0x88B0F18613Db92Bf970FfE264E02496e20a74D16",
    abi: [
        {
            inputs: [],
            name: "AccessControlBadConfirmation",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    internalType: "bytes32",
                    name: "neededRole",
                    type: "bytes32"
                }
            ],
            name: "AccessControlUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidInitialization",
            type: "error"
        },
        {
            inputs: [],
            name: "NotInitializing",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }
            ],
            name: "OwnableInvalidOwner",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "ReentrancyGuardReentrantCall",
            type: "error"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint64",
                    name: "version",
                    type: "uint64"
                }
            ],
            name: "Initialized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferred",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "previousAdminRole",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "newAdminRole",
                    type: "bytes32"
                }
            ],
            name: "RoleAdminChanged",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleGranted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleRevoked",
            type: "event"
        },
        {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_currentTimestamp",
                    type: "uint256"
                }
            ],
            name: "canFinalize",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "consensusMain",
            outputs: [
                {
                    internalType: "contract IConsensusMain",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getLastAppealResult",
            outputs: [
                {
                    internalType: "enum ITransactions.ResultType",
                    name: "",
                    type: "uint8"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestAcceptedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "pageSize",
                    type: "uint256"
                }
            ],
            name: "getLatestAcceptedTransactions",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData[]",
                    name: "",
                    type: "tuple[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestAcceptedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestFinalizedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "pageSize",
                    type: "uint256"
                }
            ],
            name: "getLatestFinalizedTransactions",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData[]",
                    name: "",
                    type: "tuple[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestFinalizedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestPendingTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "slot",
                    type: "uint256"
                }
            ],
            name: "getLatestPendingTxId",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestUndeterminedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestUndeterminedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getMessagesForTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "enum IMessages.MessageType",
                            name: "messageType",
                            type: "uint8"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptance",
                            type: "bool"
                        }
                    ],
                    internalType: "struct IMessages.SubmittedMessage[]",
                    name: "",
                    type: "tuple[]"
                },
                {
                    internalType: "address",
                    name: "ghostAddress",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getReadStateBlockRangeForTransaction",
            outputs: [
                {
                    internalType: "uint256",
                    name: "activationBlock",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "processingBlock",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "proposalBlock",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "endIndex",
                    type: "uint256"
                }
            ],
            name: "getRecipientQueues",
            outputs: [
                {
                    components: [
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "pending",
                            type: "tuple"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "accepted",
                            type: "tuple"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "undetermined",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "finalizedCount",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "issuedTxCount",
                            type: "uint256"
                        }
                    ],
                    internalType: "struct IQueues.RecipientQueuesView",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                }
            ],
            name: "getRoleAdmin",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "getTotalNumOfTransactions",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getTransactionAllData",
            outputs: [
                {
                    components: [
                        {
                            internalType: "bytes32",
                            name: "id",
                            type: "bytes32"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "previousStatus",
                            type: "uint8"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "created",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "pending",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "activated",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "committed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "lastVote",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealSubmitted",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.Timestamps",
                            name: "timestamps",
                            type: "tuple"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptanceMessages",
                            type: "bool"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "address[]",
                            name: "consumedValidators",
                            type: "address[]"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData[]",
                            name: "roundData",
                            type: "tuple[]"
                        }
                    ],
                    internalType: "struct ITransactions.Transaction",
                    name: "transaction",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_timestamp",
                    type: "uint256"
                }
            ],
            name: "getTransactionData",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "endIndex",
                    type: "uint256"
                }
            ],
            name: "getTransactionIndexToTxId",
            outputs: [
                {
                    internalType: "bytes32[]",
                    name: "",
                    type: "bytes32[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_timestamp",
                    type: "uint256"
                }
            ],
            name: "getTransactionStatus",
            outputs: [
                {
                    internalType: "enum ITransactions.TransactionStatus",
                    name: "",
                    type: "uint8"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getValidatorsForLastAppeal",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getValidatorsForLastRound",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "hasRole",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "hasTransactionOnAcceptanceMessages",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "hasTransactionOnFinalizationMessages",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_consensusMain",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_transactions",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_queues",
                    type: "address"
                }
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "pendingOwner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "queues",
            outputs: [
                {
                    internalType: "contract IQueues",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "callerConfirmation",
                    type: "address"
                }
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_consensusMain",
                    type: "address"
                }
            ],
            name: "setConsensusMain",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_queues",
                    type: "address"
                }
            ],
            name: "setQueues",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_transactions",
                    type: "address"
                }
            ],
            name: "setTransactions",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4"
                }
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "transactions",
            outputs: [
                {
                    internalType: "contract ITransactions",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }
    ],
    bytecode: ""
};
var localnet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 61999,
    name: "Genlayer Localnet",
    rpcUrls: {
        default: {
            http: [
                SIMULATOR_JSON_RPC_URL
            ]
        }
    },
    nativeCurrency: {
        name: "GEN Token",
        symbol: "GEN",
        decimals: 18
    },
    blockExplorers: {
        default: {
            name: "GenLayer Explorer",
            url: SIMULATOR_JSON_RPC_URL
        }
    },
    testnet: true,
    consensusMainContract: CONSENSUS_MAIN_CONTRACT,
    consensusDataContract: CONSENSUS_DATA_CONTRACT,
    defaultNumberOfInitialValidators: 5,
    defaultConsensusMaxRotations: 3
});
;
var SIMULATOR_JSON_RPC_URL2 = "https://studio.genlayer.com/api";
var EXPLORER_URL = "https://genlayer-explorer.vercel.app";
var CONSENSUS_MAIN_CONTRACT2 = {
    address: "0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575",
    abi: [
        {
            inputs: [],
            name: "AccessControlBadConfirmation",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    internalType: "bytes32",
                    name: "neededRole",
                    type: "bytes32"
                }
            ],
            name: "AccessControlUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "CallerNotMessages",
            type: "error"
        },
        {
            inputs: [],
            name: "CanNotAppeal",
            type: "error"
        },
        {
            inputs: [],
            name: "EmptyTransaction",
            type: "error"
        },
        {
            inputs: [],
            name: "FinalizationNotAllowed",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidAddress",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidGhostContract",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidInitialization",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidVote",
            type: "error"
        },
        {
            inputs: [],
            name: "MaxNumOfIterationsInPendingQueueReached",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "numOfMessages",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "maxAllocatedMessages",
                    type: "uint256"
                }
            ],
            name: "MaxNumOfMessagesExceeded",
            type: "error"
        },
        {
            inputs: [],
            name: "NonGenVMContract",
            type: "error"
        },
        {
            inputs: [],
            name: "NotInitializing",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }
            ],
            name: "OwnableInvalidOwner",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "ReentrancyGuardReentrantCall",
            type: "error"
        },
        {
            inputs: [],
            name: "TransactionNotAtPendingQueueHead",
            type: "error"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "appealer",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "appealBond",
                    type: "uint256"
                },
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "appealValidators",
                    type: "address[]"
                }
            ],
            name: "AppealStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }
            ],
            name: "ErrorMessage",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "ghostFactory",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genManager",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genTransactions",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genQueue",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genStaking",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genMessages",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "idleness",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "tribunalAppeal",
                    type: "address"
                }
            ],
            name: "ExternalContractsSet",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint64",
                    name: "version",
                    type: "uint64"
                }
            ],
            name: "Initialized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "activator",
                    type: "address"
                }
            ],
            name: "InternalMessageProcessed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "activator",
                    type: "address"
                }
            ],
            name: "NewTransaction",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferred",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "previousAdminRole",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "newAdminRole",
                    type: "bytes32"
                }
            ],
            name: "RoleAdminChanged",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleGranted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleRevoked",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "SlashAppealSubmitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionAccepted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "leader",
                    type: "address"
                }
            ],
            name: "TransactionActivated",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "batchId",
                    type: "uint256"
                },
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "validators",
                    type: "address[]"
                }
            ],
            name: "TransactionActivatedValidators",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "TransactionCancelled",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionFinalized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "oldValidator",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newValidator",
                    type: "address"
                }
            ],
            name: "TransactionIdleValidatorReplaced",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "validatorIndex",
                    type: "uint256"
                }
            ],
            name: "TransactionIdleValidatorReplacementFailed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newLeader",
                    type: "address"
                }
            ],
            name: "TransactionLeaderRotated",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionLeaderTimeout",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "bytes32[]",
                    name: "tx_ids",
                    type: "bytes32[]"
                }
            ],
            name: "TransactionNeedsRecomputation",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                },
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "validators",
                    type: "address[]"
                }
            ],
            name: "TransactionReceiptProposed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionUndetermined",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "TribunalAppealVoteCommitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "TribunalAppealVoteRevealed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "VoteCommitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "enum ITransactions.VoteType",
                    name: "voteType",
                    type: "uint8"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                },
                {
                    indexed: false,
                    internalType: "enum ITransactions.ResultType",
                    name: "result",
                    type: "uint8"
                }
            ],
            name: "VoteRevealed",
            type: "event"
        },
        {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "EVENTS_BATCH_SIZE",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes",
                    name: "_vrfProof",
                    type: "bytes"
                }
            ],
            name: "activateTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_sender",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "_numOfInitialValidators",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "_maxRotations",
                    type: "uint256"
                },
                {
                    internalType: "bytes",
                    name: "_txData",
                    type: "bytes"
                }
            ],
            name: "addTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "cancelTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_commitHash",
                    type: "bytes32"
                }
            ],
            name: "commitTribunalAppealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_commitHash",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_validatorIndex",
                    type: "uint256"
                }
            ],
            name: "commitVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "contracts",
            outputs: [
                {
                    internalType: "contract IGenManager",
                    name: "genManager",
                    type: "address"
                },
                {
                    internalType: "contract ITransactions",
                    name: "genTransactions",
                    type: "address"
                },
                {
                    internalType: "contract IQueues",
                    name: "genQueue",
                    type: "address"
                },
                {
                    internalType: "contract IGhostFactory",
                    name: "ghostFactory",
                    type: "address"
                },
                {
                    internalType: "contract IGenStaking",
                    name: "genStaking",
                    type: "address"
                },
                {
                    internalType: "contract IMessages",
                    name: "genMessages",
                    type: "address"
                },
                {
                    internalType: "contract IIdleness",
                    name: "idleness",
                    type: "address"
                },
                {
                    internalType: "contract ITribunalAppeal",
                    name: "tribunalAppeal",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256"
                },
                {
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }
            ],
            name: "executeMessage",
            outputs: [
                {
                    internalType: "bool",
                    name: "success",
                    type: "bool"
                }
            ],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "finalizeTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "getContracts",
            outputs: [
                {
                    components: [
                        {
                            internalType: "contract IGenManager",
                            name: "genManager",
                            type: "address"
                        },
                        {
                            internalType: "contract ITransactions",
                            name: "genTransactions",
                            type: "address"
                        },
                        {
                            internalType: "contract IQueues",
                            name: "genQueue",
                            type: "address"
                        },
                        {
                            internalType: "contract IGhostFactory",
                            name: "ghostFactory",
                            type: "address"
                        },
                        {
                            internalType: "contract IGenStaking",
                            name: "genStaking",
                            type: "address"
                        },
                        {
                            internalType: "contract IMessages",
                            name: "genMessages",
                            type: "address"
                        },
                        {
                            internalType: "contract IIdleness",
                            name: "idleness",
                            type: "address"
                        },
                        {
                            internalType: "contract ITribunalAppeal",
                            name: "tribunalAppeal",
                            type: "address"
                        }
                    ],
                    internalType: "struct IConsensusMain.ExternalContracts",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                }
            ],
            name: "getRoleAdmin",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "addr",
                    type: "address"
                }
            ],
            name: "ghostContracts",
            outputs: [
                {
                    internalType: "bool",
                    name: "isGhost",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "hasRole",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "pendingOwner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "proceedPendingQueueProcessing",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes",
                    name: "_txReceipt",
                    type: "bytes"
                },
                {
                    internalType: "uint256",
                    name: "_processingBlock",
                    type: "uint256"
                },
                {
                    components: [
                        {
                            internalType: "enum IMessages.MessageType",
                            name: "messageType",
                            type: "uint8"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptance",
                            type: "bool"
                        }
                    ],
                    internalType: "struct IMessages.SubmittedMessage[]",
                    name: "_messages",
                    type: "tuple[]"
                },
                {
                    internalType: "bytes",
                    name: "_vrfProof",
                    type: "bytes"
                }
            ],
            name: "proposeReceipt",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "callerConfirmation",
                    type: "address"
                }
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_voteHash",
                    type: "bytes32"
                },
                {
                    internalType: "enum ITribunalAppeal.TribunalVoteType",
                    name: "_voteType",
                    type: "uint8"
                },
                {
                    internalType: "uint256",
                    name: "_nonce",
                    type: "uint256"
                }
            ],
            name: "revealTribunalAppealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_voteHash",
                    type: "bytes32"
                },
                {
                    internalType: "enum ITransactions.VoteType",
                    name: "_voteType",
                    type: "uint8"
                },
                {
                    internalType: "uint256",
                    name: "_nonce",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "_validatorIndex",
                    type: "uint256"
                }
            ],
            name: "revealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_ghostFactory",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genManager",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genTransactions",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genQueue",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genStaking",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genMessages",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_idleness",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_tribunalAppeal",
                    type: "address"
                }
            ],
            name: "setExternalContracts",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "submitAppeal",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "submitSlashAppeal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4"
                }
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }
    ],
    bytecode: ""
};
var CONSENSUS_DATA_CONTRACT2 = {
    address: "0x88B0F18613Db92Bf970FfE264E02496e20a74D16",
    abi: [
        {
            inputs: [],
            name: "AccessControlBadConfirmation",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    internalType: "bytes32",
                    name: "neededRole",
                    type: "bytes32"
                }
            ],
            name: "AccessControlUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidInitialization",
            type: "error"
        },
        {
            inputs: [],
            name: "NotInitializing",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }
            ],
            name: "OwnableInvalidOwner",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "ReentrancyGuardReentrantCall",
            type: "error"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint64",
                    name: "version",
                    type: "uint64"
                }
            ],
            name: "Initialized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferred",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "previousAdminRole",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "newAdminRole",
                    type: "bytes32"
                }
            ],
            name: "RoleAdminChanged",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleGranted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleRevoked",
            type: "event"
        },
        {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_currentTimestamp",
                    type: "uint256"
                }
            ],
            name: "canFinalize",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "consensusMain",
            outputs: [
                {
                    internalType: "contract IConsensusMain",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getLastAppealResult",
            outputs: [
                {
                    internalType: "enum ITransactions.ResultType",
                    name: "",
                    type: "uint8"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestAcceptedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "pageSize",
                    type: "uint256"
                }
            ],
            name: "getLatestAcceptedTransactions",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData[]",
                    name: "",
                    type: "tuple[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestAcceptedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestFinalizedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "pageSize",
                    type: "uint256"
                }
            ],
            name: "getLatestFinalizedTransactions",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData[]",
                    name: "",
                    type: "tuple[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestFinalizedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestPendingTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "slot",
                    type: "uint256"
                }
            ],
            name: "getLatestPendingTxId",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestUndeterminedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestUndeterminedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getMessagesForTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "enum IMessages.MessageType",
                            name: "messageType",
                            type: "uint8"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptance",
                            type: "bool"
                        }
                    ],
                    internalType: "struct IMessages.SubmittedMessage[]",
                    name: "",
                    type: "tuple[]"
                },
                {
                    internalType: "address",
                    name: "ghostAddress",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getReadStateBlockRangeForTransaction",
            outputs: [
                {
                    internalType: "uint256",
                    name: "activationBlock",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "processingBlock",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "proposalBlock",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "endIndex",
                    type: "uint256"
                }
            ],
            name: "getRecipientQueues",
            outputs: [
                {
                    components: [
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "pending",
                            type: "tuple"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "accepted",
                            type: "tuple"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "undetermined",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "finalizedCount",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "issuedTxCount",
                            type: "uint256"
                        }
                    ],
                    internalType: "struct IQueues.RecipientQueuesView",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                }
            ],
            name: "getRoleAdmin",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "getTotalNumOfTransactions",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getTransactionAllData",
            outputs: [
                {
                    components: [
                        {
                            internalType: "bytes32",
                            name: "id",
                            type: "bytes32"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "previousStatus",
                            type: "uint8"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "created",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "pending",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "activated",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "committed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "lastVote",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealSubmitted",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.Timestamps",
                            name: "timestamps",
                            type: "tuple"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptanceMessages",
                            type: "bool"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "address[]",
                            name: "consumedValidators",
                            type: "address[]"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData[]",
                            name: "roundData",
                            type: "tuple[]"
                        }
                    ],
                    internalType: "struct ITransactions.Transaction",
                    name: "transaction",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_timestamp",
                    type: "uint256"
                }
            ],
            name: "getTransactionData",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "endIndex",
                    type: "uint256"
                }
            ],
            name: "getTransactionIndexToTxId",
            outputs: [
                {
                    internalType: "bytes32[]",
                    name: "",
                    type: "bytes32[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_timestamp",
                    type: "uint256"
                }
            ],
            name: "getTransactionStatus",
            outputs: [
                {
                    internalType: "enum ITransactions.TransactionStatus",
                    name: "",
                    type: "uint8"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getValidatorsForLastAppeal",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getValidatorsForLastRound",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "hasRole",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "hasTransactionOnAcceptanceMessages",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "hasTransactionOnFinalizationMessages",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_consensusMain",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_transactions",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_queues",
                    type: "address"
                }
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "pendingOwner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "queues",
            outputs: [
                {
                    internalType: "contract IQueues",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "callerConfirmation",
                    type: "address"
                }
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_consensusMain",
                    type: "address"
                }
            ],
            name: "setConsensusMain",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_queues",
                    type: "address"
                }
            ],
            name: "setQueues",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_transactions",
                    type: "address"
                }
            ],
            name: "setTransactions",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4"
                }
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "transactions",
            outputs: [
                {
                    internalType: "contract ITransactions",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }
    ],
    bytecode: ""
};
var studionet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 61999,
    name: "Genlayer Studio Network",
    rpcUrls: {
        default: {
            http: [
                SIMULATOR_JSON_RPC_URL2
            ]
        }
    },
    nativeCurrency: {
        name: "GEN Token",
        symbol: "GEN",
        decimals: 18
    },
    blockExplorers: {
        default: {
            name: "GenLayer Explorer",
            url: EXPLORER_URL
        }
    },
    testnet: true,
    consensusMainContract: CONSENSUS_MAIN_CONTRACT2,
    consensusDataContract: CONSENSUS_DATA_CONTRACT2,
    defaultNumberOfInitialValidators: 5,
    defaultConsensusMaxRotations: 3
});
;
var TESTNET_JSON_RPC_URL = " http://34.32.169.58:9151";
var EXPLORER_URL2 = "https://explorer-asimov.genlayer.com/";
var CONSENSUS_MAIN_CONTRACT3 = {
    address: "0xe30293d600fF9B2C865d91307826F28006A458f4",
    abi: [
        {
            inputs: [],
            name: "AccessControlBadConfirmation",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    internalType: "bytes32",
                    name: "neededRole",
                    type: "bytes32"
                }
            ],
            name: "AccessControlUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "CallerNotMessages",
            type: "error"
        },
        {
            inputs: [],
            name: "CanNotAppeal",
            type: "error"
        },
        {
            inputs: [],
            name: "EmptyTransaction",
            type: "error"
        },
        {
            inputs: [],
            name: "FinalizationNotAllowed",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidAddress",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidGhostContract",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidInitialization",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidVote",
            type: "error"
        },
        {
            inputs: [],
            name: "MaxNumOfIterationsInPendingQueueReached",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "numOfMessages",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "maxAllocatedMessages",
                    type: "uint256"
                }
            ],
            name: "MaxNumOfMessagesExceeded",
            type: "error"
        },
        {
            inputs: [],
            name: "NonGenVMContract",
            type: "error"
        },
        {
            inputs: [],
            name: "NotInitializing",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }
            ],
            name: "OwnableInvalidOwner",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "ReentrancyGuardReentrantCall",
            type: "error"
        },
        {
            inputs: [],
            name: "TransactionNotAtPendingQueueHead",
            type: "error"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "appealer",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "appealBond",
                    type: "uint256"
                },
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "appealValidators",
                    type: "address[]"
                }
            ],
            name: "AppealStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }
            ],
            name: "ErrorMessage",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "ghostFactory",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genManager",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genTransactions",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genQueue",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genStaking",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "genMessages",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "idleness",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "tribunalAppeal",
                    type: "address"
                }
            ],
            name: "ExternalContractsSet",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint64",
                    name: "version",
                    type: "uint64"
                }
            ],
            name: "Initialized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "activator",
                    type: "address"
                }
            ],
            name: "InternalMessageProcessed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "activator",
                    type: "address"
                }
            ],
            name: "NewTransaction",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferred",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "previousAdminRole",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "newAdminRole",
                    type: "bytes32"
                }
            ],
            name: "RoleAdminChanged",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleGranted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleRevoked",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "SlashAppealSubmitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionAccepted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "leader",
                    type: "address"
                }
            ],
            name: "TransactionActivated",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "TransactionCancelled",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionFinalized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "oldValidator",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newValidator",
                    type: "address"
                }
            ],
            name: "TransactionIdleValidatorReplaced",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "validatorIndex",
                    type: "uint256"
                }
            ],
            name: "TransactionIdleValidatorReplacementFailed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newLeader",
                    type: "address"
                }
            ],
            name: "TransactionLeaderRotated",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionLeaderTimeout",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "bytes32[]",
                    name: "tx_ids",
                    type: "bytes32[]"
                }
            ],
            name: "TransactionNeedsRecomputation",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                },
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "validators",
                    type: "address[]"
                }
            ],
            name: "TransactionReceiptProposed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tx_id",
                    type: "bytes32"
                }
            ],
            name: "TransactionUndetermined",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "TribunalAppealVoteCommitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "TribunalAppealVoteRevealed",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                }
            ],
            name: "VoteCommitted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "txId",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "validator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "enum ITransactions.VoteType",
                    name: "voteType",
                    type: "uint8"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isLastVote",
                    type: "bool"
                },
                {
                    indexed: false,
                    internalType: "enum ITransactions.ResultType",
                    name: "result",
                    type: "uint8"
                }
            ],
            name: "VoteRevealed",
            type: "event"
        },
        {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes",
                    name: "_vrfProof",
                    type: "bytes"
                }
            ],
            name: "activateTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_sender",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "_numOfInitialValidators",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "_maxRotations",
                    type: "uint256"
                },
                {
                    internalType: "bytes",
                    name: "_txData",
                    type: "bytes"
                }
            ],
            name: "addTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "cancelTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_commitHash",
                    type: "bytes32"
                }
            ],
            name: "commitTribunalAppealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_commitHash",
                    type: "bytes32"
                }
            ],
            name: "commitVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "contracts",
            outputs: [
                {
                    internalType: "contract IGenManager",
                    name: "genManager",
                    type: "address"
                },
                {
                    internalType: "contract ITransactions",
                    name: "genTransactions",
                    type: "address"
                },
                {
                    internalType: "contract IQueues",
                    name: "genQueue",
                    type: "address"
                },
                {
                    internalType: "contract IGhostFactory",
                    name: "ghostFactory",
                    type: "address"
                },
                {
                    internalType: "contract IGenStaking",
                    name: "genStaking",
                    type: "address"
                },
                {
                    internalType: "contract IMessages",
                    name: "genMessages",
                    type: "address"
                },
                {
                    internalType: "contract IIdleness",
                    name: "idleness",
                    type: "address"
                },
                {
                    internalType: "contract ITribunalAppeal",
                    name: "tribunalAppeal",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256"
                },
                {
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }
            ],
            name: "executeMessage",
            outputs: [
                {
                    internalType: "bool",
                    name: "success",
                    type: "bool"
                }
            ],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "finalizeTransaction",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "getContracts",
            outputs: [
                {
                    components: [
                        {
                            internalType: "contract IGenManager",
                            name: "genManager",
                            type: "address"
                        },
                        {
                            internalType: "contract ITransactions",
                            name: "genTransactions",
                            type: "address"
                        },
                        {
                            internalType: "contract IQueues",
                            name: "genQueue",
                            type: "address"
                        },
                        {
                            internalType: "contract IGhostFactory",
                            name: "ghostFactory",
                            type: "address"
                        },
                        {
                            internalType: "contract IGenStaking",
                            name: "genStaking",
                            type: "address"
                        },
                        {
                            internalType: "contract IMessages",
                            name: "genMessages",
                            type: "address"
                        },
                        {
                            internalType: "contract IIdleness",
                            name: "idleness",
                            type: "address"
                        },
                        {
                            internalType: "contract ITribunalAppeal",
                            name: "tribunalAppeal",
                            type: "address"
                        }
                    ],
                    internalType: "struct IConsensusMain.ExternalContracts",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                }
            ],
            name: "getRoleAdmin",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "addr",
                    type: "address"
                }
            ],
            name: "ghostContracts",
            outputs: [
                {
                    internalType: "bool",
                    name: "isGhost",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "hasRole",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "pendingOwner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "proceedPendingQueueProcessing",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes",
                    name: "_txReceipt",
                    type: "bytes"
                },
                {
                    internalType: "uint256",
                    name: "_processingBlock",
                    type: "uint256"
                },
                {
                    components: [
                        {
                            internalType: "enum IMessages.MessageType",
                            name: "messageType",
                            type: "uint8"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptance",
                            type: "bool"
                        }
                    ],
                    internalType: "struct IMessages.SubmittedMessage[]",
                    name: "_messages",
                    type: "tuple[]"
                },
                {
                    internalType: "bytes",
                    name: "_vrfProof",
                    type: "bytes"
                }
            ],
            name: "proposeReceipt",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "callerConfirmation",
                    type: "address"
                }
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_voteHash",
                    type: "bytes32"
                },
                {
                    internalType: "enum ITribunalAppeal.TribunalVoteType",
                    name: "_voteType",
                    type: "uint8"
                },
                {
                    internalType: "uint256",
                    name: "_nonce",
                    type: "uint256"
                }
            ],
            name: "revealTribunalAppealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "bytes32",
                    name: "_voteHash",
                    type: "bytes32"
                },
                {
                    internalType: "enum ITransactions.VoteType",
                    name: "_voteType",
                    type: "uint8"
                },
                {
                    internalType: "uint256",
                    name: "_nonce",
                    type: "uint256"
                }
            ],
            name: "revealVote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_ghostFactory",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genManager",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genTransactions",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genQueue",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genStaking",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_genMessages",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_idleness",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_tribunalAppeal",
                    type: "address"
                }
            ],
            name: "setExternalContracts",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "submitAppeal",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                }
            ],
            name: "submitSlashAppeal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4"
                }
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }
    ],
    bytecode: ""
};
var CONSENSUS_DATA_CONTRACT3 = {
    address: "0x2a50afD9d3E0ACC824aC4850d7B4c5561aB5D27a",
    abi: [
        {
            inputs: [],
            name: "AccessControlBadConfirmation",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    internalType: "bytes32",
                    name: "neededRole",
                    type: "bytes32"
                }
            ],
            name: "AccessControlUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "InvalidInitialization",
            type: "error"
        },
        {
            inputs: [],
            name: "NotInitializing",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }
            ],
            name: "OwnableInvalidOwner",
            type: "error"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error"
        },
        {
            inputs: [],
            name: "ReentrancyGuardReentrantCall",
            type: "error"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint64",
                    name: "version",
                    type: "uint64"
                }
            ],
            name: "Initialized",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferStarted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "OwnershipTransferred",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "previousAdminRole",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "newAdminRole",
                    type: "bytes32"
                }
            ],
            name: "RoleAdminChanged",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleGranted",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }
            ],
            name: "RoleRevoked",
            type: "event"
        },
        {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_txId",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_currentTimestamp",
                    type: "uint256"
                }
            ],
            name: "canFinalize",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "consensusMain",
            outputs: [
                {
                    internalType: "contract IConsensusMain",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getLastAppealResult",
            outputs: [
                {
                    internalType: "enum ITransactions.ResultType",
                    name: "",
                    type: "uint8"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestAcceptedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "pageSize",
                    type: "uint256"
                }
            ],
            name: "getLatestAcceptedTransactions",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData[]",
                    name: "",
                    type: "tuple[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestAcceptedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestFinalizedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "pageSize",
                    type: "uint256"
                }
            ],
            name: "getLatestFinalizedTransactions",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData[]",
                    name: "",
                    type: "tuple[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestFinalizedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestPendingTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "slot",
                    type: "uint256"
                }
            ],
            name: "getLatestPendingTxId",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestUndeterminedTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "txData",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }
            ],
            name: "getLatestUndeterminedTxCount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getMessagesForTransaction",
            outputs: [
                {
                    components: [
                        {
                            internalType: "enum IMessages.MessageType",
                            name: "messageType",
                            type: "uint8"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptance",
                            type: "bool"
                        }
                    ],
                    internalType: "struct IMessages.SubmittedMessage[]",
                    name: "",
                    type: "tuple[]"
                },
                {
                    internalType: "address",
                    name: "ghostAddress",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "numOfMessagesIssuedOnAcceptance",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "numOfMessagesIssuedOnFinalization",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getReadStateBlockRangeForTransaction",
            outputs: [
                {
                    internalType: "uint256",
                    name: "activationBlock",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "processingBlock",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "proposalBlock",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "endIndex",
                    type: "uint256"
                }
            ],
            name: "getRecipientQueues",
            outputs: [
                {
                    components: [
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "pending",
                            type: "tuple"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "accepted",
                            type: "tuple"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "head",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "tail",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "txIds",
                                    type: "bytes32[]"
                                }
                            ],
                            internalType: "struct IQueues.QueueInfoView",
                            name: "undetermined",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "finalizedCount",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "issuedTxCount",
                            type: "uint256"
                        }
                    ],
                    internalType: "struct IQueues.RecipientQueuesView",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                }
            ],
            name: "getRoleAdmin",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "getTotalNumOfTransactions",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getTransactionAllData",
            outputs: [
                {
                    components: [
                        {
                            internalType: "bytes32",
                            name: "id",
                            type: "bytes32"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "previousStatus",
                            type: "uint8"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "created",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "pending",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "activated",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "committed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "lastVote",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealSubmitted",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.Timestamps",
                            name: "timestamps",
                            type: "tuple"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "bool",
                            name: "onAcceptanceMessages",
                            type: "bool"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "address[]",
                            name: "consumedValidators",
                            type: "address[]"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData[]",
                            name: "roundData",
                            type: "tuple[]"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfMessagesIssuedOnAcceptance",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfMessagesIssuedOnFinalization",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "txOrigin",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "initialRotations",
                            type: "uint256"
                        }
                    ],
                    internalType: "struct ITransactions.Transaction",
                    name: "transaction",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_timestamp",
                    type: "uint256"
                }
            ],
            name: "getTransactionData",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "currentTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfInitialValidators",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "txSlot",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "createdTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "uint256",
                            name: "lastVoteTimestamp",
                            type: "uint256"
                        },
                        {
                            internalType: "bytes32",
                            name: "randomSeed",
                            type: "bytes32"
                        },
                        {
                            internalType: "enum ITransactions.ResultType",
                            name: "result",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes",
                            name: "txData",
                            type: "bytes"
                        },
                        {
                            internalType: "bytes",
                            name: "txReceipt",
                            type: "bytes"
                        },
                        {
                            components: [
                                {
                                    internalType: "enum IMessages.MessageType",
                                    name: "messageType",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address",
                                    name: "recipient",
                                    type: "address"
                                },
                                {
                                    internalType: "uint256",
                                    name: "value",
                                    type: "uint256"
                                },
                                {
                                    internalType: "bytes",
                                    name: "data",
                                    type: "bytes"
                                },
                                {
                                    internalType: "bool",
                                    name: "onAcceptance",
                                    type: "bool"
                                }
                            ],
                            internalType: "struct IMessages.SubmittedMessage[]",
                            name: "messages",
                            type: "tuple[]"
                        },
                        {
                            internalType: "enum IQueues.QueueType",
                            name: "queueType",
                            type: "uint8"
                        },
                        {
                            internalType: "uint256",
                            name: "queuePosition",
                            type: "uint256"
                        },
                        {
                            internalType: "address",
                            name: "activator",
                            type: "address"
                        },
                        {
                            internalType: "address",
                            name: "lastLeader",
                            type: "address"
                        },
                        {
                            internalType: "enum ITransactions.TransactionStatus",
                            name: "status",
                            type: "uint8"
                        },
                        {
                            internalType: "bytes32",
                            name: "txId",
                            type: "bytes32"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "activationBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "processingBlock",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "proposalBlock",
                                    type: "uint256"
                                }
                            ],
                            internalType: "struct ITransactions.ReadStateBlockRange",
                            name: "readStateBlockRange",
                            type: "tuple"
                        },
                        {
                            internalType: "uint256",
                            name: "numOfRounds",
                            type: "uint256"
                        },
                        {
                            components: [
                                {
                                    internalType: "uint256",
                                    name: "round",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "leaderIndex",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesCommitted",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "votesRevealed",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "appealBond",
                                    type: "uint256"
                                },
                                {
                                    internalType: "uint256",
                                    name: "rotationsLeft",
                                    type: "uint256"
                                },
                                {
                                    internalType: "enum ITransactions.ResultType",
                                    name: "result",
                                    type: "uint8"
                                },
                                {
                                    internalType: "address[]",
                                    name: "roundValidators",
                                    type: "address[]"
                                },
                                {
                                    internalType: "bytes32[]",
                                    name: "validatorVotesHash",
                                    type: "bytes32[]"
                                },
                                {
                                    internalType: "enum ITransactions.VoteType[]",
                                    name: "validatorVotes",
                                    type: "uint8[]"
                                }
                            ],
                            internalType: "struct ITransactions.RoundData",
                            name: "lastRound",
                            type: "tuple"
                        }
                    ],
                    internalType: "struct ConsensusData.TransactionData",
                    name: "",
                    type: "tuple"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "startIndex",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "endIndex",
                    type: "uint256"
                }
            ],
            name: "getTransactionIndexToTxId",
            outputs: [
                {
                    internalType: "bytes32[]",
                    name: "",
                    type: "bytes32[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                },
                {
                    internalType: "uint256",
                    name: "_timestamp",
                    type: "uint256"
                }
            ],
            name: "getTransactionStatus",
            outputs: [
                {
                    internalType: "enum ITransactions.TransactionStatus",
                    name: "",
                    type: "uint8"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getValidatorsForLastAppeal",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "getValidatorsForLastRound",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "hasRole",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "hasTransactionOnAcceptanceMessages",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_tx_id",
                    type: "bytes32"
                }
            ],
            name: "hasTransactionOnFinalizationMessages",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_consensusMain",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_transactions",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "_queues",
                    type: "address"
                }
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "pendingOwner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "queues",
            outputs: [
                {
                    internalType: "contract IQueues",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "callerConfirmation",
                    type: "address"
                }
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32"
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address"
                }
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_consensusMain",
                    type: "address"
                }
            ],
            name: "setConsensusMain",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_queues",
                    type: "address"
                }
            ],
            name: "setQueues",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_transactions",
                    type: "address"
                }
            ],
            name: "setTransactions",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4"
                }
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "transactions",
            outputs: [
                {
                    internalType: "contract ITransactions",
                    name: "",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }
    ],
    bytecode: ""
};
var testnetAsimov = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 4221,
    name: "Genlayer Asimov Testnet",
    rpcUrls: {
        default: {
            http: [
                TESTNET_JSON_RPC_URL
            ]
        }
    },
    nativeCurrency: {
        name: "GEN Token",
        symbol: "GEN",
        decimals: 18
    },
    blockExplorers: {
        default: {
            name: "GenLayer Asimov Explorer",
            url: EXPLORER_URL2
        }
    },
    testnet: true,
    consensusMainContract: CONSENSUS_MAIN_CONTRACT3,
    consensusDataContract: CONSENSUS_DATA_CONTRACT3,
    defaultNumberOfInitialValidators: 5,
    defaultConsensusMaxRotations: 3
});
;
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-47QDX7IX.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/types/calldata.ts
__turbopack_context__.s([
    "CalldataAddress",
    ()=>CalldataAddress,
    "DECIDED_STATES",
    ()=>DECIDED_STATES,
    "TransactionHashVariant",
    ()=>TransactionHashVariant,
    "TransactionResult",
    ()=>TransactionResult,
    "TransactionResultNameToNumber",
    ()=>TransactionResultNameToNumber,
    "TransactionStatus",
    ()=>TransactionStatus,
    "VoteType",
    ()=>VoteType,
    "isDecidedState",
    ()=>isDecidedState,
    "transactionResultNumberToName",
    ()=>transactionResultNumberToName,
    "transactionsStatusNameToNumber",
    ()=>transactionsStatusNameToNumber,
    "transactionsStatusNumberToName",
    ()=>transactionsStatusNumberToName,
    "voteTypeNameToNumber",
    ()=>voteTypeNameToNumber,
    "voteTypeNumberToName",
    ()=>voteTypeNumberToName
]);
var CalldataAddress = class {
    bytes;
    constructor(addr){
        if (addr.length != 20) {
            throw new Error(`invalid address length ${addr}`);
        }
        this.bytes = addr;
    }
};
// src/types/transactions.ts
var TransactionStatus = /* @__PURE__ */ ((TransactionStatus2)=>{
    TransactionStatus2["UNINITIALIZED"] = "UNINITIALIZED";
    TransactionStatus2["PENDING"] = "PENDING";
    TransactionStatus2["PROPOSING"] = "PROPOSING";
    TransactionStatus2["COMMITTING"] = "COMMITTING";
    TransactionStatus2["REVEALING"] = "REVEALING";
    TransactionStatus2["ACCEPTED"] = "ACCEPTED";
    TransactionStatus2["UNDETERMINED"] = "UNDETERMINED";
    TransactionStatus2["FINALIZED"] = "FINALIZED";
    TransactionStatus2["CANCELED"] = "CANCELED";
    TransactionStatus2["APPEAL_REVEALING"] = "APPEAL_REVEALING";
    TransactionStatus2["APPEAL_COMMITTING"] = "APPEAL_COMMITTING";
    TransactionStatus2["READY_TO_FINALIZE"] = "READY_TO_FINALIZE";
    TransactionStatus2["VALIDATORS_TIMEOUT"] = "VALIDATORS_TIMEOUT";
    TransactionStatus2["LEADER_TIMEOUT"] = "LEADER_TIMEOUT";
    return TransactionStatus2;
})(TransactionStatus || {});
var TransactionResult = /* @__PURE__ */ ((TransactionResult2)=>{
    TransactionResult2["SUCCESS"] = "SUCCESS";
    TransactionResult2["FAILURE"] = "FAILURE";
    return TransactionResult2;
})(TransactionResult || {});
var TransactionResult = /* @__PURE__ */ ((TransactionResult2)=>{
    TransactionResult2["IDLE"] = "IDLE";
    TransactionResult2["AGREE"] = "AGREE";
    TransactionResult2["DISAGREE"] = "DISAGREE";
    TransactionResult2["TIMEOUT"] = "TIMEOUT";
    TransactionResult2["DETERMINISTIC_VIOLATION"] = "DETERMINISTIC_VIOLATION";
    TransactionResult2["NO_MAJORITY"] = "NO_MAJORITY";
    TransactionResult2["MAJORITY_AGREE"] = "MAJORITY_AGREE";
    TransactionResult2["MAJORITY_DISAGREE"] = "MAJORITY_DISAGREE";
    return TransactionResult2;
})(TransactionResult || {});
var transactionsStatusNumberToName = {
    "0": "UNINITIALIZED" /* UNINITIALIZED */ ,
    "1": "PENDING" /* PENDING */ ,
    "2": "PROPOSING" /* PROPOSING */ ,
    "3": "COMMITTING" /* COMMITTING */ ,
    "4": "REVEALING" /* REVEALING */ ,
    "5": "ACCEPTED" /* ACCEPTED */ ,
    "6": "UNDETERMINED" /* UNDETERMINED */ ,
    "7": "FINALIZED" /* FINALIZED */ ,
    "8": "CANCELED" /* CANCELED */ ,
    "9": "APPEAL_REVEALING" /* APPEAL_REVEALING */ ,
    "10": "APPEAL_COMMITTING" /* APPEAL_COMMITTING */ ,
    "11": "READY_TO_FINALIZE" /* READY_TO_FINALIZE */ ,
    "12": "VALIDATORS_TIMEOUT" /* VALIDATORS_TIMEOUT */ ,
    "13": "LEADER_TIMEOUT" /* LEADER_TIMEOUT */ 
};
var transactionsStatusNameToNumber = {
    ["UNINITIALIZED" /* UNINITIALIZED */ ]: "0",
    ["PENDING" /* PENDING */ ]: "1",
    ["PROPOSING" /* PROPOSING */ ]: "2",
    ["COMMITTING" /* COMMITTING */ ]: "3",
    ["REVEALING" /* REVEALING */ ]: "4",
    ["ACCEPTED" /* ACCEPTED */ ]: "5",
    ["UNDETERMINED" /* UNDETERMINED */ ]: "6",
    ["FINALIZED" /* FINALIZED */ ]: "7",
    ["CANCELED" /* CANCELED */ ]: "8",
    ["APPEAL_REVEALING" /* APPEAL_REVEALING */ ]: "9",
    ["APPEAL_COMMITTING" /* APPEAL_COMMITTING */ ]: "10",
    ["READY_TO_FINALIZE" /* READY_TO_FINALIZE */ ]: "11",
    ["VALIDATORS_TIMEOUT" /* VALIDATORS_TIMEOUT */ ]: "12",
    ["LEADER_TIMEOUT" /* LEADER_TIMEOUT */ ]: "13"
};
var DECIDED_STATES = [
    "ACCEPTED" /* ACCEPTED */ ,
    "UNDETERMINED" /* UNDETERMINED */ ,
    "LEADER_TIMEOUT" /* LEADER_TIMEOUT */ ,
    "VALIDATORS_TIMEOUT" /* VALIDATORS_TIMEOUT */ ,
    "CANCELED" /* CANCELED */ ,
    "FINALIZED" /* FINALIZED */ 
];
function isDecidedState(status) {
    return DECIDED_STATES.some((state)=>transactionsStatusNameToNumber[state] === status);
}
var transactionResultNumberToName = {
    "0": "IDLE" /* IDLE */ ,
    "1": "AGREE" /* AGREE */ ,
    "2": "DISAGREE" /* DISAGREE */ ,
    "3": "TIMEOUT" /* TIMEOUT */ ,
    "4": "DETERMINISTIC_VIOLATION" /* DETERMINISTIC_VIOLATION */ ,
    "5": "NO_MAJORITY" /* NO_MAJORITY */ ,
    "6": "MAJORITY_AGREE" /* MAJORITY_AGREE */ ,
    "7": "MAJORITY_DISAGREE" /* MAJORITY_DISAGREE */ 
};
var TransactionResultNameToNumber = {
    ["IDLE" /* IDLE */ ]: "0",
    ["AGREE" /* AGREE */ ]: "1",
    ["DISAGREE" /* DISAGREE */ ]: "2",
    ["TIMEOUT" /* TIMEOUT */ ]: "3",
    ["DETERMINISTIC_VIOLATION" /* DETERMINISTIC_VIOLATION */ ]: "4",
    ["NO_MAJORITY" /* NO_MAJORITY */ ]: "5",
    ["MAJORITY_AGREE" /* MAJORITY_AGREE */ ]: "6",
    ["MAJORITY_DISAGREE" /* MAJORITY_DISAGREE */ ]: "7"
};
var VoteType = /* @__PURE__ */ ((VoteType2)=>{
    VoteType2["NOT_VOTED"] = "NOT_VOTED";
    VoteType2["AGREE"] = "AGREE";
    VoteType2["DISAGREE"] = "DISAGREE";
    VoteType2["TIMEOUT"] = "TIMEOUT";
    VoteType2["DETERMINISTIC_VIOLATION"] = "DETERMINISTIC_VIOLATION";
    return VoteType2;
})(VoteType || {});
var voteTypeNumberToName = {
    "0": "NOT_VOTED" /* NOT_VOTED */ ,
    "1": "AGREE" /* AGREE */ ,
    "2": "DISAGREE" /* DISAGREE */ ,
    "3": "TIMEOUT" /* TIMEOUT */ ,
    "4": "DETERMINISTIC_VIOLATION" /* DETERMINISTIC_VIOLATION */ 
};
var voteTypeNameToNumber = {
    ["NOT_VOTED" /* NOT_VOTED */ ]: "0",
    ["AGREE" /* AGREE */ ]: "1",
    ["DISAGREE" /* DISAGREE */ ]: "2",
    ["TIMEOUT" /* TIMEOUT */ ]: "3",
    ["DETERMINISTIC_VIOLATION" /* DETERMINISTIC_VIOLATION */ ]: "4"
};
var TransactionHashVariant = /* @__PURE__ */ ((TransactionHashVariant2)=>{
    TransactionHashVariant2["LATEST_FINAL"] = "latest-final";
    TransactionHashVariant2["LATEST_NONFINAL"] = "latest-nonfinal";
    return TransactionHashVariant2;
})(TransactionHashVariant || {});
;
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "abi",
    ()=>abi_exports,
    "createAccount",
    ()=>createAccount,
    "createClient",
    ()=>createClient,
    "decodeInputData",
    ()=>decodeInputData,
    "decodeLocalnetTransaction",
    ()=>decodeLocalnetTransaction,
    "decodeTransaction",
    ()=>decodeTransaction,
    "generatePrivateKey",
    ()=>generatePrivateKey,
    "simplifyTransactionReceipt",
    ()=>simplifyTransactionReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-GEN4SJ6K.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-47QDX7IX.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-MLKGABMK.js [app-client] (ecmascript)");
// src/client/client.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/clients/createClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/clients/decorators/public.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/clients/decorators/wallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/utils/encoding/toRlp.js [app-client] (ecmascript)");
// src/contracts/actions.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/constants/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
// src/transactions/decoders.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/utils/encoding/fromRlp.js [app-client] (ecmascript)");
// src/accounts/account.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$generatePrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/accounts/generatePrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/viem/_esm/accounts/privateKeyToAccount.js [app-client] (ecmascript)");
;
;
;
;
// src/accounts/actions.ts
function accountActions(client) {
    return {
        fundAccount: async ({ address, amount })=>{
            if (client.chain?.id !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"].id) {
                throw new Error("Client is not connected to the localnet");
            }
            return client.request({
                method: "sim_fundAccount",
                params: [
                    address,
                    amount
                ]
            });
        },
        getCurrentNonce: async ({ address, block = "latest" })=>{
            const addressToUse = address || client.account?.address;
            if (!addressToUse) {
                throw new Error("No address provided and no account is connected");
            }
            return client.request({
                method: "eth_getTransactionCount",
                params: [
                    addressToUse,
                    block
                ]
            });
        }
    };
}
// src/abi/calldata/index.ts
var calldata_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__export"])(calldata_exports, {
    decode: ()=>decode,
    encode: ()=>encode,
    makeCalldataObject: ()=>makeCalldataObject,
    toString: ()=>toString
});
// src/abi/calldata/consts.ts
var BITS_IN_TYPE = 3;
var TYPE_SPECIAL = 0;
var TYPE_PINT = 1;
var TYPE_NINT = 2;
var TYPE_BYTES = 3;
var TYPE_STR = 4;
var TYPE_ARR = 5;
var TYPE_MAP = 6;
var SPECIAL_NULL = 0 << BITS_IN_TYPE | TYPE_SPECIAL;
var SPECIAL_FALSE = 1 << BITS_IN_TYPE | TYPE_SPECIAL;
var SPECIAL_TRUE = 2 << BITS_IN_TYPE | TYPE_SPECIAL;
var SPECIAL_ADDR = 3 << BITS_IN_TYPE | TYPE_SPECIAL;
// src/abi/calldata/encoder.ts
function reportError(msg, data) {
    throw new Error(`invalid calldata input '${data}'`);
}
function writeNum(to, data) {
    if (data === 0n) {
        to.push(0);
        return;
    }
    while(data > 0){
        let cur = Number(data & 0x7fn);
        data >>= 7n;
        if (data > 0) {
            cur |= 128;
        }
        to.push(cur);
    }
}
function encodeNumWithType(to, data, type) {
    const res = data << BigInt(BITS_IN_TYPE) | BigInt(type);
    writeNum(to, res);
}
function encodeNum(to, data) {
    if (data >= 0n) {
        encodeNumWithType(to, data, TYPE_PINT);
    } else {
        encodeNumWithType(to, -data - 1n, TYPE_NINT);
    }
}
function compareString(l, r) {
    for(let index = 0; index < l.length && index < r.length; index++){
        const cur = l[index] - r[index];
        if (cur !== 0) {
            return cur;
        }
    }
    return l.length - r.length;
}
function encodeMap(to, arr) {
    const newEntries = Array.from(arr, ([k, v])=>[
            Array.from(k, (x)=>x.codePointAt(0)),
            new TextEncoder().encode(k),
            v
        ]);
    newEntries.sort((v1, v2)=>compareString(v1[0], v2[0]));
    for(let i = 1; i < newEntries.length; i++){
        if (compareString(newEntries[i - 1][0], newEntries[i][0]) === 0) {
            throw new Error(`duplicate key '${new TextDecoder().decode(newEntries[i][1])}'`);
        }
    }
    encodeNumWithType(to, BigInt(newEntries.length), TYPE_MAP);
    for (const [, k, v] of newEntries){
        writeNum(to, BigInt(k.length));
        for (const c of k){
            to.push(c);
        }
        encodeImpl(to, v);
    }
}
function encodeImpl(to, data) {
    if (data === null || data === void 0) {
        to.push(SPECIAL_NULL);
        return;
    }
    if (data === true) {
        to.push(SPECIAL_TRUE);
        return;
    }
    if (data === false) {
        to.push(SPECIAL_FALSE);
        return;
    }
    switch(typeof data){
        case "number":
            {
                if (!Number.isInteger(data)) {
                    reportError("floats are not supported", data);
                }
                encodeNum(to, BigInt(data));
                return;
            }
        case "bigint":
            {
                encodeNum(to, data);
                return;
            }
        case "string":
            {
                const str = new TextEncoder().encode(data);
                encodeNumWithType(to, BigInt(str.length), TYPE_STR);
                for (const c of str){
                    to.push(c);
                }
                return;
            }
        case "object":
            {
                if (data instanceof Uint8Array) {
                    encodeNumWithType(to, BigInt(data.length), TYPE_BYTES);
                    for (const c of data){
                        to.push(c);
                    }
                } else if (data instanceof Array) {
                    encodeNumWithType(to, BigInt(data.length), TYPE_ARR);
                    for (const c of data){
                        encodeImpl(to, c);
                    }
                } else if (data instanceof Map) {
                    encodeMap(to, data);
                } else if (data instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalldataAddress"]) {
                    to.push(SPECIAL_ADDR);
                    for (const c of data.bytes){
                        to.push(c);
                    }
                } else if (Object.getPrototypeOf(data) === Object.prototype) {
                    encodeMap(to, Object.entries(data));
                } else {
                    reportError("unknown object type", data);
                }
                return;
            }
        default:
            reportError("unknown base type", data);
    }
}
function encode(data) {
    const arr = [];
    encodeImpl(arr, data);
    return new Uint8Array(arr);
}
function makeCalldataObject(method, args, kwargs) {
    let ret = {};
    if (method) {
        ret["method"] = method;
    }
    if (args && args.length > 0) {
        ret["args"] = args;
    }
    if (kwargs) {
        if (kwargs instanceof Map) {
            if (kwargs.size > 0) {
                ret["kwargs"] = kwargs;
            }
        } else {
            let hasVal = false;
            for(const _k in kwargs){
                hasVal = true;
                break;
            }
            if (hasVal) {
                ret["kwargs"] = kwargs;
            }
        }
    }
    return ret;
}
// src/abi/calldata/decoder.ts
function readULeb128(data, index) {
    let res = 0n;
    let accum = 0n;
    let shouldContinue = true;
    while(shouldContinue){
        const byte = data[index.i];
        index.i++;
        const rest = byte & 127;
        res += BigInt(rest) * (1n << accum);
        accum += 7n;
        shouldContinue = byte >= 128;
    }
    return res;
}
function decodeImpl(data, index) {
    const cur = readULeb128(data, index);
    switch(cur){
        case BigInt(SPECIAL_NULL):
            return null;
        case BigInt(SPECIAL_TRUE):
            return true;
        case BigInt(SPECIAL_FALSE):
            return false;
        case BigInt(SPECIAL_ADDR):
            {
                const res = data.slice(index.i, index.i + 20);
                index.i += 20;
                return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalldataAddress"](res);
            }
    }
    const type = Number(cur & 0xffn) & (1 << BITS_IN_TYPE) - 1;
    const rest = cur >> BigInt(BITS_IN_TYPE);
    switch(type){
        case TYPE_BYTES:
            {
                const ret = data.slice(index.i, index.i + Number(rest));
                index.i += Number(rest);
                return ret;
            }
        case TYPE_PINT:
            return rest;
        case TYPE_NINT:
            return -1n - rest;
        case TYPE_STR:
            {
                const ret = data.slice(index.i, index.i + Number(rest));
                index.i += Number(rest);
                return new TextDecoder("utf-8").decode(ret);
            }
        case TYPE_ARR:
            {
                const ret = [];
                let elems = rest;
                while(elems > 0){
                    elems--;
                    ret.push(decodeImpl(data, index));
                }
                return ret;
            }
        case TYPE_MAP:
            {
                const ret = /* @__PURE__ */ new Map();
                let elems = rest;
                while(elems > 0){
                    elems--;
                    const strLen = Number(readULeb128(data, index));
                    const key = data.slice(index.i, index.i + strLen);
                    index.i += strLen;
                    const keyStr = new TextDecoder("utf-8").decode(key);
                    ret.set(keyStr, decodeImpl(data, index));
                }
                return ret;
            }
        default:
            throw new Error(`can't decode type from ${type} rest is ${rest} at pos ${index.i}`);
    }
}
function decode(data) {
    const index = {
        i: 0
    };
    const res = decodeImpl(data, index);
    if (index.i !== data.length) {
        throw new Error("some data left");
    }
    return res;
}
// src/abi/calldata/string.ts
function reportError2(msg, data) {
    throw new Error(`invalid calldata input '${data}'`);
}
function toStringImplMap(data, to) {
    to.push("{");
    for (const [k, v] of data){
        to.push(JSON.stringify(k));
        to.push(":");
        toStringImpl(v, to);
    }
    to.push("}");
}
function toStringImpl(data, to) {
    if (data === null || data === void 0) {
        to.push("null");
        return;
    }
    if (data === true) {
        to.push("true");
        return;
    }
    if (data === false) {
        to.push("false");
        return;
    }
    switch(typeof data){
        case "number":
            {
                if (!Number.isInteger(data)) {
                    reportError2("floats are not supported", data);
                }
                to.push(data.toString());
                return;
            }
        case "bigint":
            {
                to.push(data.toString());
                return;
            }
        case "string":
            {
                to.push(JSON.stringify(data));
                return;
            }
        case "object":
            {
                if (data instanceof Uint8Array) {
                    to.push("b#");
                    for (const b of data){
                        to.push(b.toString(16));
                    }
                } else if (data instanceof Array) {
                    to.push("[");
                    for (const c of data){
                        toStringImpl(c, to);
                        to.push(",");
                    }
                    to.push("]");
                } else if (data instanceof Map) {
                    toStringImplMap(data.entries(), to);
                } else if (data instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalldataAddress"]) {
                    to.push("addr#");
                    for (const c of data.bytes){
                        to.push(c.toString(16));
                    }
                } else if (Object.getPrototypeOf(data) === Object.prototype) {
                    toStringImplMap(Object.entries(data), to);
                } else {
                    reportError2("unknown object type", data);
                }
                return;
            }
        default:
            reportError2("unknown base type", data);
    }
}
function toString(data) {
    const to = [];
    toStringImpl(data, to);
    return to.join("");
}
// src/abi/transactions.ts
var transactions_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__export"])(transactions_exports, {
    serialize: ()=>serialize,
    serializeOne: ()=>serializeOne
});
;
function serializeOne(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(data);
}
function serialize(data) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRlp"])(data.map(serializeOne));
}
;
// src/abi/index.ts
var abi_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__export"])(abi_exports, {
    calldata: ()=>calldata,
    transactions: ()=>transactions
});
var calldata = calldata_exports;
var transactions = transactions_exports;
;
function b64ToArray(b64) {
    return Uint8Array.from(atob(b64), (c)=>c.charCodeAt(0));
}
function calldataToUserFriendlyJson(cd) {
    return {
        raw: Array.from(cd),
        readable: calldata.toString(calldata.decode(cd))
    };
}
var RESULT_CODES = /* @__PURE__ */ new Map([
    [
        0,
        "return"
    ],
    [
        1,
        "rollback"
    ],
    [
        2,
        "contract_error"
    ],
    [
        3,
        "error"
    ],
    [
        4,
        "none"
    ],
    [
        5,
        "no_leaders"
    ]
]);
function resultToUserFriendlyJson(cd64) {
    const raw = b64ToArray(cd64);
    const code = RESULT_CODES.get(raw[0]);
    let status;
    let payload = null;
    if (code === void 0) {
        status = "<unknown>";
    } else {
        status = code;
        if ([
            1,
            2
        ].includes(raw[0])) {
            payload = new TextDecoder("utf-8").decode(raw.slice(1));
        } else if (raw[0] == 0) {
            payload = calldataToUserFriendlyJson(raw.slice(1));
        }
    }
    return {
        raw: cd64,
        status,
        payload
    };
}
function toJsonSafeDeep(value) {
    return _toJsonSafeDeep(value, /* @__PURE__ */ new WeakSet());
}
function _toJsonSafeDeep(value, seen) {
    if (value === null || value === void 0) {
        return null;
    }
    const primitiveType = typeof value;
    if (primitiveType === "string" || primitiveType === "boolean" || primitiveType === "number") {
        return value;
    }
    if (primitiveType === "bigint") {
        const big = value;
        const abs = big < 0n ? -big : big;
        const maxSafe = 9007199254740991n;
        return abs <= maxSafe ? Number(big) : big.toString();
    }
    if (typeof value === "object") {
        if (seen.has(value)) {
            return null;
        }
        seen.add(value);
        if (value instanceof Uint8Array) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(value);
        }
        if (value instanceof Array) {
            return value.map((v)=>_toJsonSafeDeep(v, seen));
        }
        if (value instanceof Map) {
            const obj = {};
            for (const [k, v] of value.entries()){
                obj[k] = _toJsonSafeDeep(v, seen);
            }
            return obj;
        }
        if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalldataAddress"]) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(value.bytes);
        }
        if (Object.getPrototypeOf(value) === Object.prototype) {
            const obj = {};
            for (const [k, v] of Object.entries(value)){
                obj[k] = _toJsonSafeDeep(v, seen);
            }
            return obj;
        }
    }
    return value;
}
// src/contracts/actions.ts
var contractActions = (client, publicClient)=>{
    return {
        getContractCode: async (address)=>{
            if (client.chain.id !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"].id) {
                throw new Error("Getting contract code is not supported on this network");
            }
            const result = await client.request({
                method: "gen_getContractCode",
                params: [
                    address
                ]
            });
            const codeBytes = b64ToArray(result);
            return new TextDecoder().decode(codeBytes);
        },
        getContractSchema: async (address)=>{
            if (client.chain.id !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"].id) {
                throw new Error("Contract schema is not supported on this network");
            }
            const schema = await client.request({
                method: "gen_getContractSchema",
                params: [
                    address
                ]
            });
            return schema;
        },
        getContractSchemaForCode: async (contractCode)=>{
            if (client.chain.id !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"].id) {
                throw new Error("Contract schema is not supported on this network");
            }
            const schema = await client.request({
                method: "gen_getContractSchemaForCode",
                params: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(contractCode)
                ]
            });
            return schema;
        },
        readContract: async (args)=>{
            const { account, address, functionName, args: callArgs, kwargs, jsonSafeReturn = false, leaderOnly = false, transactionHashVariant = "latest-nonfinal" /* LATEST_NONFINAL */  } = args;
            const encodedData = [
                encode(makeCalldataObject(functionName, callArgs, kwargs)),
                leaderOnly
            ];
            const serializedData = serialize(encodedData);
            const senderAddress = account?.address ?? client.account?.address ?? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"];
            const requestParams = {
                type: "read",
                to: address,
                from: senderAddress,
                data: serializedData,
                transaction_hash_variant: transactionHashVariant
            };
            const result = await client.request({
                method: "gen_call",
                params: [
                    requestParams
                ]
            });
            const prefixedResult = `0x${result}`;
            if (args.rawReturn) {
                return prefixedResult;
            }
            const resultBinary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(prefixedResult, "bytes");
            const decoded = decode(resultBinary);
            if (!jsonSafeReturn) {
                return decoded;
            }
            return toJsonSafeDeep(decoded);
        },
        simulateWriteContract: async (args)=>{
            const { account, address, functionName, args: callArgs, kwargs, leaderOnly = false, transactionHashVariant = "latest-nonfinal" /* LATEST_NONFINAL */  } = args;
            const encodedData = [
                encode(makeCalldataObject(functionName, callArgs, kwargs)),
                leaderOnly
            ];
            const serializedData = serialize(encodedData);
            const senderAddress = account?.address ?? client.account?.address ?? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"];
            const requestParams = {
                type: "write",
                to: address,
                from: senderAddress,
                data: serializedData,
                transaction_hash_variant: transactionHashVariant
            };
            const result = await client.request({
                method: "gen_call",
                params: [
                    requestParams
                ]
            });
            const prefixedResult = `0x${result}`;
            if (args.rawReturn) {
                return prefixedResult;
            }
            const resultBinary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(prefixedResult, "bytes");
            return decode(resultBinary);
        },
        writeContract: async (args)=>{
            const { account, address, functionName, args: callArgs, kwargs, value = 0n, leaderOnly = false, consensusMaxRotations = client.chain.defaultConsensusMaxRotations } = args;
            const data = [
                encode(makeCalldataObject(functionName, callArgs, kwargs)),
                leaderOnly
            ];
            const serializedData = serialize(data);
            const senderAccount = account || client.account;
            const encodedData = _encodeAddTransactionData({
                client,
                senderAccount,
                recipient: address,
                data: serializedData,
                consensusMaxRotations
            });
            return _sendTransaction({
                client,
                publicClient,
                encodedData,
                senderAccount,
                value
            });
        },
        deployContract: async (args)=>{
            const { account, code, args: constructorArgs, kwargs, leaderOnly = false, consensusMaxRotations = client.chain.defaultConsensusMaxRotations } = args;
            const data = [
                code,
                encode(makeCalldataObject(void 0, constructorArgs, kwargs)),
                leaderOnly
            ];
            const serializedData = serialize(data);
            const senderAccount = account || client.account;
            const encodedData = _encodeAddTransactionData({
                client,
                senderAccount,
                recipient: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                data: serializedData,
                consensusMaxRotations
            });
            return _sendTransaction({
                client,
                publicClient,
                encodedData,
                senderAccount
            });
        },
        appealTransaction: async (args)=>{
            const { account, txId } = args;
            const senderAccount = account || client.account;
            const encodedData = _encodeSubmitAppealData({
                client,
                txId
            });
            return _sendTransaction({
                client,
                publicClient,
                encodedData,
                senderAccount
            });
        }
    };
};
var validateAccount = (Account3)=>{
    if (!Account3) {
        throw new Error("No account set. Configure the client with an account or pass an account to this function.");
    }
    return Account3;
};
var _encodeAddTransactionData = ({ client, senderAccount, recipient, data, consensusMaxRotations = client.chain.defaultConsensusMaxRotations })=>{
    const validatedSenderAccount = validateAccount(senderAccount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: client.chain.consensusMainContract?.abi,
        functionName: "addTransaction",
        args: [
            validatedSenderAccount.address,
            recipient,
            client.chain.defaultNumberOfInitialValidators,
            consensusMaxRotations,
            data
        ]
    });
};
var _encodeSubmitAppealData = ({ client, txId })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: client.chain.consensusMainContract?.abi,
        functionName: "submitAppeal",
        args: [
            txId
        ]
    });
};
var _sendTransaction = async ({ client, publicClient, encodedData, senderAccount, value = 0n })=>{
    if (!client.chain.consensusMainContract?.address) {
        throw new Error("Consensus main contract not initialized. Please ensure client is properly initialized.");
    }
    const validatedSenderAccount = validateAccount(senderAccount);
    const nonce = await client.getCurrentNonce({
        address: validatedSenderAccount.address
    });
    let estimatedGas;
    try {
        estimatedGas = await client.estimateTransactionGas({
            from: validatedSenderAccount.address,
            to: client.chain.consensusMainContract?.address,
            data: encodedData,
            value
        });
    } catch (error) {
        console.warn("Gas estimation failed, using fallback value:", error);
        estimatedGas = 200000n;
    }
    const transactionRequest = await client.prepareTransactionRequest({
        account: validatedSenderAccount,
        to: client.chain.consensusMainContract?.address,
        data: encodedData,
        type: "legacy",
        nonce: Number(nonce),
        value,
        gas: estimatedGas
    });
    if (validatedSenderAccount?.type !== "local") {
        const formattedRequest = {
            from: transactionRequest.from,
            to: transactionRequest.to,
            data: encodedData,
            value: transactionRequest.value ? `0x${transactionRequest.value.toString(16)}` : "0x0",
            gas: transactionRequest.gas ? `0x${transactionRequest.gas.toString(16)}` : "0x5208"
        };
        return await client.request({
            method: "eth_sendTransaction",
            params: [
                formattedRequest
            ]
        });
    }
    if (!validatedSenderAccount?.signTransaction) {
        throw new Error("Account does not support signTransaction");
    }
    const serializedTransaction = await validatedSenderAccount.signTransaction(transactionRequest);
    const txHash = await client.sendRawTransaction({
        serializedTransaction
    });
    const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash
    });
    if (receipt.status === "reverted") {
        throw new Error("Transaction reverted");
    }
    const newTxEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventLogs"])({
        abi: client.chain.consensusMainContract?.abi,
        eventName: "NewTransaction",
        logs: receipt.logs
    });
    if (newTxEvents.length === 0) {
        throw new Error("Transaction not processed by consensus");
    }
    return newTxEvents[0].args["txId"];
};
// src/config/transactions.ts
var transactionsConfig = {
    waitInterval: 3e3,
    retries: 10
};
// src/utils/async.ts
async function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
;
var FIELDS_TO_REMOVE = [
    "raw",
    "contract_state",
    "base64",
    "consensus_history",
    "tx_data",
    "eq_blocks_outputs",
    "r",
    "s",
    "v",
    "created_timestamp",
    "current_timestamp",
    "tx_execution_hash",
    "random_seed",
    "states",
    "contract_code",
    "appeal_failed",
    "appeal_leader_timeout",
    "appeal_processing_time",
    "appeal_undetermined",
    "appealed",
    "timestamp_appeal",
    "config_rotation_rounds",
    "rotation_count",
    "queue_position",
    "queue_type",
    "leader_timeout_validators",
    "triggered_by",
    "num_of_initial_validators",
    "timestamp_awaiting_finalization",
    "last_vote_timestamp",
    "read_state_block_range",
    "tx_slot",
    "blockHash",
    "blockNumber",
    "to",
    "transactionIndex"
];
var FIELD_NAME_MAPPINGS = {
    statusName: "status_name",
    typeHex: "type"
};
var decodeInputData = (rlpEncodedAppData, recipient)=>{
    if (!rlpEncodedAppData || rlpEncodedAppData === "0x" || rlpEncodedAppData.length <= 2) {
        return null;
    }
    try {
        const rlpDecodedArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromRlp"])(rlpEncodedAppData);
        if (rlpDecodedArray.length === 3) {
            return {
                code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(rlpDecodedArray[0], "string"),
                constructorArgs: rlpDecodedArray[1] && rlpDecodedArray[1] !== "0x" ? decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(rlpDecodedArray[1], "bytes")) : null,
                leaderOnly: rlpDecodedArray[2] === "0x01",
                type: "deploy",
                contractAddress: recipient
            };
        } else if (rlpDecodedArray.length === 2) {
            return {
                callData: rlpDecodedArray[0] && rlpDecodedArray[0] !== "0x" ? decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(rlpDecodedArray[0], "bytes")) : null,
                leaderOnly: rlpDecodedArray[1] === "0x01",
                type: "call"
            };
        } else {
            console.warn("[decodeInputData] WRITE: Unexpected RLP array length:", rlpDecodedArray.length, rlpDecodedArray);
            return null;
        }
    } catch (e) {
        console.error("[decodeInputData] Error during comprehensive decoding:", e, "Raw RLP App Data:", rlpEncodedAppData);
        return null;
    }
};
var decodeTransaction = (tx)=>{
    const txDataDecoded = decodeInputData(tx.txData, tx.recipient);
    const decodedTx = {
        ...tx,
        txData: tx.txData,
        txDataDecoded,
        currentTimestamp: tx.currentTimestamp.toString(),
        numOfInitialValidators: tx.numOfInitialValidators.toString(),
        txSlot: tx.txSlot.toString(),
        createdTimestamp: tx.createdTimestamp.toString(),
        lastVoteTimestamp: tx.lastVoteTimestamp.toString(),
        queuePosition: tx.queuePosition.toString(),
        numOfRounds: tx.numOfRounds.toString(),
        readStateBlockRange: {
            ...tx.readStateBlockRange,
            activationBlock: tx.readStateBlockRange.activationBlock.toString(),
            processingBlock: tx.readStateBlockRange.processingBlock.toString(),
            proposalBlock: tx.readStateBlockRange.proposalBlock.toString()
        },
        statusName: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsStatusNumberToName"][String(tx.status)],
        resultName: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionResultNumberToName"][String(tx.result)],
        lastRound: {
            ...tx.lastRound,
            round: tx.lastRound.round.toString(),
            leaderIndex: tx.lastRound.leaderIndex.toString(),
            votesCommitted: tx.lastRound.votesCommitted.toString(),
            votesRevealed: tx.lastRound.votesRevealed.toString(),
            appealBond: tx.lastRound.appealBond.toString(),
            rotationsLeft: tx.lastRound.rotationsLeft.toString(),
            validatorVotesName: tx.lastRound.validatorVotes.map((vote)=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voteTypeNumberToName"][String(vote)])
        }
    };
    return decodedTx;
};
var simplifyTransactionReceipt = (tx)=>{
    const simplifyObject = (obj, path = "")=>{
        if (obj === null || obj === void 0) return obj;
        if (Array.isArray(obj)) {
            return obj.map((item)=>simplifyObject(item, path)).filter((item)=>item !== void 0);
        }
        if (typeof obj === "object") {
            const result = {};
            for (const [key, value] of Object.entries(obj)){
                const currentPath = path ? `${path}.${key}` : key;
                if (FIELDS_TO_REMOVE.includes(key)) {
                    continue;
                }
                if (key === "node_config" && !path.includes("consensus_data")) {
                    continue;
                }
                if (key === "consensus_data" && typeof value === "object" && value !== null) {
                    const simplifiedConsensus = {};
                    if ("votes" in value) {
                        simplifiedConsensus.votes = value.votes;
                    }
                    if ("leader_receipt" in value && Array.isArray(value.leader_receipt)) {
                        simplifiedConsensus.leader_receipt = value.leader_receipt.map((receipt)=>{
                            const simplifiedReceipt = {};
                            [
                                "execution_result",
                                "genvm_result",
                                "mode",
                                "vote",
                                "node_config"
                            ].forEach((field)=>{
                                if (field in receipt) {
                                    simplifiedReceipt[field] = receipt[field];
                                }
                            });
                            if (receipt.calldata && typeof receipt.calldata === "object" && "readable" in receipt.calldata) {
                                simplifiedReceipt.calldata = {
                                    readable: receipt.calldata.readable
                                };
                            }
                            if (receipt.eq_outputs) {
                                simplifiedReceipt.eq_outputs = simplifyObject(receipt.eq_outputs, currentPath);
                            }
                            if (receipt.result) {
                                simplifiedReceipt.result = simplifyObject(receipt.result, currentPath);
                            }
                            return simplifiedReceipt;
                        });
                    }
                    if ("validators" in value && Array.isArray(value.validators)) {
                        const simplifiedValidators = value.validators.map((validator)=>{
                            const simplifiedValidator = {};
                            [
                                "execution_result",
                                "genvm_result",
                                "mode",
                                "vote",
                                "node_config"
                            ].forEach((field)=>{
                                if (field in validator) {
                                    simplifiedValidator[field] = validator[field];
                                }
                            });
                            return simplifiedValidator;
                        }).filter((validator)=>Object.keys(validator).length > 0);
                        if (simplifiedValidators.length > 0) {
                            simplifiedConsensus.validators = simplifiedValidators;
                        }
                    }
                    result[key] = simplifiedConsensus;
                    continue;
                }
                const simplifiedValue = simplifyObject(value, currentPath);
                const shouldInclude = simplifiedValue !== void 0 && !(typeof simplifiedValue === "object" && simplifiedValue !== null && Object.keys(simplifiedValue).length === 0);
                if (shouldInclude || simplifiedValue === 0) {
                    const mappedKey = FIELD_NAME_MAPPINGS[key] || key;
                    result[mappedKey] = simplifiedValue;
                }
            }
            return result;
        }
        return obj;
    };
    return simplifyObject({
        ...tx
    });
};
var decodeLocalnetTransaction = (tx)=>{
    if (!tx.data) return tx;
    try {
        const leaderReceipt = tx.consensus_data?.leader_receipt;
        if (leaderReceipt) {
            const receipts = Array.isArray(leaderReceipt) ? leaderReceipt : [
                leaderReceipt
            ];
            receipts.forEach((receipt)=>{
                if (receipt.result && typeof receipt.result === "string") {
                    receipt.result = resultToUserFriendlyJson(receipt.result);
                }
                if (receipt.calldata && typeof receipt.calldata === "string") {
                    receipt.calldata = {
                        base64: receipt.calldata,
                        ...calldataToUserFriendlyJson(b64ToArray(receipt.calldata))
                    };
                }
                if (receipt.eq_outputs) {
                    const decodedOutputs = {};
                    for (const [key, value] of Object.entries(receipt.eq_outputs)){
                        if (typeof value === "object" && value !== null) {
                            decodedOutputs[key] = value;
                        } else {
                            try {
                                decodedOutputs[key] = resultToUserFriendlyJson(value);
                            } catch (e) {
                                console.warn(`Error decoding eq_output ${key}: ${e}`);
                                decodedOutputs[key] = value;
                            }
                        }
                    }
                    receipt.eq_outputs = decodedOutputs;
                }
            });
        }
        if (tx.data?.calldata && typeof tx.data.calldata === "string") {
            tx.data.calldata = {
                base64: tx.data.calldata,
                ...calldataToUserFriendlyJson(b64ToArray(tx.data.calldata))
            };
        }
    } catch (e) {
        console.error("Error in decodeLocalnetTransaction:", e);
    }
    return tx;
};
// src/transactions/actions.ts
var receiptActions = (client, publicClient)=>({
        waitForTransactionReceipt: async ({ hash, status = "ACCEPTED" /* ACCEPTED */ , interval = transactionsConfig.waitInterval, retries = transactionsConfig.retries, fullTransaction = false })=>{
            const transaction = await client.getTransaction({
                hash
            });
            if (!transaction) {
                throw new Error("Transaction not found");
            }
            const transactionStatusString = String(transaction.status);
            const requestedStatus = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsStatusNameToNumber"][status];
            if (transactionStatusString === requestedStatus || status === "ACCEPTED" /* ACCEPTED */  && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDecidedState"])(transactionStatusString)) {
                let finalTransaction = transaction;
                if (client.chain.id === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"].id) {
                    finalTransaction = decodeLocalnetTransaction(transaction);
                }
                if (!fullTransaction) {
                    return simplifyTransactionReceipt(finalTransaction);
                }
                return finalTransaction;
            }
            if (retries === 0) {
                throw new Error("Transaction status is not " + status);
            }
            await sleep(interval);
            return receiptActions(client, publicClient).waitForTransactionReceipt({
                hash,
                status,
                interval,
                retries: retries - 1,
                fullTransaction
            });
        }
    });
var transactionActions = (client, publicClient)=>({
        getTransaction: async ({ hash })=>{
            if (client.chain.id === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"].id) {
                const transaction2 = await client.getTransaction({
                    hash
                });
                const localnetStatus = transaction2.status === "ACTIVATED" ? "PENDING" /* PENDING */  : transaction2.status;
                transaction2.status = Number(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$47QDX7IX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsStatusNameToNumber"][localnetStatus]);
                transaction2.statusName = localnetStatus;
                return decodeLocalnetTransaction(transaction2);
            }
            const transaction = await publicClient.readContract({
                address: client.chain.consensusDataContract?.address,
                abi: client.chain.consensusDataContract?.abi,
                functionName: "getTransactionData",
                args: [
                    hash,
                    Math.round(/* @__PURE__ */ new Date().getTime() / 1e3)
                ]
            });
            return decodeTransaction(transaction);
        },
        estimateTransactionGas: async (transactionParams)=>{
            const formattedParams = {
                from: transactionParams.from || client.account?.address,
                to: transactionParams.to,
                data: transactionParams.data || "0x",
                value: transactionParams.value ? `0x${transactionParams.value.toString(16)}` : "0x0"
            };
            const gasHex = await client.request({
                method: "eth_estimateGas",
                params: [
                    formattedParams
                ]
            });
            return BigInt(gasHex);
        }
    });
// src/config/snapID.ts
var snapID = {
    local: "local:http://localhost:8081",
    npm: "npm:genlayer-wallet-plugin"
};
// src/wallet/connect.ts
var networks = {
    localnet: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"],
    studionet: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studionet"],
    testnetAsimov: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testnetAsimov"]
};
var connect = async (client, network = "studionet", snapSource = "npm")=>{
    if (!window.ethereum) {
        throw new Error("MetaMask is not installed.");
    }
    if (network === "mainnet") {
        throw new Error(`${network} is not available yet. Please use localnet.`);
    }
    const selectedNetwork = networks[network];
    if (!selectedNetwork) {
        throw new Error(`Network configuration for '${network}' is not available.`);
    }
    const chainIdHex = `0x${selectedNetwork.id.toString(16)}`;
    const chainParams = {
        chainId: chainIdHex,
        chainName: selectedNetwork.name,
        rpcUrls: selectedNetwork.rpcUrls.default.http,
        nativeCurrency: selectedNetwork.nativeCurrency,
        blockExplorerUrls: [
            selectedNetwork.blockExplorers?.default.url
        ]
    };
    const currentChainId = await window.ethereum.request({
        method: "eth_chainId"
    });
    if (currentChainId !== chainIdHex) {
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                chainParams
            ]
        });
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: chainIdHex
                }
            ]
        });
    }
    const id = snapSource === "local" ? snapID.local : snapID.npm;
    const installedSnaps = await window.ethereum.request({
        method: "wallet_getSnaps"
    });
    const isGenLayerSnapInstalled = Object.values(installedSnaps).some((snap)=>snap.id === id);
    if (!isGenLayerSnapInstalled) {
        await window.ethereum.request({
            method: "wallet_requestSnaps",
            params: {
                [id]: {}
            }
        });
    }
    client.chain = selectedNetwork;
};
// src/wallet/metamaskClient.ts
var metamaskClient = async (snapSource = "npm")=>{
    if (typeof window === "undefined" || !window.ethereum) {
        throw new Error("MetaMask is not installed.");
    }
    const isFlask = async ()=>{
        try {
            const clientVersion = await window.ethereum?.request({
                method: "web3_clientVersion"
            });
            return clientVersion?.includes("flask");
        } catch (error) {
            console.error("Error detecting Flask:", error);
            return false;
        }
    };
    const installedSnaps = async ()=>{
        try {
            return await window.ethereum?.request({
                method: "wallet_getSnaps"
            });
        } catch (error) {
            console.error("Error getting installed snaps:", error);
            return {};
        }
    };
    const isGenLayerSnapInstalled = async ()=>{
        const id = snapSource === "local" ? snapID.local : snapID.npm;
        const snaps = await installedSnaps();
        return Object.values(snaps).some((snap)=>snap.id === id);
    };
    const flaskDetected = await isFlask();
    const snapsList = await installedSnaps();
    const genLayerSnapInstalled = await isGenLayerSnapInstalled();
    return {
        isFlask: flaskDetected,
        installedSnaps: snapsList,
        isGenLayerSnapInstalled: genLayerSnapInstalled
    };
};
// src/wallet/actions.ts
function walletActions(client) {
    return {
        connect: (network, snapSource)=>connect(client, network, snapSource),
        metamaskClient: (snapSource = "npm")=>metamaskClient(snapSource)
    };
}
// src/chains/actions.ts
function chainActions(client) {
    return {
        initializeConsensusSmartContract: async (forceReset = false)=>{
            if (client.chain?.id === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testnetAsimov"].id) {
                return;
            }
            if (!forceReset && client.chain.consensusMainContract?.address && client.chain.consensusMainContract?.abi) {
                return;
            }
            const contractsResponse = await fetch(client.chain.rpcUrls.default.http[0], {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    jsonrpc: "2.0",
                    id: Date.now(),
                    method: "sim_getConsensusContract",
                    params: [
                        "ConsensusMain"
                    ]
                })
            });
            if (!contractsResponse.ok) {
                throw new Error("Failed to fetch ConsensusMain contract");
            }
            const consensusMainContract = await contractsResponse.json();
            client.chain.consensusMainContract = consensusMainContract.result;
        }
    };
}
// src/client/client.ts
var getCustomTransportConfig = (config)=>{
    const isAddress = typeof config.account !== "object";
    return {
        async request ({ method, params = [] }) {
            if (method.startsWith("eth_") && isAddress) {
                try {
                    const provider = config.provider || window.ethereum;
                    if (!provider) {
                        throw new Error("No wallet provider available");
                    }
                    return await provider.request({
                        method,
                        params
                    });
                } catch (err) {
                    console.warn(`Error using provider for method ${method}:`, err);
                    throw err;
                }
            } else {
                if (!config.chain) {
                    throw new Error("Chain is not set");
                }
                try {
                    const response = await fetch(config.chain.rpcUrls.default.http[0], {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            jsonrpc: "2.0",
                            id: Date.now(),
                            method,
                            params
                        })
                    });
                    const data = await response.json();
                    if (data.error) {
                        throw data.error;
                    }
                    return data.result;
                } catch (err) {
                    console.error(`Error fetching ${method} from GenLayer RPC`);
                    throw err;
                }
            }
        }
    };
};
var createClient = (config = {
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"]
})=>{
    const chainConfig = config.chain || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localnet"];
    if (config.endpoint) {
        chainConfig.rpcUrls.default.http = [
            config.endpoint
        ];
    }
    const customTransport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(getCustomTransportConfig(config), {
        retryCount: 0,
        retryDelay: 0
    });
    const publicClient = createPublicClient(chainConfig, customTransport).extend(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicActions"]);
    const baseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
        chain: chainConfig,
        transport: customTransport,
        ...config.account ? {
            account: config.account
        } : {}
    });
    const clientWithBasicActions = baseClient.extend(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicActions"]).extend(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletActions"]).extend((client)=>accountActions(client));
    const clientWithTransactionActions = {
        ...clientWithBasicActions,
        ...transactionActions(clientWithBasicActions, publicClient),
        ...chainActions(clientWithBasicActions),
        ...walletActions(clientWithBasicActions)
    };
    const clientWithAllActions = {
        ...clientWithTransactionActions,
        ...contractActions(clientWithTransactionActions, publicClient)
    };
    const finalClient = {
        ...clientWithAllActions,
        ...receiptActions(clientWithAllActions, publicClient)
    };
    finalClient.initializeConsensusSmartContract().catch((error)=>{
        console.error("Failed to initialize consensus smart contract:", error);
    });
    return finalClient;
};
var createPublicClient = (chainConfig, customTransport)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
        chain: chainConfig,
        transport: customTransport
    });
};
;
var generatePrivateKey = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$generatePrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePrivateKey"])();
var createAccount = (accountPrivateKey)=>{
    const privateKey = accountPrivateKey || generatePrivateKey();
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateKeyToAccount"])(privateKey);
    return account;
};
;
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chains/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-GEN4SJ6K.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-MLKGABMK.js [app-client] (ecmascript)");
;
;
;
}),
]);

//# sourceMappingURL=84c9a_genlayer-js_dist_ecd4a46e._.js.map