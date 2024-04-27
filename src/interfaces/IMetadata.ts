export interface IMetadata {
    name: string;
    description: string;
    image: string;
    external_url?: string;
    background_color?: string;
    banner_image?: string;
    attributes?: {
        trait_type: string;
        value: `0x${string}`;
    }[];
    tokens?: {
        chainId: number;
        address: `0x${string}`;
        symbol: string;
        name: string;
        decimals: number;
        logoURI: string;
        tags: string[];
    }[];
    timestamp?: string;
    logoURIs?: { [address: `0x${string}`]: string }
}

export type IMetadataMap = { [tokenURI: string]: IMetadata };

export const defaultMetadata: IMetadata = {
    name: "",
    description: "",
    image: "/images/token.jpg",
    external_url: "",
    banner_image: "",
};