"use client";

import { ZERO_ADDRESS } from "@/src/constants";
import {
  staqeProtocolAddress,
  useReadStaqeProtocolGetPool,
  useReadStaqeProtocolGetStakes,
  useWriteErc721SetApprovalForAll,
  useWriteStaqeProtocolLaunchPool,
  useWriteStaqeProtocolStake,
  useWriteStaqeProtocolUnstake,
} from "@/src/generated";

import { useAccount, useChainId } from "wagmi";

function getHexString(
  value: FormDataEntryValue | null,
  def: `0x${string}`
): `0x${string}` {
  if (typeof value !== "string") {
    throw new Error("Expected a string value");
  }
  return value.startsWith("0x") ? (value as `0x${string}`) : def;
}

function LaunchPool() {
  const chainId = useChainId();
  const { [chainId]: address } = staqeProtocolAddress as any;

  const { address: accountAddress = ZERO_ADDRESS } = useAccount();

  const { writeContract: genesisStake } = useWriteStaqeProtocolStake();
  const { writeContract: genesisUnstake } = useWriteStaqeProtocolUnstake();
  const { writeContract: launchPool } = useWriteStaqeProtocolLaunchPool();
  const { writeContract: erc721Approve } = useWriteErc721SetApprovalForAll();

  const { data: genesisPool } = useReadStaqeProtocolGetPool({
    args: [accountAddress, 0n],
  });
  const { data: getStakes } = useReadStaqeProtocolGetStakes({
    args: [accountAddress, 0n],
  });

  const uploadImage = async (
    name: string,
    file: FormDataEntryValue | null
  ): Promise<string> => {
    try {
      const formData = new FormData();
      if (file instanceof File) {
        formData.append("file", file);
      } else {
        console.error(`The field did not contain a file.`);
        return "";
      }
      formData.append("pinataMetadata", JSON.stringify({ name }));
      formData.append("pinataOptions", JSON.stringify({ cidVersion: 0 }));

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();

      console.log("uploadImage", resData);

      return resData && resData.IpfsHash ? resData.IpfsHash : "";
    } catch (error) {
      console.log("uploadImage", error);
      return "";
    }
  };

  const actionLaunchPool = async (formData: FormData) => {
    const stakeERC20 = getHexString(
      formData.get("stakeERC20"),
      "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    );
    const stakeERC721 = getHexString(
      formData.get("stakeERC721"),
      "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    );
    const rewardToken = getHexString(
      formData.get("rewardToken"),
      "0x0165878A594ca255338adfa4d48449f69242Eb8F"
    );
    const rewarder = getHexString(
      formData.get("rewarder"),
      "0x0000000000000000000000000000000000000000"
    );

    let metadata: `0x${string}` =
      "0x91a7421a5bbb8ca93dbdf7cce76ff2f25313e16f91ae2f2f1c07f78101c23285";
    // const name = formData.get("name");
    // const logoURI = await uploadImage("Logo", formData.get("logo"));
    // const backgroundURI = await uploadImage("Bg", formData.get("background"));
    // const description = formData.get("description");

    // if (
    //   name == "" ||
    //   description == "" ||
    //   logoURI == "" ||
    //   backgroundURI == ""
    // ) {
    //   console.log("name", name);
    //   console.log("description", description);
    //   console.log("logoURI", logoURI);
    //   console.log("backgroundURI", backgroundURI);
    //   return "";
    // }

    console.log("Staqe:", stakeERC20, stakeERC721, rewardToken, rewarder);

    try {
      // const jsonBlob = new Blob(
      //   [
      //     JSON.stringify({
      //       name,
      //       logoURI,
      //       backgroundURI,
      //       description,
      //     }),
      //   ],
      //   { type: "application/json" }
      // );

      // const formData = new FormData();
      // formData.append("file", jsonBlob, "filename.json");
      // formData.append("pinataMetadata", JSON.stringify({ name }));
      // formData.append("pinataOptions", JSON.stringify({ cidVersion: 0 }));

      // const res = await fetch(
      //   "https://api.pinata.cloud/pinning/pinFileToIPFS",
      //   {
      //     method: "POST",
      //     headers: {
      //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
      //     },
      //     body: formData,
      //   }
      // );
      // const resData = await res.json();

      // if (resData && resData.IpfsHash) {
      //   metadata = `0x${Buffer.from(bs58.decode(resData.IpfsHash)).toString("hex").slice(4)}`;
      // }

      // console.log("Metadata", resData && resData.IpfsHash, metadata);

      if (metadata != "0x") {
        console.log([stakeERC20, stakeERC721, rewardToken, rewarder, metadata]);
        launchPool({
          // @ts-ignore
          functionName: "launchPool",
          args: [stakeERC20, stakeERC721, rewardToken, 0n, metadata],
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      {!genesisPool ||
        (genesisPool.totalStakerStakes <= 0 && (
          <>
            <h1>Genesis NFT</h1>
            <button
              onClick={() => {
                erc721Approve({
                  address:
                    genesisPool?.stakeERC721?.tokenAddress || ZERO_ADDRESS,
                  args: [address, true],
                });
              }}
            >
              Approve NFTs
            </button>
            <button
              onClick={() => {
                genesisStake({
                  args: [0n, 0n, 2n],
                });
              }}
            >
              Stake ERC20 and NFT
            </button>
            <button
              onClick={() => {
                getStakes &&
                  genesisUnstake({
                    // @ts-ignore
                    functionName: "unstake",
                    args: [0n, getStakes.map((_: any, i: any) => BigInt(i))],
                  });
              }}
            >
              Unstake
            </button>
          </>
        ))}
      {genesisPool && genesisPool.totalStakerStakes > 0 && (
        <>
          <h1>LounchPool</h1>
          {/* @ts-ignore */}
          <form action={actionLaunchPool}>
            <p>
              <label>
                name:
                <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                description:
                <input type="text" name="description" />
              </label>
            </p>
            <p>
              <label>
                logo:
                <input type="file" name="logo" />
              </label>
            </p>
            <p>
              <label>
                background:
                <input type="file" name="background" />
              </label>
            </p>
            <hr></hr>
            <p>
              <label>
                stakeERC20:
                <input type="text" name="stakeERC20" />
              </label>
            </p>
            <p>
              <label>
                stakeERC721:
                <input type="text" name="stakeERC721" />
              </label>
            </p>
            <p>
              <label>
                rewardToken:
                <input type="text" name="rewardToken" />
              </label>
            </p>
            <button type="submit">Launched</button>
          </form>
        </>
      )}
    </>
  );
}

export default LaunchPool;
