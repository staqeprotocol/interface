import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Toqen
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const erc20ToqenAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_name", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
      { name: "_maxSupply", internalType: "uint256", type: "uint256" },
      { name: "_tokenPrice", internalType: "uint256", type: "uint256" },
    ],
  },
  { stateMutability: "payable", type: "receive" },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", internalType: "bytes1", type: "bytes1" },
      { name: "name", internalType: "string", type: "string" },
      { name: "version", internalType: "string", type: "string" },
      { name: "chainId", internalType: "uint256", type: "uint256" },
      { name: "verifyingContract", internalType: "address", type: "address" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "extensions", internalType: "uint256[]", type: "uint256[]" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "maxSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "nonces",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "tokenPrice",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "withdraw",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  { type: "event", anonymous: false, inputs: [], name: "EIP712DomainChanged" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  { type: "error", inputs: [], name: "ECDSAInvalidSignature" },
  {
    type: "error",
    inputs: [{ name: "length", internalType: "uint256", type: "uint256" }],
    name: "ECDSAInvalidSignatureLength",
  },
  {
    type: "error",
    inputs: [{ name: "s", internalType: "bytes32", type: "bytes32" }],
    name: "ECDSAInvalidSignatureS",
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender",
  },
  {
    type: "error",
    inputs: [{ name: "deadline", internalType: "uint256", type: "uint256" }],
    name: "ERC2612ExpiredSignature",
  },
  {
    type: "error",
    inputs: [
      { name: "signer", internalType: "address", type: "address" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC2612InvalidSigner",
  },
  {
    type: "error",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "currentNonce", internalType: "uint256", type: "uint256" },
    ],
    name: "InvalidAccountNonce",
  },
  { type: "error", inputs: [], name: "InvalidShortString" },
  { type: "error", inputs: [], name: "ReentrancyGuardReentrantCall" },
  {
    type: "error",
    inputs: [{ name: "str", internalType: "string", type: "string" }],
    name: "StringTooLong",
  },
] as const;

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const erc20ToqenAddress = {
  1337: "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be",
  534351: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
  1029: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
  97: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
} as const;

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const erc20ToqenConfig = {
  address: erc20ToqenAddress,
  abi: erc20ToqenAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC721IncorrectOwner",
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC721InsufficientApproval",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC721InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC721InvalidOperator",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "ERC721InvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC721InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC721InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ERC721NonexistentToken",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Toqen
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const erc721ToqenAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_name", internalType: "string", type: "string" },
      { name: "_symbol", internalType: "string", type: "string" },
      { name: "_maxSupply", internalType: "uint256", type: "uint256" },
      { name: "_tokenPrice", internalType: "uint256", type: "uint256" },
      { name: "baseURI_", internalType: "string", type: "string" },
    ],
  },
  { stateMutability: "payable", type: "receive" },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "baseURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "maxSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "tokenPrice",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "withdraw",
    outputs: [],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC721IncorrectOwner",
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC721InsufficientApproval",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC721InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC721InvalidOperator",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "ERC721InvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC721InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC721InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ERC721NonexistentToken",
  },
  { type: "error", inputs: [], name: "ReentrancyGuardReentrantCall" },
] as const;

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const erc721ToqenAddress = {
  1337: "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
  534351: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
  1029: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
  97: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
} as const;

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const erc721ToqenConfig = {
  address: erc721ToqenAddress,
  abi: erc721ToqenAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StaqeProtocol
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const staqeProtocolAbi = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "stakeERC20", internalType: "contract IERC20", type: "address" },
      {
        name: "stakeERC721",
        internalType: "contract IERC721",
        type: "address",
      },
      { name: "rewardToken", internalType: "contract IERC20", type: "address" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "rewardToken", internalType: "contract IERC20", type: "address" },
      { name: "rewardAmount", internalType: "uint256", type: "uint256" },
      { name: "claimAfterBlocks", internalType: "uint256", type: "uint256" },
      { name: "isForERC721Stakers", internalType: "bool", type: "bool" },
    ],
    name: "addReward",
    outputs: [{ name: "rewardId", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "rewardToken", internalType: "contract IERC20", type: "address" },
      { name: "rewardAmount", internalType: "uint256", type: "uint256" },
      { name: "claimAfterBlocks", internalType: "uint256", type: "uint256" },
      { name: "isForERC721Stakers", internalType: "bool", type: "bool" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
      { name: "max", internalType: "bool", type: "bool" },
    ],
    name: "addRewardWithPermit",
    outputs: [{ name: "rewardId", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "staker", internalType: "address", type: "address" },
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "rewardId", internalType: "uint256", type: "uint256" },
    ],
    name: "calculateReward",
    outputs: [
      { name: "", internalType: "contract IERC20", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "poolIds", internalType: "uint256[]", type: "uint256[]" },
      { name: "rewardIds", internalType: "uint256[][]", type: "uint256[][]" },
      { name: "recipient", internalType: "address", type: "address" },
    ],
    name: "claimRewards",
    outputs: [
      {
        name: "tokens",
        internalType: "contract IERC20[][]",
        type: "address[][]",
      },
      { name: "amounts", internalType: "uint256[][]", type: "uint256[][]" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "contractURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "totalMax", internalType: "uint256", type: "uint256" },
      { name: "tokenURI", internalType: "string", type: "string" },
    ],
    name: "editPool",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "staker", internalType: "address", type: "address" },
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "rewardId", internalType: "uint256", type: "uint256" },
    ],
    name: "getClaimedAmount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "poolId", internalType: "uint256", type: "uint256" }],
    name: "getPool",
    outputs: [
      {
        name: "poolDetails",
        internalType: "struct IStaqeStructs.Pool",
        type: "tuple",
        components: [
          {
            name: "stakeERC20",
            internalType: "contract IERC20",
            type: "address",
          },
          {
            name: "stakeERC721",
            internalType: "contract IERC721",
            type: "address",
          },
          {
            name: "rewardToken",
            internalType: "contract IERC20",
            type: "address",
          },
          { name: "totalMax", internalType: "uint256", type: "uint256" },
          {
            name: "totalStakedERC20",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "totalStakedERC721",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "launchBlock", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "staker", internalType: "address", type: "address" },
      { name: "poolId", internalType: "uint256", type: "uint256" },
    ],
    name: "getPool",
    outputs: [
      {
        name: "poolDetails",
        internalType: "struct StaqeDetails.PoolDetails",
        type: "tuple",
        components: [
          {
            name: "stakeERC20",
            internalType: "struct StaqeDetails.Token",
            type: "tuple",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address",
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint256", type: "uint256" },
              { name: "balance", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "stakeERC721",
            internalType: "struct StaqeDetails.Token",
            type: "tuple",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address",
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint256", type: "uint256" },
              { name: "balance", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "rewardToken",
            internalType: "struct StaqeDetails.Token",
            type: "tuple",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address",
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint256", type: "uint256" },
              { name: "balance", internalType: "uint256", type: "uint256" },
            ],
          },
          { name: "owner", internalType: "address", type: "address" },
          { name: "tokenURI", internalType: "string", type: "string" },
          { name: "totalRewards", internalType: "uint256", type: "uint256" },
          {
            name: "totalStakerStakes",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "totalMax", internalType: "uint256", type: "uint256" },
          {
            name: "totalStakedERC20",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "totalStakedERC721",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "launchBlock", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "staker", internalType: "address", type: "address" },
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "rewardId", internalType: "uint256", type: "uint256" },
    ],
    name: "getReward",
    outputs: [
      {
        name: "rewardDetails",
        internalType: "struct StaqeDetails.RewardDetails",
        type: "tuple",
        components: [
          {
            name: "rewardToken",
            internalType: "struct StaqeDetails.Token",
            type: "tuple",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address",
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint256", type: "uint256" },
              { name: "balance", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "stakerRewardAmount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "isClaimed", internalType: "bool", type: "bool" },
          { name: "isForERC721Stakers", internalType: "bool", type: "bool" },
          { name: "rewardAmount", internalType: "uint256", type: "uint256" },
          { name: "totalStaked", internalType: "uint256", type: "uint256" },
          {
            name: "claimAfterBlocks",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "rewardBlock", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "rewardId", internalType: "uint256", type: "uint256" },
    ],
    name: "getReward",
    outputs: [
      {
        name: "rewardDetails",
        internalType: "struct IStaqeStructs.Reward",
        type: "tuple",
        components: [
          { name: "isForERC721Stakers", internalType: "bool", type: "bool" },
          {
            name: "rewardToken",
            internalType: "contract IERC20",
            type: "address",
          },
          { name: "rewardAmount", internalType: "uint256", type: "uint256" },
          { name: "totalStaked", internalType: "uint256", type: "uint256" },
          {
            name: "claimAfterBlocks",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "rewardBlock", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "poolId", internalType: "uint256", type: "uint256" }],
    name: "getRewards",
    outputs: [
      {
        name: "",
        internalType: "struct IStaqeStructs.Reward[]",
        type: "tuple[]",
        components: [
          { name: "isForERC721Stakers", internalType: "bool", type: "bool" },
          {
            name: "rewardToken",
            internalType: "contract IERC20",
            type: "address",
          },
          { name: "rewardAmount", internalType: "uint256", type: "uint256" },
          { name: "totalStaked", internalType: "uint256", type: "uint256" },
          {
            name: "claimAfterBlocks",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "rewardBlock", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "staker", internalType: "address", type: "address" },
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "stakeId", internalType: "uint256", type: "uint256" },
    ],
    name: "getStake",
    outputs: [
      {
        name: "stakeDetails",
        internalType: "struct IStaqeStructs.Stake",
        type: "tuple",
        components: [
          { name: "amountERC20", internalType: "uint256", type: "uint256" },
          { name: "idERC721", internalType: "uint256", type: "uint256" },
          { name: "stakeBlock", internalType: "uint256", type: "uint256" },
          { name: "unstakeBlock", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "staker", internalType: "address", type: "address" },
      { name: "poolId", internalType: "uint256", type: "uint256" },
    ],
    name: "getStakes",
    outputs: [
      {
        name: "",
        internalType: "struct IStaqeStructs.Stake[]",
        type: "tuple[]",
        components: [
          { name: "amountERC20", internalType: "uint256", type: "uint256" },
          { name: "idERC721", internalType: "uint256", type: "uint256" },
          { name: "stakeBlock", internalType: "uint256", type: "uint256" },
          { name: "unstakeBlock", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getTotalPools",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "stakeERC20", internalType: "contract IERC20", type: "address" },
      {
        name: "stakeERC721",
        internalType: "contract IERC721",
        type: "address",
      },
      { name: "rewardToken", internalType: "contract IERC20", type: "address" },
      { name: "totalMax", internalType: "uint256", type: "uint256" },
      { name: "tokenURI", internalType: "string", type: "string" },
    ],
    name: "launchPool",
    outputs: [{ name: "poolId", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newURI", internalType: "string", type: "string" }],
    name: "setContractURI",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "id", internalType: "uint256", type: "uint256" },
    ],
    name: "stake",
    outputs: [{ name: "stakeId", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
      { name: "max", internalType: "bool", type: "bool" },
    ],
    name: "stakeWithPermit",
    outputs: [{ name: "stakeId", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "user", internalType: "address", type: "address" },
      { name: "ierc20", internalType: "contract IERC20", type: "address" },
      { name: "ierc721", internalType: "contract IERC721", type: "address" },
    ],
    name: "tokenInfo",
    outputs: [
      {
        name: "token",
        internalType: "struct StaqeDetails.Token",
        type: "tuple",
        components: [
          { name: "tokenAddress", internalType: "address", type: "address" },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint256", type: "uint256" },
          { name: "balance", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "poolId", internalType: "uint256", type: "uint256" },
      { name: "stakeIds", internalType: "uint256[]", type: "uint256[]" },
    ],
    name: "unstake",
    outputs: [
      { name: "amountERC20", internalType: "uint256", type: "uint256" },
      { name: "idsERC721", internalType: "uint256[]", type: "uint256[]" },
    ],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_fromTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "_toTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "BatchMetadataUpdate",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "staker",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "poolId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Claimed",
  },
  { type: "event", anonymous: false, inputs: [], name: "ContractURIUpdated" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "launcher",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "poolId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Launched",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "MetadataUpdate",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "rewarder",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "poolId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "rewardId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Rewarded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "staker",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "poolId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "stakeId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Staked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "staker",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "poolId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Unstaked",
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "ERC721IncorrectOwner",
  },
  {
    type: "error",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "ERC721InsufficientApproval",
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC721InvalidApprover",
  },
  {
    type: "error",
    inputs: [{ name: "operator", internalType: "address", type: "address" }],
    name: "ERC721InvalidOperator",
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "ERC721InvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC721InvalidReceiver",
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC721InvalidSender",
  },
  {
    type: "error",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ERC721NonexistentToken",
  },
  { type: "error", inputs: [], name: "InvalidAmountOrId" },
  { type: "error", inputs: [], name: "InvalidERC721Token" },
  { type: "error", inputs: [], name: "InvalidRewardToken" },
  { type: "error", inputs: [], name: "InvalidStakeId" },
  { type: "error", inputs: [], name: "InvalidStakeToken" },
  { type: "error", inputs: [], name: "InvalidTokenURI" },
  { type: "error", inputs: [], name: "MoreThanTheTotalMaxTokens" },
  { type: "error", inputs: [], name: "OnlyAvailableToStakersInGenesis" },
  { type: "error", inputs: [], name: "OnlyOwnerHasAccessToAddRewards" },
  { type: "error", inputs: [], name: "OnlyOwnerHasAccessToEditTokenURI" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
  { type: "error", inputs: [], name: "PoolDoesNotExist" },
  { type: "error", inputs: [], name: "PoolDoesNotHaveStakes" },
  { type: "error", inputs: [], name: "ReentrancyGuardReentrantCall" },
  { type: "error", inputs: [], name: "RewardAlreadyClaimed" },
  { type: "error", inputs: [], name: "RewardIsEmpty" },
  { type: "error", inputs: [], name: "RewardIsNotYetAvailableForClaim" },
  { type: "error", inputs: [], name: "RewardNotFoundInPool" },
  { type: "error", inputs: [], name: "RewardTransferFailed" },
  { type: "error", inputs: [], name: "StakeAlreadyUnstaked" },
  { type: "error", inputs: [], name: "StakeOnNextBlockAfterReward" },
  { type: "error", inputs: [], name: "StakeTransferFailed" },
  { type: "error", inputs: [], name: "StakerDoesNotHaveStakesInPool" },
  { type: "error", inputs: [], name: "TotalMaxForOnlyOneTypeOfToken" },
  { type: "error", inputs: [], name: "UnstakeOnNextBlockAndGetReward" },
  { type: "error", inputs: [], name: "UnstakeTransferFailed" },
] as const;

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const staqeProtocolAddress = {
  1337: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
  534351: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
  1029: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
  97: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
} as const;

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const staqeProtocolConfig = {
  address: staqeProtocolAddress,
  abi: staqeProtocolAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toqen
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const toqenAbi = [
  { stateMutability: "nonpayable", type: "constructor", inputs: [] },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "maxSupply", internalType: "uint256", type: "uint256" },
      { name: "tokenPrice", internalType: "uint256", type: "uint256" },
    ],
    name: "createERC20",
    outputs: [
      { name: "token", internalType: "contract ERC20Toqen", type: "address" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "maxSupply", internalType: "uint256", type: "uint256" },
      { name: "tokenPrice", internalType: "uint256", type: "uint256" },
      { name: "baseURI", internalType: "string", type: "string" },
    ],
    name: "createERC721",
    outputs: [
      { name: "token", internalType: "contract ERC721Toqen", type: "address" },
    ],
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "creator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "TokenCreated",
  },
] as const;

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const toqenAddress = {
  1337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  534351: "0x3AE2475877243dD4331c51BABa39832450526597",
  1029: "0x3AE2475877243dD4331c51BABa39832450526597",
  97: "0x3AE2475877243dD4331c51BABa39832450526597",
} as const;

/**
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const toqenConfig = { address: toqenAddress, abi: toqenAbi } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "allowance",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "decimals",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: "totalSupply",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "transfer",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: "transfer" }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20Toqen = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "DOMAIN_SEPARATOR",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"allowance"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "allowance",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"decimals"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "decimals",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "eip712Domain",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"maxSupply"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenMaxSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "maxSupply",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"name"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenName = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"nonces"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenNonces = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "nonces",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"owner"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenOwner = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"symbol"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"tokenPrice"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenTokenPrice = /*#__PURE__*/ createUseReadContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "tokenPrice",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useReadErc20ToqenTotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "totalSupply",
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20ToqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWriteErc20Toqen = /*#__PURE__*/ createUseWriteContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"approve"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWriteErc20ToqenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"mint"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWriteErc20ToqenMint = /*#__PURE__*/ createUseWriteContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"permit"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWriteErc20ToqenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "permit",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"transfer"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWriteErc20ToqenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "transfer",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWriteErc20ToqenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"withdraw"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWriteErc20ToqenWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
  functionName: "withdraw",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20ToqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useSimulateErc20Toqen = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20ToqenAbi,
  address: erc20ToqenAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"approve"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useSimulateErc20ToqenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"mint"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useSimulateErc20ToqenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "mint",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"permit"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useSimulateErc20ToqenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "permit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"transfer"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useSimulateErc20ToqenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "transfer",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useSimulateErc20ToqenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20ToqenAbi}__ and `functionName` set to `"withdraw"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useSimulateErc20ToqenWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    functionName: "withdraw",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20ToqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWatchErc20ToqenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20ToqenAbi}__ and `eventName` set to `"Approval"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWatchErc20ToqenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20ToqenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWatchErc20ToqenEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    eventName: "EIP712DomainChanged",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20ToqenAbi}__ and `eventName` set to `"Transfer"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeA0531fa7A5ccaa2089081e601c431eA61efD91A)
 */
export const useWatchErc20ToqenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20ToqenAbi,
    address: erc20ToqenAddress,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: "getApproved",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: "isApprovedForAll",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: "ownerOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: "supportsInterface",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: "tokenURI",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: "transferFrom",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: "approve" }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: "ApprovalForAll",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721Toqen = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "balanceOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"baseURI"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenBaseUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "baseURI",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"getApproved"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "getApproved",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "isApprovedForAll",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"maxSupply"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenMaxSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "maxSupply",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"name"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenName = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"owner"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenOwner = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"ownerOf"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "ownerOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "supportsInterface",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"symbol"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"tokenPrice"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenTokenPrice = /*#__PURE__*/ createUseReadContract(
  {
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "tokenPrice",
  }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"tokenURI"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "tokenURI",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useReadErc721ToqenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "totalSupply",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721ToqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWriteErc721Toqen = /*#__PURE__*/ createUseWriteContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"approve"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWriteErc721ToqenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "approve",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"mint"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWriteErc721ToqenMint = /*#__PURE__*/ createUseWriteContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
  functionName: "mint",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWriteErc721ToqenSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWriteErc721ToqenSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWriteErc721ToqenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"withdraw"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWriteErc721ToqenWithdraw = /*#__PURE__*/ createUseWriteContract(
  {
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "withdraw",
  }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721ToqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useSimulateErc721Toqen = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721ToqenAbi,
  address: erc721ToqenAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"approve"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useSimulateErc721ToqenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"mint"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useSimulateErc721ToqenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "mint",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useSimulateErc721ToqenSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useSimulateErc721ToqenSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useSimulateErc721ToqenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721ToqenAbi}__ and `functionName` set to `"withdraw"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useSimulateErc721ToqenWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    functionName: "withdraw",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721ToqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWatchErc721ToqenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721ToqenAbi}__ and `eventName` set to `"Approval"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWatchErc721ToqenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721ToqenAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWatchErc721ToqenApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    eventName: "ApprovalForAll",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721ToqenAbi}__ and `eventName` set to `"Transfer"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22)
 */
export const useWatchErc721ToqenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721ToqenAbi,
    address: erc721ToqenAddress,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocol = /*#__PURE__*/ createUseReadContract({
  abi: staqeProtocolAbi,
  address: staqeProtocolAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"balanceOf"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "balanceOf",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"calculateReward"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolCalculateReward =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "calculateReward",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"contractURI"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "contractURI",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"getApproved"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "getApproved",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"getClaimedAmount"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolGetClaimedAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "getClaimedAmount",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"getPool"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolGetPool = /*#__PURE__*/ createUseReadContract({
  abi: staqeProtocolAbi,
  address: staqeProtocolAddress,
  functionName: "getPool",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"getReward"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolGetReward =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "getReward",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"getRewards"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolGetRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "getRewards",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"getStake"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolGetStake = /*#__PURE__*/ createUseReadContract(
  {
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "getStake",
  }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"getStakes"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolGetStakes =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "getStakes",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"getTotalPools"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolGetTotalPools =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "getTotalPools",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "isApprovedForAll",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"name"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolName = /*#__PURE__*/ createUseReadContract({
  abi: staqeProtocolAbi,
  address: staqeProtocolAddress,
  functionName: "name",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"owner"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolOwner = /*#__PURE__*/ createUseReadContract({
  abi: staqeProtocolAbi,
  address: staqeProtocolAddress,
  functionName: "owner",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"ownerOf"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: staqeProtocolAbi,
  address: staqeProtocolAddress,
  functionName: "ownerOf",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "supportsInterface",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"symbol"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolSymbol = /*#__PURE__*/ createUseReadContract({
  abi: staqeProtocolAbi,
  address: staqeProtocolAddress,
  functionName: "symbol",
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"tokenInfo"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolTokenInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "tokenInfo",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"tokenURI"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useReadStaqeProtocolTokenUri = /*#__PURE__*/ createUseReadContract(
  {
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "tokenURI",
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocol = /*#__PURE__*/ createUseWriteContract({
  abi: staqeProtocolAbi,
  address: staqeProtocolAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"addReward"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolAddReward =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "addReward",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"addRewardWithPermit"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolAddRewardWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "addRewardWithPermit",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"approve"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"claimRewards"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolClaimRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "claimRewards",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"editPool"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolEditPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "editPool",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"launchPool"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolLaunchPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "launchPool",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"setContractURI"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolSetContractUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "setContractURI",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"stake"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolStake = /*#__PURE__*/ createUseWriteContract({
  abi: staqeProtocolAbi,
  address: staqeProtocolAddress,
  functionName: "stake",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"stakeWithPermit"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolStakeWithPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "stakeWithPermit",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"transferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"unstake"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWriteStaqeProtocolUnstake =
  /*#__PURE__*/ createUseWriteContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "unstake",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocol = /*#__PURE__*/ createUseSimulateContract(
  { abi: staqeProtocolAbi, address: staqeProtocolAddress }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"addReward"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolAddReward =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "addReward",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"addRewardWithPermit"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolAddRewardWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "addRewardWithPermit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"approve"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "approve",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"claimRewards"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolClaimRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "claimRewards",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"editPool"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolEditPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "editPool",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"launchPool"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolLaunchPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "launchPool",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "renounceOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "safeTransferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "setApprovalForAll",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"setContractURI"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolSetContractUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "setContractURI",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"stake"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "stake",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"stakeWithPermit"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolStakeWithPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "stakeWithPermit",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"transferFrom"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "transferFrom",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "transferOwnership",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link staqeProtocolAbi}__ and `functionName` set to `"unstake"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useSimulateStaqeProtocolUnstake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    functionName: "unstake",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"Approval"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "Approval",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "ApprovalForAll",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "BatchMetadataUpdate",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"Claimed"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "Claimed",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"ContractURIUpdated"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolContractUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "ContractURIUpdated",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"Launched"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolLaunchedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "Launched",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"MetadataUpdate"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "MetadataUpdate",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "OwnershipTransferred",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"Rewarded"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolRewardedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "Rewarded",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"Staked"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolStakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "Staked",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"Transfer"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "Transfer",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link staqeProtocolAbi}__ and `eventName` set to `"Unstaked"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f)
 */
export const useWatchStaqeProtocolUnstakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: staqeProtocolAbi,
    address: staqeProtocolAddress,
    eventName: "Unstaked",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link toqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const useWriteToqen = /*#__PURE__*/ createUseWriteContract({
  abi: toqenAbi,
  address: toqenAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link toqenAbi}__ and `functionName` set to `"createERC20"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const useWriteToqenCreateErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: toqenAbi,
  address: toqenAddress,
  functionName: "createERC20",
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link toqenAbi}__ and `functionName` set to `"createERC721"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const useWriteToqenCreateErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: toqenAbi,
  address: toqenAddress,
  functionName: "createERC721",
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link toqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const useSimulateToqen = /*#__PURE__*/ createUseSimulateContract({
  abi: toqenAbi,
  address: toqenAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link toqenAbi}__ and `functionName` set to `"createERC20"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const useSimulateToqenCreateErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: toqenAbi,
    address: toqenAddress,
    functionName: "createERC20",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link toqenAbi}__ and `functionName` set to `"createERC721"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const useSimulateToqenCreateErc721 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: toqenAbi,
    address: toqenAddress,
    functionName: "createERC721",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link toqenAbi}__
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const useWatchToqenEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: toqenAbi,
  address: toqenAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link toqenAbi}__ and `eventName` set to `"TokenCreated"`
 *
 * -
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3AE2475877243dD4331c51BABa39832450526597)
 */
export const useWatchToqenTokenCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: toqenAbi,
    address: toqenAddress,
    eventName: "TokenCreated",
  });
