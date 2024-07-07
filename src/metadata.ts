import { GATEWAY_URL } from "./constants";
import { IMetadata, defaultMetadata } from "./interfaces";

const isBrowser = typeof window !== "undefined";

interface IStorage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}

const localStorageFallback: IStorage = {
  getItem: () => null,
  setItem: () => {},
};

// window.localStorage
const storage: IStorage = isBrowser
  ? window.localStorage
  : localStorageFallback;

export const fetchMetadata = async (
  tokenURI: string | undefined
): Promise<IMetadata | undefined> => {
  if (tokenURI === undefined || tokenURI === "") return;

  const lastUpdateMetadata = storage.getItem("lastUpdateMetadata");
  const nowDate = new Date().getTime();
  const updDate = new Date(parseInt(lastUpdateMetadata || "0", 10)).getTime();
  const shouldFetch = nowDate - updDate > 0; // 86400000

  if (!shouldFetch) return defaultMetadata;

  const response = /^ipfs/.test(tokenURI)
    ? await fetch(`${GATEWAY_URL}${tokenURI.replace(/ipfs:\/\//g, "")}`)
    : null;

  if (!response || !response.ok) return defaultMetadata;

  const metadata: IMetadata = await response.json();

  metadata.image = /^ipfs/.test(metadata.image)
    ? `${GATEWAY_URL}${metadata.image.replace(/ipfs:\/\//g, "")}`
    : metadata.image;
  metadata.banner_image = /^ipfs/.test(metadata.banner_image ?? "")
    ? `${GATEWAY_URL}${(metadata.banner_image ?? "").replace(/ipfs:\/\//g, "")}`
    : metadata.banner_image;

  if (metadata.tokens && metadata.tokens.length) {
    metadata.tokens.forEach((token) => {
      if (token.address && token.logoURI) {
        if (!metadata.logoURIs) {
          metadata.logoURIs = {};
        }
        metadata.logoURIs[token.address] =
          `${GATEWAY_URL}${(token.logoURI ?? "").replace(/ipfs:\/\//g, "")}`;
      }
    });
  }

  storage.setItem(tokenURI, JSON.stringify(metadata));
  storage.setItem("lastUpdateMetadata", nowDate.toString());

  return metadata;
};

export const getMetadata = async (
  tokenURI: string
): Promise<IMetadata | undefined> => {
  try {
    const storedMetadata = storage.getItem(tokenURI);
    // return storedMetadata ? JSON.parse(storedMetadata) : await fetchMetadata(tokenURI);
    return await fetchMetadata(tokenURI);
  } catch (error) {
    console.error("Failed to fetch or parse metadata:", error);
    return defaultMetadata;
  }
};
