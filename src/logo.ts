import { TOKENS_URL, TOKEN_LOGO } from "@/src/constants";
import { ITokenList } from "@/src/interfaces";

const isBrowser = typeof window !== "undefined";

interface IStorage {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
}

const localStorageFallback: IStorage = {
    getItem: () => null,
    setItem: () => { },
};

// window.localStorage
const storage: IStorage = isBrowser ? window.localStorage : localStorageFallback;

export const fetchLogos = async (): Promise<void> => {
    const lastUpdateLogos = storage.getItem("lastUpdateLogos");
    const nowDate = new Date().getTime();
    const updDate = new Date(parseInt(lastUpdateLogos || "0", 10)).getTime();
    const shouldFetch = nowDate - updDate > 86400000;

    if (!shouldFetch) return;

    const response = await fetch(TOKENS_URL);

    if (!response.ok) return;

    const tokenList: ITokenList = await response.json();

    tokenList.tokens.forEach(token => {
        storage.setItem(token.address, token.logoURI);
    });

    storage.setItem("lastUpdateLogos", nowDate.toString());
};

export const fetchLogo = async (tokenAddress: `0x${string}`): Promise<string> => {
    try {
        await fetchLogos();
        return storage.getItem(tokenAddress) || TOKEN_LOGO;
    } catch (error) {
        console.error("Failed to fetch or parse token logos:", error);
        return TOKEN_LOGO;
    }
};

export const getLogo = (tokenAddress: `0x${string}` | undefined): string => {
    const logo = storage.getItem(tokenAddress ?? "");
    return logo || TOKEN_LOGO;
}

export const getLogoAsync = async (tokenAddress: `0x${string}`): Promise<string> => {
    const logo = storage.getItem(tokenAddress);
    return logo || await fetchLogo(tokenAddress);
};
