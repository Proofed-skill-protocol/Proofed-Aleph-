module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GENLAYER_CHAIN_ID",
    ()=>GENLAYER_CHAIN_ID,
    "GENLAYER_CHAIN_ID_HEX",
    ()=>GENLAYER_CHAIN_ID_HEX,
    "GENLAYER_NETWORK",
    ()=>GENLAYER_NETWORK,
    "addGenLayerNetwork",
    ()=>addGenLayerNetwork,
    "connectMetaMask",
    ()=>connectMetaMask,
    "createGenLayerClient",
    ()=>createGenLayerClient,
    "createMetaMaskWalletClient",
    ()=>createMetaMaskWalletClient,
    "getAccounts",
    ()=>getAccounts,
    "getClient",
    ()=>getClient,
    "getContractAddress",
    ()=>getContractAddress,
    "getCurrentChainId",
    ()=>getCurrentChainId,
    "getEthereumProvider",
    ()=>getEthereumProvider,
    "getStudioUrl",
    ()=>getStudioUrl,
    "isMetaMaskInstalled",
    ()=>isMetaMaskInstalled,
    "isOnGenLayerNetwork",
    ()=>isOnGenLayerNetwork,
    "requestAccounts",
    ()=>requestAccounts,
    "switchAccount",
    ()=>switchAccount,
    "switchToGenLayerNetwork",
    ()=>switchToGenLayerNetwork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chains/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/genlayer-js/dist/chunk-GEN4SJ6K.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const GENLAYER_CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_GENLAYER_CHAIN_ID || "61999");
const GENLAYER_CHAIN_ID_HEX = `0x${GENLAYER_CHAIN_ID.toString(16).toUpperCase()}`;
const GENLAYER_NETWORK = {
    chainId: GENLAYER_CHAIN_ID_HEX,
    chainName: process.env.NEXT_PUBLIC_GENLAYER_CHAIN_NAME || "GenLayer Studio",
    nativeCurrency: {
        name: process.env.NEXT_PUBLIC_GENLAYER_SYMBOL || "GEN",
        symbol: process.env.NEXT_PUBLIC_GENLAYER_SYMBOL || "GEN",
        decimals: 18
    },
    rpcUrls: [
        process.env.NEXT_PUBLIC_GENLAYER_RPC_URL || "https://studio.genlayer.com/api"
    ],
    blockExplorerUrls: []
};
function getStudioUrl() {
    return process.env.NEXT_PUBLIC_GENLAYER_RPC_URL || "https://studio.genlayer.com/api";
}
function getContractAddress() {
    const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    if (!address) {
        // Return empty string during build, error will be shown in UI during runtime
        return "";
    }
    return address;
}
function isMetaMaskInstalled() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function getEthereumProvider() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
async function requestAccounts() {
    const provider = getEthereumProvider();
    if (!provider) {
        throw new Error("MetaMask is not installed");
    }
    try {
        const accounts = await provider.request({
            method: "eth_requestAccounts"
        });
        return accounts;
    } catch (error) {
        if (error.code === 4001) {
            throw new Error("User rejected the connection request");
        }
        throw new Error(`Failed to connect to MetaMask: ${error.message}`);
    }
}
async function getAccounts() {
    const provider = getEthereumProvider();
    if (!provider) {
        return [];
    }
    try {
        const accounts = await provider.request({
            method: "eth_accounts"
        });
        return accounts;
    } catch (error) {
        console.error("Error getting accounts:", error);
        return [];
    }
}
async function getCurrentChainId() {
    const provider = getEthereumProvider();
    if (!provider) {
        return null;
    }
    try {
        const chainId = await provider.request({
            method: "eth_chainId"
        });
        return chainId;
    } catch (error) {
        console.error("Error getting chain ID:", error);
        return null;
    }
}
async function addGenLayerNetwork() {
    const provider = getEthereumProvider();
    if (!provider) {
        throw new Error("MetaMask is not installed");
    }
    try {
        await provider.request({
            method: "wallet_addEthereumChain",
            params: [
                GENLAYER_NETWORK
            ]
        });
    } catch (error) {
        if (error.code === 4001) {
            throw new Error("User rejected adding the network");
        }
        throw new Error(`Failed to add GenLayer network: ${error.message}`);
    }
}
async function switchToGenLayerNetwork() {
    const provider = getEthereumProvider();
    if (!provider) {
        throw new Error("MetaMask is not installed");
    }
    try {
        await provider.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: GENLAYER_CHAIN_ID_HEX
                }
            ]
        });
    } catch (error) {
        // If the chain is not added, add it
        if (error.code === 4902) {
            await addGenLayerNetwork();
        } else if (error.code === 4001) {
            throw new Error("User rejected switching the network");
        } else {
            throw new Error(`Failed to switch network: ${error.message}`);
        }
    }
}
async function isOnGenLayerNetwork() {
    const chainId = await getCurrentChainId();
    if (!chainId) {
        return false;
    }
    // Convert both to decimal for comparison
    const currentChainIdDecimal = parseInt(chainId, 16);
    return currentChainIdDecimal === GENLAYER_CHAIN_ID;
}
async function connectMetaMask() {
    if (!isMetaMaskInstalled()) {
        throw new Error("MetaMask is not installed");
    }
    // Request accounts
    const accounts = await requestAccounts();
    if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found");
    }
    // Check and switch to GenLayer network
    const onCorrectNetwork = await isOnGenLayerNetwork();
    if (!onCorrectNetwork) {
        await switchToGenLayerNetwork();
    }
    return accounts[0];
}
async function switchAccount() {
    const provider = getEthereumProvider();
    if (!provider) {
        throw new Error("MetaMask is not installed");
    }
    try {
        // Request permissions - this shows account picker
        await provider.request({
            method: "wallet_requestPermissions",
            params: [
                {
                    eth_accounts: {}
                }
            ]
        });
        // Get the newly selected account
        const accounts = await provider.request({
            method: "eth_accounts"
        });
        if (!accounts || accounts.length === 0) {
            throw new Error("No account selected");
        }
        return accounts[0];
    } catch (error) {
        if (error.code === 4001) {
            throw new Error("User rejected account switch");
        } else if (error.code === -32002) {
            throw new Error("Account switch request already pending");
        }
        throw new Error(`Failed to switch account: ${error.message}`);
    }
}
function createMetaMaskWalletClient() {
    const provider = getEthereumProvider();
    if (!provider) {
        return null;
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWalletClient"])({
            chain: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studionet"],
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])(provider)
        });
    } catch (error) {
        console.error("Error creating wallet client:", error);
        return null;
    }
}
function createGenLayerClient(address) {
    const config = {
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studionet"]
    };
    if (address) {
        config.account = address;
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(config);
    } catch (error) {
        console.error("Error creating GenLayer client:", error);
        // Return client without account on error
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
            chain: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$GEN4SJ6K$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studionet"]
        });
    }
}
async function getClient() {
    const accounts = await getAccounts();
    const address = accounts[0];
    return createGenLayerClient(address);
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils/toast.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configError",
    ()=>configError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "error",
    ()=>error,
    "info",
    ()=>info,
    "loading",
    ()=>loading,
    "promise",
    ()=>promise,
    "success",
    ()=>success,
    "userRejected",
    ()=>userRejected,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
/**
 * Custom toast utilities with brand styling consistent with Alert components
 * Colors and styling match the existing design system
 */ // Default toast options with brand styling
const defaultOptions = {
    duration: 4000,
    closeButton: true,
    style: {
        background: 'hsl(var(--background))',
        border: '1px solid hsl(var(--border))',
        color: 'hsl(var(--foreground))'
    }
};
const success = (message, options)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(message, {
        ...defaultOptions,
        duration: 4000,
        style: {
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--accent) / 0.3)',
            color: 'hsl(var(--accent))',
            ...options?.style
        },
        ...options
    });
};
const error = (message, options)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(message, {
        ...defaultOptions,
        duration: 6000,
        style: {
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--destructive) / 0.5)',
            color: 'hsl(var(--destructive))',
            ...options?.style
        },
        ...options
    });
};
const warning = (message, options)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning(message, {
        ...defaultOptions,
        duration: 5000,
        style: {
            background: 'hsl(var(--background))',
            border: '1px solid rgb(234 179 8 / 0.3)',
            color: 'rgb(250 204 21)',
            ...options?.style
        },
        ...options
    });
};
const info = (message, options)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(message, {
        ...defaultOptions,
        duration: 3000,
        ...options
    });
};
const loading = (message, options)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading(message, {
        ...defaultOptions,
        duration: Infinity,
        ...options
    });
};
const promise = (promise, messages, options)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].promise(promise, {
        loading: messages.loading,
        success: messages.success,
        error: messages.error
    }, {
        ...defaultOptions,
        ...options
    });
};
const configError = (message, description, action)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(message, {
        description,
        duration: Infinity,
        closeButton: true,
        action: action ? {
            label: action.label,
            onClick: action.onClick
        } : undefined,
        style: {
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--destructive) / 0.5)',
            color: 'hsl(var(--destructive))'
        }
    });
};
const userRejected = (message)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(message, {
        duration: 2000,
        closeButton: false,
        style: {
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--muted-foreground))'
        }
    });
};
;
const __TURBOPACK__default__export__ = {
    success,
    error,
    warning,
    info,
    loading,
    promise,
    configError,
    userRejected,
    toast: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"]
};
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletProvider",
    ()=>WalletProvider,
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/utils/toast.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
// localStorage key for tracking user's disconnect intent
const DISCONNECT_FLAG = "wallet_disconnected";
// Create context with undefined default (will error if used outside Provider)
const WalletContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WalletProvider({ children }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        address: null,
        chainId: null,
        isConnected: false,
        isLoading: true,
        isMetaMaskInstalled: false,
        isOnCorrectNetwork: false
    });
    // Check MetaMask installation and load account on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initWallet = async ()=>{
            const installed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMetaMaskInstalled"])();
            if (!installed) {
                setState({
                    address: null,
                    chainId: null,
                    isConnected: false,
                    isLoading: false,
                    isMetaMaskInstalled: false,
                    isOnCorrectNetwork: false
                });
                return;
            }
            // Check if user intentionally disconnected
            // If they did, don't auto-reconnect even if MetaMask has permissions
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                // Get current accounts (without requesting)
                // This will auto-reconnect if MetaMask has existing permissions
                // and user didn't explicitly disconnect
                const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccounts"])();
                const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentChainId"])();
                const correctNetwork = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnGenLayerNetwork"])();
                setState({
                    address: accounts[0] || null,
                    chainId,
                    isConnected: accounts.length > 0,
                    isLoading: false,
                    isMetaMaskInstalled: true,
                    isOnCorrectNetwork: correctNetwork
                });
            } catch (error) {
                console.error("Error initializing wallet:", error);
                setState({
                    address: null,
                    chainId: null,
                    isConnected: false,
                    isLoading: false,
                    isMetaMaskInstalled: true,
                    isOnCorrectNetwork: false
                });
            }
        };
        initWallet();
    }, []);
    // Set up MetaMask event listeners (ONCE for entire app)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEthereumProvider"])();
        if (!provider) {
            return;
        }
        const handleAccountsChanged = async (accounts)=>{
            const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentChainId"])();
            const correctNetwork = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnGenLayerNetwork"])();
            // If user connected via MetaMask UI, clear the disconnect flag
            // This allows future auto-reconnects
            if (accounts.length > 0 && ("TURBOPACK compile-time value", "undefined") !== "undefined") //TURBOPACK unreachable
            ;
            setState((prev)=>({
                    ...prev,
                    address: accounts[0] || null,
                    chainId,
                    isConnected: accounts.length > 0,
                    isOnCorrectNetwork: correctNetwork
                }));
        };
        const handleChainChanged = async (chainId)=>{
            // MetaMask recommends reloading the page on chain change
            // but we'll update state instead for better UX
            const correctNetwork = parseInt(chainId, 16) === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GENLAYER_CHAIN_ID"];
            const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccounts"])();
            setState((prev)=>({
                    ...prev,
                    chainId,
                    address: accounts[0] || null,
                    isConnected: accounts.length > 0,
                    isOnCorrectNetwork: correctNetwork
                }));
        };
        const handleDisconnect = ()=>{
            setState((prev)=>({
                    ...prev,
                    address: null,
                    isConnected: false
                }));
        };
        // Add event listeners
        provider.on("accountsChanged", handleAccountsChanged);
        provider.on("chainChanged", handleChainChanged);
        provider.on("disconnect", handleDisconnect);
        // Cleanup
        return ()=>{
            provider.removeListener("accountsChanged", handleAccountsChanged);
            provider.removeListener("chainChanged", handleChainChanged);
            provider.removeListener("disconnect", handleDisconnect);
        };
    }, []);
    /**
   * Connect to MetaMask
   */ const connectWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setState((prev)=>({
                    ...prev,
                    isLoading: true
                }));
            const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectMetaMask"])();
            const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentChainId"])();
            const correctNetwork = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnGenLayerNetwork"])();
            // User is connecting, clear the disconnect flag
            // This allows auto-reconnect on future page loads
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setState({
                address,
                chainId,
                isConnected: true,
                isLoading: false,
                isMetaMaskInstalled: true,
                isOnCorrectNetwork: correctNetwork
            });
            return address;
        } catch (err) {
            console.error("Error connecting wallet:", err);
            setState((prev)=>({
                    ...prev,
                    isLoading: false
                }));
            // Handle specific error types with appropriate toasts
            if (err.message?.includes("rejected")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userRejected"])("Connection cancelled");
            } else if (err.message?.includes("MetaMask is not installed")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("MetaMask not found", {
                    description: "Please install MetaMask to connect your wallet.",
                    action: {
                        label: "Install MetaMask",
                        onClick: ()=>window.open("https://metamask.io/download/", "_blank")
                    }
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Failed to connect wallet", {
                    description: err.message || "Please check your MetaMask and try again."
                });
            }
            throw err;
        }
    }, []);
    /**
   * Disconnect wallet (clear local state and persist disconnect intent)
   * Sets a flag in localStorage to prevent auto-reconnect on page refresh
   */ const disconnectWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Persist user's intent to disconnect
        // This prevents auto-reconnect on page refresh
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setState((prev)=>({
                ...prev,
                address: null,
                isConnected: false
            }));
    }, []);
    /**
   * Request user to switch to different MetaMask account
   * Shows MetaMask account picker even if already connected
   */ const switchWalletAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setState((prev)=>({
                    ...prev,
                    isLoading: true
                }));
            // Request account switch via MetaMask picker
            const newAddress = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["switchAccount"])();
            // Get updated state
            const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentChainId"])();
            const correctNetwork = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnGenLayerNetwork"])();
            // Clear disconnect flag - user is actively connecting
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Update state immediately for better UX
            // accountsChanged event will also fire, but that's okay
            setState({
                address: newAddress,
                chainId,
                isConnected: true,
                isLoading: false,
                isMetaMaskInstalled: true,
                isOnCorrectNetwork: correctNetwork
            });
            return newAddress;
        } catch (err) {
            console.error("Error switching account:", err);
            setState((prev)=>({
                    ...prev,
                    isLoading: false
                }));
            // Handle specific error types
            if (err.message?.includes("rejected")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userRejected"])("Account switch cancelled");
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$utils$2f$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["error"])("Failed to switch account", {
                    description: err.message || "Please try again."
                });
            }
            throw err;
        }
    }, []);
    const value = {
        ...state,
        connectWallet,
        disconnectWallet,
        switchWalletAccount
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx",
        lineNumber: 309,
        columnNumber: 10
    }, this);
}
function useWallet() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WalletContext);
    if (context === undefined) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
}),
"[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/lib/genlayer/WalletProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Providers({ children }) {
    // Use useState to ensure QueryClient is only created once per component lifecycle
    // This prevents the client from being recreated on every render
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    staleTime: 2000,
                    refetchOnWindowFocus: false
                }
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$frontend$2f$lib$2f$genlayer$2f$WalletProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/providers.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$Proofed$2d$Aleph$2d2f$src$2f$genlayer$2d$project$2d$boilerplate$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-right",
                theme: "dark",
                richColors: true,
                closeButton: true,
                offset: "80px",
                toastOptions: {
                    style: {
                        background: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        color: 'hsl(var(--foreground))',
                        boxShadow: '0 8px 32px hsl(var(--background) / 0.8)'
                    }
                }
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/providers.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/Proofed-Aleph-/src/genlayer-project-boilerplate/frontend/app/providers.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ae71651._.js.map