import { injected } from "@wagmi/connectors";
import { cookieStorage, createConfig, createStorage, http } from "@wagmi/core";
import { defineChain } from "viem";
import {
  avalancheFuji,
  bitTorrent,
  bscTestnet,
  localhost as l,
  polygonAmoy,
  scrollSepolia,
} from "wagmi/chains";

const localhost = {
  ...l,
  testnet: true,
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11" as `0x${string}`,
    },
  },
};

const bitTorrentDonau = defineChain({
  id: 1029,
  name: "BitTorrent Chain Donau",
  testnet: true,
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

const taikoHekla = /*#__PURE__*/ defineChain({
  id: 167_009,
  name: "Taiko Hekla L2",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.hekla.taiko.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Taikoscan",
      url: "https://hekla.taikoscan.network",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    },
  },
  testnet: true,
});

export const config = createConfig({
  chains: [
    taikoHekla,
    scrollSepolia,
    polygonAmoy,
    avalancheFuji,
    bitTorrent,
    bitTorrentDonau,
    bscTestnet,
    localhost,
  ],
  connectors: [injected()],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [localhost.id]: http(),
    [scrollSepolia.id]: http(),
    [bitTorrent.id]: http(),
    [bitTorrentDonau.id]: http(),
    [bscTestnet.id]: http(),
    [polygonAmoy.id]: http(),
    [avalancheFuji.id]: http(),
    [taikoHekla.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
