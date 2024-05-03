import { injected } from "@wagmi/connectors";
import { cookieStorage, createConfig, createStorage, http } from "@wagmi/core";
import { defineChain } from "viem";
import { bscTestnet, localhost as l, scrollSepolia } from "wagmi/chains";

const localhost = {
  ...l,
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11" as `0x${string}`,
    },
  },
};

const bitTorrent = defineChain({
  id: 1029,
  name: "BitTorrent Chain Donau",
  nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://pre-rpc.bittorrentchain.io/"] },
  },
  blockExplorers: {
    default: { name: "BitTorrent", url: "https://testscan.bt.io" },
  },
  contracts: {
    multicall3: {
      address: "0x5608020135e7Eb9a1ef6683aD4988200eA5Cfcbf",
    },
  },
});

export const config = createConfig({
  chains: [localhost, scrollSepolia, bitTorrent, bscTestnet],
  connectors: [injected()],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [localhost.id]: http(),
    [scrollSepolia.id]: http(),
    [bitTorrent.id]: http(),
    [bscTestnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
