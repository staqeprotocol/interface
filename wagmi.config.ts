import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    react(),
    foundry({
      project: "../v1-core",
      deployments: {
        StaqeProtocol: {
          1337: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
          534351: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
          1029: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
          97: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
        },
        Toqen: {
          1337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          534351: "0x3AE2475877243dD4331c51BABa39832450526597",
          1029: "0x3AE2475877243dD4331c51BABa39832450526597",
          97: "0x3AE2475877243dD4331c51BABa39832450526597",
        },
        ERC20Toqen: {
          1337: "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be",
          534351: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
          1029: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
          97: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
        },
        ERC721Toqen: {
          1337: "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
          534351: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
          1029: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
          97: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
        },
      },
      include: [
        "StaqeProtocol.sol/StaqeProtocol.json",
        "Toqen.sol/Toqen.json",
        "Toqen.sol/ERC20Toqen.json",
        "Toqen.sol/ERC721Toqen.json",
        "ERC20.sol/ERC20.json",
        "ERC721.sol/ERC721.json",
      ],
    }),
  ],
});
