import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    react(),
    foundry({
      project: "../01Jun24-v1-core",
      deployments: {
        StaqeProtocol: {
          1337: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
          534351: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
          1029: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
          97: "0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",
          80002: "0x446565A7fE06Fb89f9d6Fe855F8210dbcDe88Ee7",
          43113: "0xE72A7E626d99155df3aD887e2fC257e4E5b39F73",
        },
        QrossFactory: {
          80002: "0x3AE2475877243dD4331c51BABa39832450526597",
        },
        Toqen: {
          1337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          534351: "0x3AE2475877243dD4331c51BABa39832450526597",
          1029: "0x3AE2475877243dD4331c51BABa39832450526597",
          97: "0x3AE2475877243dD4331c51BABa39832450526597",
          80002: "0x18414dFDc066704014798a175A1b110efd5F066f",
          43113: "0xC28A2145aF2880d40e9D7F75a19c68B389c39B45",
        },
        ERC20Toqen: {
          1337: "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be",
          534351: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
          1029: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
          97: "0xeA0531fa7A5ccaa2089081e601c431eA61efD91A",
          80002: "0xF8842aE51cdd33c57c57b706781E5f19D07c656f",
          43113: "0x70991fB075aCC5783Cca9BF3B450fd0b3d38AEEB",
        },
        ERC721Toqen: {
          1337: "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968",
          534351: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
          1029: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
          97: "0x1799B3184364B99e2C16B93BD9A3C1e1bd444f22",
          80002: "0xe6b7D6039Df4215fEc4ECA938Ad465395F5dd4cF",
          43113: "0x2D5c03eC83eC161530D7841a00780dcf23121629",
        },
      },
      include: [
        "StaqeProtocol.sol/StaqeProtocol.json",
        "Toqen.sol/Toqen.json",
        "Toqen.sol/ERC20Toqen.json",
        "Toqen.sol/ERC721Toqen.json",
        "QrossFactory.sol/QrossFactory.json",
        "QrossFactory.sol/ERC20Q.json",
        "QrossFactory.sol/ERC721Q.json",
        "ERC20.sol/ERC20.json",
        "ERC721.sol/ERC721.json",
      ],
    }),
  ],
});
