import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    react(),
    foundry({
      project: '../v1-core',
      deployments: {
        StaqeProtocol: {
          1337: '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82',
        },
        Toqen: {
          1337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        },
        ERC20Toqen: {
          1337: '0xa16E02E87b7454126E5E10d957A927A7F5B5d2be',
        },
        ERC721Toqen: {
          1337: '0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968',
        },
      },
      include: [
        'StaqeProtocol.sol/StaqeProtocol.json',
        'Toqen.sol/Toqen.json',
        'Toqen.sol/ERC20Toqen.json',
        'Toqen.sol/ERC721Toqen.json',
        'ERC20.sol/ERC20.json',
        'ERC721.sol/ERC721.json',
      ],
    }),
  ],
})
