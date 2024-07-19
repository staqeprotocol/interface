export interface IToken {
  tokenAddress: `0x${string}`;
  name: string;
  symbol: string;
  decimals: bigint;
  balance: bigint;
  isApproved: boolean;
  logo?: string;
}

export interface ITokenFull extends IToken {
  allowance: bigint;
  tokenPrice: bigint;
  maxSupply: bigint;
}
