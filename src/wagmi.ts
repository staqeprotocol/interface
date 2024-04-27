import { injected } from '@wagmi/connectors';
import { cookieStorage, createConfig, createStorage, http } from '@wagmi/core';
import { localhost as l, scrollSepolia } from 'wagmi/chains';

const localhost = {
  ...l,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11' as `0x${string}`
    }
  }
};

export const config = createConfig({
  chains: [localhost, scrollSepolia],
  connectors: [
    injected()
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [localhost.id]: http(),
    [scrollSepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
