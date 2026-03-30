(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/wallet.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAddress",
    ()=>formatAddress
]);
/**
 * Re-export wallet functionality from WalletProvider
 * This maintains backward compatibility with existing imports
 * All components that import from this file will now use shared context state
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx [app-client] (ecmascript)");
"use client";
;
function formatAddress(address, maxLength = 12) {
    if (!address) return "";
    if (address.length <= maxLength) return address;
    const prefixLength = Math.floor((maxLength - 3) / 2);
    const suffixLength = Math.ceil((maxLength - 3) / 2);
    return `${address.slice(0, prefixLength)}...${address.slice(-suffixLength)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/contracts/FootballBets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chains/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-GEN4SJ6K.js [app-client] (ecmascript)");
;
;
/**
 * FootballBets contract class for interacting with the GenLayer Football Betting contract
 */ class FootballBets {
    contractAddress;
    client;
    constructor(contractAddress, address, studioUrl){
        this.contractAddress = contractAddress;
        const config = {
            chain: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studionet"]
        };
        if (address) {
            config.account = address;
        }
        if (studioUrl) {
            config.endpoint = studioUrl;
        }
        this.client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(config);
    }
    /**
   * Update the address used for transactions
   */ updateAccount(address) {
        const config = {
            chain: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studionet"],
            account: address
        };
        this.client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(config);
    }
    /**
   * Get all bets from the contract
   * @returns Array of bets with their details
   */ async getBets() {
        try {
            const bets = await this.client.readContract({
                address: this.contractAddress,
                functionName: "get_bets",
                args: []
            });
            // Convert GenLayer Map structure to typed array
            if (bets instanceof Map) {
                return Array.from(bets.entries()).flatMap(([owner, betMap])=>{
                    return Array.from(betMap.entries()).map(([id, betData])=>{
                        const betObj = Array.from(betData.entries()).reduce((obj, [key, value])=>{
                            obj[key] = value;
                            return obj;
                        }, {});
                        return {
                            id,
                            ...betObj,
                            owner
                        };
                    });
                });
            }
            return [];
        } catch (error) {
            console.error("Error fetching bets:", error);
            throw new Error("Failed to fetch bets from contract");
        }
    }
    /**
   * Get points for a specific player
   * @param address - Player's address
   * @returns Number of points
   */ async getPlayerPoints(address) {
        if (!address) {
            return 0;
        }
        try {
            const points = await this.client.readContract({
                address: this.contractAddress,
                functionName: "get_player_points",
                args: [
                    address
                ]
            });
            return Number(points) || 0;
        } catch (error) {
            console.error("Error fetching player points:", error);
            return 0;
        }
    }
    /**
   * Get the leaderboard with all players and their points
   * @returns Sorted array of leaderboard entries (highest to lowest)
   */ async getLeaderboard() {
        try {
            const points = await this.client.readContract({
                address: this.contractAddress,
                functionName: "get_points",
                args: []
            });
            if (points instanceof Map) {
                return Array.from(points.entries()).map(([address, points])=>({
                        address,
                        points: Number(points)
                    })).sort((a, b)=>b.points - a.points);
            }
            return [];
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
            throw new Error("Failed to fetch leaderboard from contract");
        }
    }
    /**
   * Create a new bet
   * @param gameDate - Date of the game
   * @param team1 - First team name
   * @param team2 - Second team name
   * @param predictedWinner - Predicted winner (team1 or team2)
   * @returns Transaction receipt
   */ async createBet(gameDate, team1, team2, predictedWinner) {
        try {
            const txHash = await this.client.writeContract({
                address: this.contractAddress,
                functionName: "create_bet",
                args: [
                    gameDate,
                    team1,
                    team2,
                    predictedWinner
                ],
                value: BigInt(0)
            });
            const receipt = await this.client.waitForTransactionReceipt({
                hash: txHash,
                status: "ACCEPTED",
                retries: 24,
                interval: 5000
            });
            return receipt;
        } catch (error) {
            console.error("Error creating bet:", error);
            throw new Error("Failed to create bet");
        }
    }
    /**
   * Resolve a bet using AI-powered data fetching
   * @param betId - ID of the bet to resolve
   * @returns Transaction receipt
   */ async resolveBet(betId) {
        try {
            const txHash = await this.client.writeContract({
                address: this.contractAddress,
                functionName: "resolve_bet",
                args: [
                    betId
                ],
                value: BigInt(0)
            });
            const receipt = await this.client.waitForTransactionReceipt({
                hash: txHash,
                status: "ACCEPTED",
                retries: 24,
                interval: 5000
            });
            return receipt;
        } catch (error) {
            console.error("Error resolving bet:", error);
            throw new Error("Failed to resolve bet");
        }
    }
}
const __TURBOPACK__default__export__ = FootballBets;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/hooks/useFootballBets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBets",
    ()=>useBets,
    "useCreateBet",
    ()=>useCreateBet,
    "useFootballBetsContract",
    ()=>useFootballBetsContract,
    "useLeaderboard",
    ()=>useLeaderboard,
    "usePlayerPoints",
    ()=>usePlayerPoints,
    "useResolveBet",
    ()=>useResolveBet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$contracts$2f$FootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/contracts/FootballBets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/wallet.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils/toast.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function useFootballBetsContract() {
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const contractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractAddress"])();
    const studioUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStudioUrl"])();
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFootballBetsContract.useMemo[contract]": ()=>{
            // Validate contract address is configured
            if (!contractAddress) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configError"])("Setup Required", "Contract address not configured. Please set NEXT_PUBLIC_CONTRACT_ADDRESS in your .env file.", {
                    label: "Setup Guide",
                    onClick: {
                        "useFootballBetsContract.useMemo[contract]": ()=>window.open("/docs/setup", "_blank")
                    }["useFootballBetsContract.useMemo[contract]"]
                });
                // Return null to indicate contract is not available
                return null;
            }
            // Contract instance is recreated when address changes to ensure
            // the genlayer-js client is properly configured with the current account
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$contracts$2f$FootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](contractAddress, address, studioUrl);
        }
    }["useFootballBetsContract.useMemo[contract]"], [
        contractAddress,
        address,
        studioUrl
    ]);
    return contract;
}
_s(useFootballBetsContract, "RboqrYyIIYXUREmhawJa+ueW+pk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
function useBets() {
    _s1();
    const contract = useFootballBetsContract();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "bets"
        ],
        queryFn: {
            "useBets.useQuery": ()=>{
                if (!contract) {
                    return Promise.resolve([]);
                }
                return contract.getBets();
            }
        }["useBets.useQuery"],
        refetchOnWindowFocus: true,
        staleTime: 2000,
        enabled: !!contract
    });
}
_s1(useBets, "iYUAFXytRnTOzoZi83JWGRWGYAI=", false, function() {
    return [
        useFootballBetsContract,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePlayerPoints(address) {
    _s2();
    const contract = useFootballBetsContract();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "playerPoints",
            address
        ],
        queryFn: {
            "usePlayerPoints.useQuery": ()=>{
                if (!contract) {
                    return Promise.resolve(0);
                }
                return contract.getPlayerPoints(address);
            }
        }["usePlayerPoints.useQuery"],
        refetchOnWindowFocus: true,
        enabled: !!address && !!contract,
        staleTime: 2000
    });
}
_s2(usePlayerPoints, "iYUAFXytRnTOzoZi83JWGRWGYAI=", false, function() {
    return [
        useFootballBetsContract,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useLeaderboard() {
    _s3();
    const contract = useFootballBetsContract();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "leaderboard"
        ],
        queryFn: {
            "useLeaderboard.useQuery": ()=>{
                if (!contract) {
                    return Promise.resolve([]);
                }
                return contract.getLeaderboard();
            }
        }["useLeaderboard.useQuery"],
        refetchOnWindowFocus: true,
        staleTime: 2000,
        enabled: !!contract
    });
}
_s3(useLeaderboard, "iYUAFXytRnTOzoZi83JWGRWGYAI=", false, function() {
    return [
        useFootballBetsContract,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateBet() {
    _s4();
    const contract = useFootballBetsContract();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateBet.useMutation[mutation]": async ({ gameDate, team1, team2, predictedWinner })=>{
                if (!contract) {
                    throw new Error("Contract not configured. Please set NEXT_PUBLIC_CONTRACT_ADDRESS in your .env file.");
                }
                if (!address) {
                    throw new Error("Wallet not connected. Please connect your wallet to create a bet.");
                }
                setIsCreating(true);
                return contract.createBet(gameDate, team1, team2, predictedWinner);
            }
        }["useCreateBet.useMutation[mutation]"],
        onSuccess: {
            "useCreateBet.useMutation[mutation]": ()=>{
                // Invalidate and refetch bets and points after successful creation
                queryClient.invalidateQueries({
                    queryKey: [
                        "bets"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "playerPoints"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "leaderboard"
                    ]
                });
                setIsCreating(false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["success"])("Bet created successfully!", {
                    description: "Your prediction has been recorded on the blockchain."
                });
            }
        }["useCreateBet.useMutation[mutation]"],
        onError: {
            "useCreateBet.useMutation[mutation]": (err)=>{
                console.error("Error creating bet:", err);
                setIsCreating(false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Failed to create bet", {
                    description: err?.message || "Please try again."
                });
            }
        }["useCreateBet.useMutation[mutation]"]
    });
    return {
        ...mutation,
        isCreating,
        createBet: mutation.mutate,
        createBetAsync: mutation.mutateAsync
    };
}
_s4(useCreateBet, "QTWE73Kz1tlPcld8w5O0r63RFo4=", false, function() {
    return [
        useFootballBetsContract,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useResolveBet() {
    _s5();
    const contract = useFootballBetsContract();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [isResolving, setIsResolving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resolvingBetId, setResolvingBetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useResolveBet.useMutation[mutation]": async (betId)=>{
                if (!contract) {
                    throw new Error("Contract not configured. Please set NEXT_PUBLIC_CONTRACT_ADDRESS in your .env file.");
                }
                if (!address) {
                    throw new Error("Wallet not connected. Please connect your wallet to resolve a bet.");
                }
                setIsResolving(true);
                setResolvingBetId(betId);
                return contract.resolveBet(betId);
            }
        }["useResolveBet.useMutation[mutation]"],
        onSuccess: {
            "useResolveBet.useMutation[mutation]": ()=>{
                // Invalidate and refetch all data after successful resolution
                queryClient.invalidateQueries({
                    queryKey: [
                        "bets"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "playerPoints"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "leaderboard"
                    ]
                });
                setIsResolving(false);
                setResolvingBetId(null);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["success"])("Bet resolved successfully!", {
                    description: "The winner has been determined."
                });
            }
        }["useResolveBet.useMutation[mutation]"],
        onError: {
            "useResolveBet.useMutation[mutation]": (err)=>{
                console.error("Error resolving bet:", err);
                setIsResolving(false);
                setResolvingBetId(null);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Failed to resolve bet", {
                    description: err?.message || "Please try again."
                });
            }
        }["useResolveBet.useMutation[mutation]"]
    });
    return {
        ...mutation,
        isResolving,
        resolvingBetId,
        resolveBet: mutation.mutate,
        resolveBetAsync: mutation.mutateAsync
    };
}
_s5(useResolveBet, "gpAV7t3AdNB1RrzoBG9CQFP+TNU=", false, function() {
    return [
        useFootballBetsContract,
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddressDisplay",
    ()=>AddressDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/wallet.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils/toast.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AddressDisplay({ address, maxLength = 12, className = "", showCopy = false }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!address) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: "—"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    const handleCopy = async (e)=>{
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["success"])("Address copied!");
        } catch (err) {
            console.error("Failed to copy address:", err);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Failed to copy address", {
                description: "Please copy manually or try again."
            });
        }
    };
    const shortened = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatAddress"])(address, maxLength);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1 ${className}`,
        title: address,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono",
                children: shortened
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            showCopy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCopy,
                className: "opacity-50 hover:opacity-100 transition-opacity p-0.5 hover:bg-white/5 rounded",
                "aria-label": "Copy address",
                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3.5 h-3.5 text-green-400"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx",
                    lineNumber: 61,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx",
                    lineNumber: 63,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(AddressDisplay, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = AddressDisplay;
var _c;
__turbopack_context__.k.register(_c, "AddressDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            gradient: 'gradient-purple-pink text-white hover:opacity-90 shadow-md hover:shadow-lg',
            blue: 'bg-[var(--blue)] text-white hover:bg-[var(--blue)]/90 shadow-md',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/button.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-fade-in", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] glass-card rounded-2xl p-6 shadow-lg duration-200 data-[state=open]:animate-slide-up sm:rounded-2xl", "border border-border/20", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-lg opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
                                lineNumber: 50,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
                        lineNumber: 48,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold uppercase tracking-wider leading-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
        lineNumber: 89,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx",
        lineNumber: 104,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/alert.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Alert;
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/alert.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Alert$React.forwardRef");
__turbopack_context__.k.register(_c1, "Alert");
__turbopack_context__.k.register(_c2, "AlertTitle$React.forwardRef");
__turbopack_context__.k.register(_c3, "AlertTitle");
__turbopack_context__.k.register(_c4, "AlertDescription$React.forwardRef");
__turbopack_context__.k.register(_c5, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountPanel",
    ()=>AccountPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/wallet.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/hooks/useFootballBets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils/toast.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$AddressDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/alert.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const METAMASK_INSTALL_URL = "https://metamask.io/download/";
function AccountPanel() {
    _s();
    const { address, isConnected, isMetaMaskInstalled, isOnCorrectNetwork, isLoading, connectWallet, disconnectWallet, switchWalletAccount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const { data: points = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerPoints"])(address);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectionError, setConnectionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSwitching, setIsSwitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleConnect = async ()=>{
        if (!isMetaMaskInstalled) {
            return;
        }
        try {
            setIsConnecting(true);
            setConnectionError("");
            await connectWallet();
            setIsModalOpen(false);
        } catch (err) {
            console.error("Failed to connect wallet:", err);
            setConnectionError(err.message || "Failed to connect to MetaMask");
            if (err.message?.includes("rejected")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userRejected"])("Connection cancelled");
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Failed to connect wallet", {
                    description: err.message || "Check your MetaMask and try again."
                });
            }
        } finally{
            setIsConnecting(false);
        }
    };
    const handleDisconnect = ()=>{
        disconnectWallet();
        setIsModalOpen(false);
    };
    const handleSwitchAccount = async ()=>{
        try {
            setIsSwitching(true);
            setConnectionError("");
            await switchWalletAccount();
        // Keep modal open to show new account info
        } catch (err) {
            console.error("Failed to switch account:", err);
            // Don't show error if user cancelled
            if (!err.message?.includes("rejected")) {
                setConnectionError(err.message || "Failed to switch account");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Failed to switch account", {
                    description: err.message || "Please try again."
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userRejected"])("Account switch cancelled");
            }
        } finally{
            setIsSwitching(false);
        }
    };
    // Not connected state
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isModalOpen,
            onOpenChange: setIsModalOpen,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "gradient",
                        disabled: isLoading,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            "Connect Wallet"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "brand-card border-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-2xl font-bold",
                                    children: "Connect to GenLayer"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Connect your MetaMask wallet to start betting"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 mt-4",
                            children: !isMetaMaskInstalled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                        variant: "default",
                                        className: "bg-accent/10 border-accent/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                                children: "MetaMask Not Detected"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                                children: "Please install MetaMask to continue. MetaMask is a crypto wallet that allows you to interact with blockchain applications."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>window.open(METAMASK_INSTALL_URL, "_blank"),
                                        variant: "gradient",
                                        className: "w-full h-14 text-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-5 h-5 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            "Install MetaMask"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-lg bg-muted/10 border border-muted/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: 'After installing MetaMask, refresh this page and click "Connect Wallet" again.'
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleConnect,
                                        variant: "gradient",
                                        className: "w-full h-14 text-lg",
                                        disabled: isConnecting,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-5 h-5 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            isConnecting ? "Connecting..." : "Connect MetaMask"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    connectionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                        variant: "destructive",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                                children: "Connection Error"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                                children: connectionError
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-lg bg-muted/10 border border-muted/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "This will open MetaMask and prompt you to:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                className: "text-xs text-muted-foreground list-decimal list-inside mt-2 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Connect your wallet to this application"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Add the GenLayer network to MetaMask"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Switch to the GenLayer network"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this);
    }
    // Connected state
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isModalOpen,
        onOpenChange: setIsModalOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-card px-4 py-2 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "w-4 h-4 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$AddressDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressDisplay"], {
                                        address: address,
                                        maxLength: 12
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-px bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-accent",
                                        children: points
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: "pts"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "brand-card border-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl font-bold",
                                children: "Wallet Details"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "Your connected MetaMask wallet information"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-card p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Your Address"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-sm font-mono break-all",
                                        children: address
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-card p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Your Points"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-accent",
                                        children: points
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-card p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Network Status"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-2 h-2 rounded-full ${isOnCorrectNetwork ? "bg-green-500" : "bg-yellow-500 animate-pulse"}`
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: isOnCorrectNetwork ? "Connected to GenLayer" : "Wrong Network"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            !isOnCorrectNetwork && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                variant: "default",
                                className: "bg-yellow-500/10 border-yellow-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-4 w-4 text-yellow-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                        children: "Network Warning"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                        children: "You're not on the GenLayer network. Please switch networks in MetaMask or try reconnecting."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            connectionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                variant: "destructive",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                        children: "Error"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                        children: connectionError
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-4 border-t border-white/10 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSwitchAccount,
                                        variant: "outline",
                                        className: "w-full",
                                        disabled: isSwitching || isLoading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            isSwitching ? "Switching..." : "Switch Account"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleDisconnect,
                                        className: "w-full text-destructive hover:text-destructive",
                                        variant: "outline",
                                        disabled: isSwitching || isLoading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            "Disconnect Wallet"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-lg bg-muted/10 border border-muted/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: 'Use "Switch Account" to select a different MetaMask account. Use "Disconnect" to remove this site from MetaMask.'
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s(AccountPanel, "22VpRxgxx8z/dOiCXYEumvUjm3o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerPoints"]
    ];
});
_c = AccountPanel;
var _c;
__turbopack_context__.k.register(_c, "AccountPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateBetModal",
    ()=>CreateBetModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/hooks/useFootballBets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/wallet.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils/toast.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function CreateBetModal() {
    _s();
    const { isConnected, address, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const { createBet, isCreating, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateBet"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameDate, setGameDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [team1, setTeam1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [team2, setTeam2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [predictedWinner, setPredictedWinner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        gameDate: "",
        team1: "",
        team2: "",
        predictedWinner: ""
    });
    // Auto-close modal when wallet disconnects
    // Don't close if transaction is in progress to avoid interrupting user
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateBetModal.useEffect": ()=>{
            if (!isConnected && isOpen && !isCreating) {
                setIsOpen(false);
            }
        }
    }["CreateBetModal.useEffect"], [
        isConnected,
        isOpen,
        isCreating
    ]);
    const validateForm = ()=>{
        const newErrors = {
            gameDate: "",
            team1: "",
            team2: "",
            predictedWinner: ""
        };
        if (!gameDate.trim()) {
            newErrors.gameDate = "Game date is required";
        }
        if (!team1.trim()) {
            newErrors.team1 = "Team 1 name is required";
        }
        if (!team2.trim()) {
            newErrors.team2 = "Team 2 name is required";
        }
        if (!predictedWinner) {
            newErrors.predictedWinner = "Please select your predicted winner";
        }
        setErrors(newErrors);
        return !Object.values(newErrors).some((error)=>error !== "");
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!isConnected || !address) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Please connect your wallet first");
            return;
        }
        if (!validateForm()) {
            return;
        }
        createBet({
            gameDate,
            team1,
            team2,
            predictedWinner: predictedWinner
        });
    };
    const resetForm = ()=>{
        setGameDate("");
        setTeam1("");
        setTeam2("");
        setPredictedWinner("");
        setErrors({
            gameDate: "",
            team1: "",
            team2: "",
            predictedWinner: ""
        });
    };
    const handleOpenChange = (open)=>{
        if (!open && !isCreating) {
            resetForm();
        }
        setIsOpen(open);
    };
    // Reset form and close modal on successful bet creation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateBetModal.useEffect": ()=>{
            if (isSuccess) {
                resetForm();
                setIsOpen(false);
            }
        }
    }["CreateBetModal.useEffect"], [
        isSuccess
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: handleOpenChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "gradient",
                    disabled: !isConnected || !address || isLoading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "w-4 h-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        "Create Bet"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "brand-card border-2 sm:max-w-[500px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl font-bold",
                                children: "Create Football Bet"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "Make your prediction for an upcoming football match"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "gameDate",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4 !text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            "Game Date"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "gameDate",
                                        type: "date",
                                        value: gameDate,
                                        onChange: (e)=>{
                                            setGameDate(e.target.value);
                                            setErrors({
                                                ...errors,
                                                gameDate: ""
                                            });
                                        },
                                        className: errors.gameDate ? "border-destructive" : ""
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    errors.gameDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-destructive",
                                        children: errors.gameDate
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            "Teams"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "team1",
                                                        type: "text",
                                                        placeholder: "Team 1",
                                                        value: team1,
                                                        onChange: (e)=>{
                                                            setTeam1(e.target.value);
                                                            setErrors({
                                                                ...errors,
                                                                team1: ""
                                                            });
                                                        },
                                                        className: errors.team1 ? "border-destructive" : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.team1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-destructive",
                                                        children: errors.team1
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "team2",
                                                        type: "text",
                                                        placeholder: "Team 2",
                                                        value: team2,
                                                        onChange: (e)=>{
                                                            setTeam2(e.target.value);
                                                            setErrors({
                                                                ...errors,
                                                                team2: ""
                                                            });
                                                        },
                                                        className: errors.team2 ? "border-destructive" : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.team2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-destructive",
                                                        children: errors.team2
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        children: "Your Prediction"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setPredictedWinner("1");
                                                    setErrors({
                                                        ...errors,
                                                        predictedWinner: ""
                                                    });
                                                },
                                                disabled: !team1.trim(),
                                                className: `p-4 rounded-lg border-2 transition-all ${predictedWinner === "1" ? "border-accent bg-accent/20 text-accent" : "border-white/10 hover:border-white/20"} ${!team1.trim() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-sm",
                                                        children: team1 || "Team 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground mt-1",
                                                        children: "Wins"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setPredictedWinner("0");
                                                    setErrors({
                                                        ...errors,
                                                        predictedWinner: ""
                                                    });
                                                },
                                                disabled: !team1.trim() || !team2.trim(),
                                                className: `p-4 rounded-lg border-2 transition-all ${predictedWinner === "0" ? "border-yellow-500 bg-yellow-500/20 text-yellow-400" : "border-white/10 hover:border-white/20"} ${!team1.trim() || !team2.trim() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-sm",
                                                        children: "Draw"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground mt-1",
                                                        children: "Tie"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setPredictedWinner("2");
                                                    setErrors({
                                                        ...errors,
                                                        predictedWinner: ""
                                                    });
                                                },
                                                disabled: !team2.trim(),
                                                className: `p-4 rounded-lg border-2 transition-all ${predictedWinner === "2" ? "border-accent bg-accent/20 text-accent" : "border-white/10 hover:border-white/20"} ${!team2.trim() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-sm",
                                                        children: team2 || "Team 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground mt-1",
                                                        children: "Wins"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    errors.predictedWinner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-destructive",
                                        children: errors.predictedWinner
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "secondary",
                                        className: "flex-1",
                                        onClick: ()=>setIsOpen(false),
                                        disabled: isCreating,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        variant: "gradient",
                                        className: "flex-1",
                                        disabled: isCreating,
                                        children: isCreating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-4 h-4 mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this),
                                                "Creating..."
                                            ]
                                        }, void 0, true) : "Create Bet"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(CreateBetModal, "3+qoaYHQbB7pM+NHMb1PsRVJLLE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateBet"]
    ];
});
_c = CreateBetModal;
var _c;
__turbopack_context__.k.register(_c, "CreateBetModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * GenLayer Logo Component
 * Per Brand Guidelines 2025
 *
 * Variants:
 * - "full": Strong Mark + Wordmark (for desktop/larger spaces)
 * - "mark": Strong Mark only (for mobile/compact spaces)
 * - "wordmark": Wordmark only (for specific cases)
 */ __turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "LogoFull",
    ()=>LogoFull,
    "LogoMark",
    ()=>LogoMark,
    "LogoWordmark",
    ()=>LogoWordmark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const sizeMap = {
    sm: {
        mark: 'w-5 h-5',
        text: 'text-base'
    },
    md: {
        mark: 'w-6 h-6',
        text: 'text-xl'
    },
    lg: {
        mark: 'w-8 h-8',
        text: 'text-2xl'
    }
};
function Logo({ variant = 'full', size = 'md', theme = 'dark', className = '' }) {
    const colorClass = theme === 'dark' ? 'text-foreground' : 'text-background';
    const { mark: markSize, text: textSize } = sizeMap[size];
    // GenLayer Strong Mark (Triangle/Hands symbol)
    const StrongMark = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: `${markSize} ${colorClass} transition-colors`,
            viewBox: "0 0 97.76 91.93",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-label": "GenLayer Logo",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M44.26 32.35L27.72 67.12L43.29 74.9L0 91.93L44.26 0L44.26 32.35ZM53.5 32.35L70.04 67.12L54.47 74.9L97.76 91.93L53.5 0L53.5 32.35ZM48.64 43.78L58.33 62.94L48.64 67.69L39.47 62.92L48.64 43.78Z"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, this);
    // Wordmark (using Space Grotesk from layout)
    const Wordmark = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `${textSize} font-bold ${colorClass} font-[family-name:var(--font-display)] transition-colors`,
            style: {
                letterSpacing: '-0.02em'
            },
            children: "GenLayer"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
            lineNumber: 56,
            columnNumber: 5
        }, this);
    if (variant === 'mark') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `inline-flex items-center ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrongMark, {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    }
    if (variant === 'wordmark') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `inline-flex items-center ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wordmark, {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    // Full logo (default): Strong Mark + Wordmark
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center gap-2 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrongMark, {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wordmark, {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c = Logo;
function LogoFull(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
        ...props,
        variant: "full"
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
_c1 = LogoFull;
function LogoMark(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
        ...props,
        variant: "mark"
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
        lineNumber: 95,
        columnNumber: 10
    }, this);
}
_c2 = LogoMark;
function LogoWordmark(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
        ...props,
        variant: "wordmark"
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
_c3 = LogoWordmark;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Logo");
__turbopack_context__.k.register(_c1, "LogoFull");
__turbopack_context__.k.register(_c2, "LogoMark");
__turbopack_context__.k.register(_c3, "LogoWordmark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$AccountPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AccountPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$CreateBetModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/CreateBetModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/hooks/useFootballBets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Logo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { data: bets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBets"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY;
                    const threshold = 80;
                    setIsScrolled(scrollY > 20);
                    // Calculate progress from 0 to 1 for smoother animations
                    const progress = Math.min(Math.max((scrollY - 10) / threshold, 0), 1);
                    setScrollProgress(progress);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Minimal variant with scroll animations
    const paddingTop = Math.round(scrollProgress * 16); // 0-16px padding
    const headerHeight = 64 - Math.round(scrollProgress * 8); // 64px to 56px
    // Only apply border radius on desktop (md breakpoint and up)
    const getBorderRadius = ()=>{
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth >= 768) {
            return Math.round(scrollProgress * 9999); // Fully rounded when scrolled on desktop
        }
        return 0; // No rounding on mobile
    };
    const borderRadius = getBorderRadius();
    const totalBets = bets?.length || 0;
    const resolvedBets = bets?.filter((bet)=>bet.has_resolved).length || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        style: {
            paddingTop: `${paddingTop}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "transition-all duration-500 ease-out",
            style: {
                width: '100%',
                maxWidth: isScrolled ? '80rem' : '100%',
                margin: '0 auto',
                borderRadius: `${borderRadius}px`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "backdrop-blur-xl border transition-all duration-500 ease-out md:rounded-none",
                style: {
                    borderColor: `oklch(0.3 0.02 0 / ${0.4 + scrollProgress * 0.4})`,
                    background: `linear-gradient(135deg, oklch(0.18 0.01 0 / ${0.1 + scrollProgress * 0.3}) 0%, oklch(0.15 0.01 0 / ${0.05 + scrollProgress * 0.25}) 50%, oklch(0.16 0.01 0 / ${0.08 + scrollProgress * 0.27}) 100%)`,
                    borderRadius: `${borderRadius}px`,
                    borderWidth: '1px',
                    borderLeftWidth: isScrolled ? '1px' : '0px',
                    borderRightWidth: isScrolled ? '1px' : '0px',
                    borderTopWidth: isScrolled ? '1px' : '0px',
                    boxShadow: isScrolled ? '0 32px 64px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 oklch(0.3 0.02 0 / 0.3)' : 'none',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(180%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 transition-all duration-500 mx-auto",
                    style: {
                        maxWidth: isScrolled ? '80rem' : '112rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between transition-all duration-500",
                        style: {
                            height: `${headerHeight}px`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoMark"], {
                                        size: "md",
                                        className: "flex md:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                        size: "md",
                                        className: "hidden md:flex"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg md:text-xl font-bold ml-2",
                                        children: "Football Market"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-6 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Total Bets:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground font-bold text-accent",
                                                children: totalBets
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "Resolved:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground font-bold text-accent",
                                                children: resolvedBets
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$CreateBetModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBetModal"], {}, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$AccountPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountPanel"], {}, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Navbar, "K8lqpPJi3ZNBhNxfxItku5o8g9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBets"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BetsTable",
    ()=>BetsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/hooks/useFootballBets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/wallet.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils/toast.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$AddressDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function BetsTable() {
    _s();
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFootballBetsContract"])();
    const { data: bets, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBets"])();
    const { address, isConnected, isLoading: isWalletLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const { resolveBet, isResolving, resolvingBetId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveBet"])();
    const handleResolve = (betId)=>{
        if (!address) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Please connect your wallet to resolve bets");
            return;
        }
        // Confirmation popup
        const confirmed = confirm("Are you sure you want to resolve this bet? This action will determine the winner.");
        if (confirmed) {
            resolveBet(betId);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-card p-8 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-8 h-8 animate-spin text-accent"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Loading bets..."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    if (!contract) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-card p-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-16 h-16 mx-auto text-yellow-400 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold",
                        children: "Setup Required"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Contract address not configured."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Please set ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-muted px-1 py-0.5 rounded text-xs",
                                        children: "NEXT_PUBLIC_CONTRACT_ADDRESS"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                        lineNumber: 54,
                                        columnNumber: 26
                                    }, this),
                                    " in your .env file."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    if (isError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-card p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-destructive",
                    children: "Failed to load bets. Please try again."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    if (!bets || bets.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-card p-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                        className: "w-16 h-16 mx-auto text-muted-foreground opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold",
                        children: "No Bets Yet"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Be the first to create a football prediction bet!"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brand-card p-6 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Teams"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Prediction"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Owner"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-white/5",
                        children: bets.map((bet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BetRow, {
                                bet: bet,
                                currentAddress: address,
                                isConnected: isConnected,
                                isWalletLoading: isWalletLoading,
                                onResolve: handleResolve,
                                isResolving: isResolving && resolvingBetId === bet.id
                            }, bet.id, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(BetsTable, "BmH26diFNwJq/vxE8Jz+R/4aftE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFootballBetsContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBets"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveBet"]
    ];
});
_c = BetsTable;
// Helper function to format prediction/winner display
function formatWinner(winnerCode, team1, team2) {
    if (winnerCode === "1") return team1 || "Team 1";
    if (winnerCode === "2") return team2 || "Team 2";
    if (winnerCode === "0") return "Draw";
    return winnerCode;
}
// Helper function to get badge color for prediction
function getPredictionColor(winnerCode) {
    if (winnerCode === "0") return "text-yellow-400 border-yellow-500/30";
    return "text-accent border-accent/30";
}
function BetRow({ bet, currentAddress, isConnected, isWalletLoading, onResolve, isResolving }) {
    const isOwner = currentAddress?.toLowerCase() === bet.owner?.toLowerCase();
    const canResolve = isConnected && currentAddress && isOwner && !bet.has_resolved && !isWalletLoading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "group hover:bg-white/5 transition-colors animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: bet.game_date
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold",
                            children: bet.team1
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-muted-foreground",
                            children: "vs"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold",
                            children: bet.team2
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    className: getPredictionColor(bet.predicted_winner),
                    children: formatWinner(bet.predicted_winner, bet.team1, bet.team2)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-4",
                children: bet.has_resolved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "bg-green-500/20 text-green-400 border-green-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "w-3 h-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                "Resolved"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        bet.real_winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                "Winner: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `font-semibold ${bet.real_winner === "0" ? "text-yellow-400" : "text-foreground"}`,
                                    children: formatWinner(bet.real_winner, bet.team1, bet.team2)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    className: "text-yellow-400 border-yellow-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3 h-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        "Pending"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$AddressDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressDisplay"], {
                            address: bet.owner,
                            maxLength: 10,
                            showCopy: true
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "secondary",
                            className: "text-xs",
                            children: "You"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-4",
                children: canResolve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>onResolve(bet.id),
                    disabled: isResolving,
                    size: "sm",
                    variant: "gradient",
                    children: isResolving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-3 h-3 mr-1 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                                lineNumber: 217,
                                columnNumber: 17
                            }, this),
                            "Resolving..."
                        ]
                    }, void 0, true) : "Resolve"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_c1 = BetRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "BetsTable");
__turbopack_context__.k.register(_c1, "BetRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Leaderboard",
    ()=>Leaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/medal.js [app-client] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/hooks/useFootballBets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/wallet.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$AddressDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/AddressDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Leaderboard() {
    _s();
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFootballBetsContract"])();
    const { data: leaderboard, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeaderboard"])();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-card p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: "w-5 h-5 text-accent"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        "Leaderboard"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-6 h-6 animate-spin text-accent"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    if (!contract) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-card p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: "w-5 h-5 text-accent"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        "Leaderboard"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-12 h-12 mx-auto text-yellow-400 opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Setup Required"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Contract address not configured"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    if (isError || !leaderboard) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-card p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: "w-5 h-5 text-accent"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        "Leaderboard"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-destructive",
                        children: "Failed to load leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    if (leaderboard.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-card p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: "w-5 h-5 text-accent"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        "Leaderboard"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            className: "w-12 h-12 mx-auto text-muted-foreground opacity-30 mb-3"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "No players yet"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brand-card p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                        className: "w-5 h-5 text-accent"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    "Leaderboard"
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: leaderboard.map((entry, index)=>{
                    const isCurrentUser = address?.toLowerCase() === entry.address?.toLowerCase();
                    const rank = index + 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
                flex items-center gap-3 p-3 rounded-lg transition-all
                ${isCurrentUser ? "bg-accent/20 border-2 border-accent/50" : "hover:bg-white/5"}
              `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-8 flex items-center justify-center",
                                children: [
                                    rank === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "w-5 h-5 text-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this),
                                    rank === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"], {
                                        className: "w-5 h-5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this),
                                    rank === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        className: "w-5 h-5 text-amber-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this),
                                    rank > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-muted-foreground",
                                        children: [
                                            "#",
                                            rank
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$AddressDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressDisplay"], {
                                            address: entry.address,
                                            maxLength: 10,
                                            className: "text-sm",
                                            showCopy: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this),
                                        isCurrentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs bg-accent/30 text-accent px-2 py-0.5 rounded-full font-semibold",
                                            children: "You"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-accent",
                                            children: entry.points
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "pts"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        ]
                    }, entry.address, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            leaderboard.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center text-muted-foreground",
                    children: [
                        "Showing top ",
                        Math.min(10, leaderboard.length),
                        " players"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(Leaderboard, "/fKsjjJ53YWLG4i5P0jiXDCWceI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFootballBetsContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$hooks$2f$useFootballBets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeaderboard"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = Leaderboard;
var _c;
__turbopack_context__.k.register(_c, "Leaderboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$BetsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/BetsTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/components/Leaderboard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow pt-20 pb-12 px-4 md:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8 animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-4",
                                    children: "Football Prediction Betting"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto",
                                    children: [
                                        "AI-powered football match predictions on GenLayer blockchain.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        "Create bets, make predictions, and compete for points."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-8 animate-slide-up",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$BetsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BetsTable"], {}, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-4 animate-slide-up",
                                    style: {
                                        animationDelay: "100ms"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Leaderboard"], {}, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 glass-card p-6 md:p-8 animate-fade-in",
                            style: {
                                animationDelay: "200ms"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "How it Works"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-accent font-bold text-lg",
                                                    children: "1. Create a Bet"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Connect your wallet and create a football match prediction. Choose the teams, date, and your predicted winner."
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-accent font-bold text-lg",
                                                    children: "2. Wait for Resolution"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "After the match, the bet creator resolves the bet. GenLayer's AI verifies the actual match result."
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-accent font-bold text-lg",
                                                    children: "3. Earn Points"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Correct predictions earn you points. Climb the leaderboard and prove your football knowledge!"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-white/10 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-6 text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://genlayer.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-accent transition-colors",
                                children: "Powered by GenLayer"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://studio.genlayer.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-accent transition-colors",
                                children: "Studio"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://docs.genlayer.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-accent transition-colors",
                                children: "Docs"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/genlayerlabs/genlayer-project-boilerplate",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-accent transition-colors",
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=1b41d_GitHub_Proofed-Aleph-_src_genlayer-project-boilerplate_frontend_c405280b._.js.map