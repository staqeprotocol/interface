export interface ITokenInList {
    address: `0x${string}`;
    logoURI: string;
}

export interface ITokenList {
    timestamp: string;
    tokens: ITokenInList[];
}

export type ILogos = { [tokenAddress: `0x${string}`]: string };