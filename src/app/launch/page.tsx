"use client";

import { GATEWAY_URL, ZERO_ADDRESS } from "@/src/constants";
import {
  toqenAddress,
  useReadStaqeProtocolGetStakes,
  useWriteStaqeProtocolLaunchPool,
} from "@/src/generated";
import { useErc20, useErc721 } from "@/src/hooks/useErc";
import { Create } from "@toqen/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { getAddress } from "viem";
import { useAccount, useChainId } from "wagmi";

const LaunchPool = () => {
  const chainId = useChainId();
  const { [chainId]: toqen } = toqenAddress as any;

  const { address: accountAddress = ZERO_ADDRESS } = useAccount();

  const [ipfs, setIpfs] = useState("");

  const [color, setColor] = useState("");
  const [logo, setLogo] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [stakeErc20, setStakeErc20] = useState("");
  const [stakeErc721, setStakeErc721] = useState("");
  const [rewardErc20, setRewardErc20] = useState("");
  const [logoErc20, setLogoErc20] = useState("");
  const [logoErc20File, setLogoErc20File] = useState<File | null>(null);
  const [logoErc721, setLogoErc721] = useState("");
  const [logoErc721File, setLogoErc721File] = useState<File | null>(null);
  const [logoReward, setLogoReward] = useState("");
  const [logoRewardFile, setLogoRewardFile] = useState<File | null>(null);
  const [totalMax, setTotalMax] = useState("");

  const [picker, setPicker] = useState("hidden");

  const [loading, setLoading] = useState("");

  const [infoErc20] = useErc20(stakeErc20 as `0x${string}`, accountAddress);
  const [infoErc721] = useErc721(stakeErc721 as `0x${string}`, accountAddress);
  const [infoReward] = useErc20(rewardErc20 as `0x${string}`, accountAddress);

  const { data: stakes, refetch } = useReadStaqeProtocolGetStakes({
    args: [accountAddress, 0n],
  });
  const hasGenesis = useMemo(
    () => stakes && !!stakes.filter((stake) => stake.unstakeBlock <= 0n).length,
    [stakes]
  );

  const { writeContract: launchPool, error } =
    useWriteStaqeProtocolLaunchPool();

  console.log("error", error);

  const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setLogoFile(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setLogo(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setImageFile(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setColor("");
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleLogoErc20 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setLogoErc20File(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setLogoErc20(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleLogoErc721 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setLogoErc721File(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setLogoErc721(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleLogoReward = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setLogoRewardFile(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setLogoReward(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleStakeErc20 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStakeErc20(event.target.value ? getAddress(event.target.value) : "");
    if (
      (event.target.value && stakeErc721) ||
      (!event.target.value && !stakeErc721)
    ) {
      setTotalMax("");
    }
  };

  const handleStakeErc721 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStakeErc721(event.target.value ? getAddress(event.target.value) : "");
    if (
      (event.target.value && stakeErc20) ||
      (!event.target.value && !stakeErc20)
    ) {
      setTotalMax("");
    }
  };

  const handleRewardErc20 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRewardErc20(event.target.value ? getAddress(event.target.value) : "");
  };

  const handleTotalMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTotalMax(event.target.value);
  };

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

      return resData && resData.IpfsHash ? "ipfs://" + resData.IpfsHash : "";
    } catch (error) {
      console.log("uploadImage", error);
      return "";
    }
  };

  const actionLaunchPool = async () => {
    if (!logoFile || !imageFile) {
      return "";
    }

    if (!ipfs) {
      const modal: any = document.getElementById("ipfs");
      modal?.showModal();
      return;
    }

    setLoading("Upload Logo Image");
    const logoURI = await uploadImage("Logo", logoFile);
    setLogo(`${GATEWAY_URL}${logoURI.replace(/ipfs:\/\//g, "")}`);

    setLoading("Upload Background Image");
    const backgroundURI = await uploadImage("Image", imageFile);
    setImage(`${GATEWAY_URL}${backgroundURI.replace(/ipfs:\/\//g, "")}`);

    let stakeURI;
    let nftURI;
    let rewardURI;

    if (stakeErc20 && logoErc20File) {
      setLoading("Upload ERC20 Logo");
      stakeURI = await uploadImage("ERC20", logoErc20File);
      setLogoErc20(`${GATEWAY_URL}${stakeURI.replace(/ipfs:\/\//g, "")}`);
    }

    if (stakeErc721 && logoErc721File) {
      setLoading("Upload ERC721 Logo");
      nftURI = await uploadImage("ERC20", logoErc721File);
      setLogoErc721(`${GATEWAY_URL}${nftURI.replace(/ipfs:\/\//g, "")}`);
    }

    if (rewardErc20 && logoRewardFile) {
      setLoading("Upload Reward Logo");
      rewardURI = await uploadImage("Reward", logoRewardFile);
      setLogoReward(`${GATEWAY_URL}${rewardURI.replace(/ipfs:\/\//g, "")}`);
    }

    if (name == "" || description == "" || logoURI == "") {
      console.log("name", name);
      console.log("description", description);
      console.log("logoURI", logoURI);
      console.log("backgroundURI", backgroundURI);
      return "";
    }

    console.log("Staqe:", stakeErc20, stakeErc721, rewardErc20);
    console.log("Info:", infoErc20, infoErc721, infoReward);

    let metadata;

    try {
      const tokens = [];

      if (stakeErc20 && infoErc20 && stakeURI) {
        tokens.push({
          chainId: 1,
          address: stakeErc20,
          symbol: infoErc20?.symbol,
          name: infoErc20?.name,
          decimals: Number(infoErc20?.decimals),
          logoURI: stakeURI,
          tags: ["staqe"],
        });
      }

      if (stakeErc721 && infoErc721 && nftURI) {
        tokens.push({
          chainId: 1,
          address: stakeErc721,
          symbol: infoErc721?.symbol,
          name: infoErc721?.name,
          decimals: 0,
          logoURI: nftURI,
          tags: ["staqe"],
        });
      }

      if (rewardErc20 && infoReward && rewardURI) {
        tokens.push({
          chainId: 1,
          address: rewardErc20,
          symbol: infoReward?.symbol,
          name: infoReward?.name,
          decimals: Number(infoReward?.decimals),
          logoURI: rewardURI,
          tags: ["staqe"],
        });
      }

      console.log("Tokens", tokens);

      const jsonBlob = new Blob(
        [
          JSON.stringify({
            name: name,
            description: description,
            image: logoURI,
            background_color: color.replace("#", ""),
            banner_image: backgroundURI,
            tags: {
              staqe: {
                name: "Staqe Protocol",
                description: "Tokens used to create a pool in Staqe.App",
              },
            },
            tokens,
          }),
        ],
        { type: "application/json" }
      );

      const formData = new FormData();
      formData.append("file", jsonBlob, "filename.json");
      formData.append("pinataMetadata", JSON.stringify({ name }));
      formData.append("pinataOptions", JSON.stringify({ cidVersion: 0 }));

      setLoading("Upload Metadata");
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

      if (resData && resData.IpfsHash) {
        // metadata = `0x${Buffer.from(bs58.decode(resData.IpfsHash)).toString("hex").slice(4)}`;
        metadata = "ipfs://" + resData.IpfsHash;
      }

      console.log(`Get Metadata: ${GATEWAY_URL}${resData.IpfsHash}`);

      setLoading("Get Metadata ...");
      const getMetadata = await fetch(`${GATEWAY_URL}${resData.IpfsHash}`);
      const jsonMetadata = await getMetadata.json();

      console.log("Metadata", resData.IpfsHash, jsonMetadata);

      if (metadata && jsonMetadata && jsonMetadata.name === name) {
        setLoading("Send To Blockchain");
        launchPool({
          args: [
            (stakeErc20 || ZERO_ADDRESS) as `0x${string}`,
            (stakeErc721 || ZERO_ADDRESS) as `0x${string}`,
            (rewardErc20 || ZERO_ADDRESS) as `0x${string}`,
            BigInt(totalMax || "0"),
            metadata,
          ],
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <section className="custom-screen">
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="w-full h-[40rem]">
          <div className="flex flex-col w-full h-full">
            <div
              className="flex items-center text-center justify-center overflow-hidden rounded-2xl w-full h-3/5 relative bg-slate-200/10"
              style={{ backgroundColor: color }}
            >
              {!image && (
                <div className={`absolute ${picker}`} id="color-picker">
                  <HexColorPicker color={color} onChange={setColor} />
                </div>
              )}
              <label
                htmlFor="dropzone-image"
                className="flex flex-col items-center justify-center w-full h-full"
              >
                {image ? (
                  <span
                    className="absolute bg-slate-200/10 inset-0 w-full h-full -z-10"
                    style={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundImage: `url(${image})`,
                    }}
                  ></span>
                ) : (
                  <div className="text-xl px-3 text-center">
                    <span className="link">Click to upload image</span> or{" "}
                    <a
                      className="link"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        setPicker(picker ? "" : "hidden");
                      }}
                    >
                      set background color
                    </a>
                  </div>
                )}
                <input
                  id="dropzone-image"
                  type="file"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
            </div>
            <div className="flex flex-row items-center p-4 mx-6 mb-2 -mt-16 overflow-hidden break-words rounded-2xl backdrop-blur-2xl backdrop-saturate-200 shadow-blur border-0 bg-slate-200/10 w-auto h-1/5">
              <div className="w-auto">
                <div className="bg-slate-200/10 h-24 w-24 mask mask-hexagon-2">
                  <label
                    htmlFor="dropzone-logo"
                    className="flex flex-col items-center justify-center h-24 w-24"
                  >
                    {logo ? (
                      <Image
                        src={logo}
                        width={0}
                        height={0}
                        alt="Pool Image"
                        className="h-24 w-24 mask mask-hexagon-2"
                        priority={true}
                      />
                    ) : (
                      <div className="text-xs px-3 text-center">
                        <span className="link decoration-dotted">
                          Click to upload pool logo
                        </span>
                      </div>
                    )}
                    <input
                      id="dropzone-logo"
                      type="file"
                      className="hidden"
                      onChange={handleLogo}
                    />
                  </label>
                </div>
              </div>
              <div className="w-auto px-3 my-auto">
                <input
                  type="text"
                  placeholder="Type Here Pool Name"
                  className="input input-ghost w-full max-w-xs text-white text-3xl bg-transparent"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div className="flex gap-2 w-auto my-auto ml-auto">
                <div className="bg-slate-200/10 h-12 w-28 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full -mt-44">
        <div className="grid grid-cols-5 grid-rows-3 grid-flow-row gap-4">
          <div className="col-span-3">
            <div className="flex flex-col w-full h-full">
              <label
                htmlFor="input-erc20"
                className="input input-bordered flex items-center gap-2"
              >
                <label
                  htmlFor="dropzone-logo-erc20"
                  className="flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden"
                >
                  {logoErc20 ? (
                    <Image
                      src={logoErc20}
                      width={0}
                      height={0}
                      alt="Token Logo"
                      className="w-14 h-14 rounded-full shadow-md"
                      priority={true}
                    />
                  ) : (
                    <div className="text-xs px-3 text-center">
                      <span className="link decoration-dotted">
                        upload token logo
                      </span>
                    </div>
                  )}
                  <input
                    id="dropzone-logo-erc20"
                    type="file"
                    className="hidden"
                    onChange={handleLogoErc20}
                  />
                </label>
                <span className="text-neutral-500 text-xs text-center">
                  Stake <br />
                  ERC20
                </span>
                <input
                  id="input-erc20"
                  type="text"
                  className="grow"
                  placeholder="0x..."
                  value={stakeErc20}
                  onChange={handleStakeErc20}
                />
                {stakeErc20 && !stakeErc721 ? (
                  <span className="badge badge-warning">
                    Max:{" "}
                    <span
                      className="link ml-2"
                      onClick={() => {
                        const modal: any = document.getElementById("total-max");
                        modal?.showModal();
                      }}
                    >
                      {totalMax || `Unlimited`}
                    </span>
                  </span>
                ) : stakeErc20 ? (
                  <span className="badge badge-warning">
                    Max: <span className="ml-2">Unlimited</span>
                  </span>
                ) : (
                  <span className="badge badge-warning">
                    <span
                      className="link decoration-dotted underline-offset-2 hover:scale-110"
                      onClick={() => {
                        const modal: any =
                          document.getElementById("create-erc20");
                        modal?.showModal();
                      }}
                    >
                      CREATE ERC20
                    </span>
                  </span>
                )}
                {!stakeErc20 && stakeErc721 && (
                  <span className="badge badge-info">Optional</span>
                )}
              </label>
            </div>
          </div>
          <div className="col-span-2 row-span-3">
            <textarea
              className="textarea textarea-bordered w-full h-full"
              placeholder="Type here Description"
              value={description}
              onChange={handleDescription}
            ></textarea>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col w-full h-full">
              <label
                htmlFor="input-erc721"
                className="input input-bordered flex items-center gap-2"
              >
                <label
                  htmlFor="dropzone-logo-erc721"
                  className="flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden"
                >
                  {logoErc721 ? (
                    <Image
                      src={logoErc721}
                      width={0}
                      height={0}
                      alt="Token Logo"
                      className="w-14 h-14 rounded-full shadow-md"
                      priority={true}
                    />
                  ) : (
                    <div className="text-xs px-3 text-center">
                      <span className="link decoration-dotted">
                        upload token logo
                      </span>
                    </div>
                  )}
                  <input
                    id="dropzone-logo-erc721"
                    type="file"
                    className="hidden"
                    onChange={handleLogoErc721}
                  />
                </label>
                <span className="text-neutral-500 text-xs text-center">
                  Stake <br />
                  ERC721
                </span>
                <input
                  id="input-erc721"
                  type="text"
                  className="grow"
                  placeholder="0x..."
                  value={stakeErc721}
                  onChange={handleStakeErc721}
                />
                {stakeErc721 && !stakeErc20 ? (
                  <span className="badge badge-warning">
                    Max:{" "}
                    <span
                      className="link ml-2"
                      onClick={() => {
                        const modal: any = document.getElementById("total-max");
                        modal?.showModal();
                      }}
                    >
                      {totalMax || `Unlimited`}
                    </span>
                  </span>
                ) : stakeErc721 ? (
                  <span className="badge badge-warning">
                    Max: <span className="ml-2">Unlimited</span>
                  </span>
                ) : (
                  <span className="badge badge-warning">
                    <span
                      className="link decoration-dotted underline-offset-2 hover:scale-110"
                      onClick={() => {
                        const modal: any =
                          document.getElementById("create-erc721");
                        modal?.showModal();
                      }}
                    >
                      CREATE ERC721
                    </span>
                  </span>
                )}
                {!stakeErc721 && stakeErc20 && (
                  <span className="badge badge-info">Optional</span>
                )}
              </label>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col w-full h-full">
              <label
                htmlFor="input-reward"
                className="input input-bordered flex items-center gap-2"
              >
                <label
                  htmlFor="dropzone-logo-reward"
                  className="flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden"
                >
                  {logoReward ? (
                    <Image
                      src={logoReward}
                      width={0}
                      height={0}
                      alt="Token Logo"
                      className="w-14 h-14 rounded-full shadow-md"
                      priority={true}
                    />
                  ) : (
                    <div className="text-xs px-3 text-center">
                      <span className="link decoration-dotted">
                        upload token logo
                      </span>
                    </div>
                  )}
                  <input
                    id="dropzone-logo-reward"
                    type="file"
                    className="hidden"
                    onChange={handleLogoReward}
                  />
                </label>
                <span className="text-neutral-500 text-xs text-center">
                  Reward <br />
                  ERC20
                </span>
                <input
                  id="input-reward"
                  type="text"
                  className="grow"
                  placeholder="0x..."
                  value={rewardErc20}
                  onChange={handleRewardErc20}
                />
                <span className="badge badge-info">Optional</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full my-4">
        <button
          className={`btn btn-outline btn-block btn-lg btn-success ${loading && "animate-pulse"}`}
          onClick={
            hasGenesis
              ? actionLaunchPool
              : () => {
                  const modal: any = document.getElementById("not-genesis");
                  modal?.showModal();
                }
          }
        >
          {loading || "Launch Pool"}
        </button>
      </div>
      <dialog id="total-max" className="modal">
        <div className="modal-box">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">
                Total Max Amount Tokens For Staking
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here Total Max"
              className="input input-bordered w-full"
              value={totalMax}
              onChange={handleTotalMax}
            />
          </label>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Save</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="ipfs" className="modal">
        <div className="modal-box">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">
                A Pinata JWT key is required to upload metadata to IPFS. Please
                register at pinata.cloud and insert the JWT key. This is
                completely free of charge.
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here pinata JWT"
              className="input input-bordered w-full"
              value={ipfs}
              onChange={(event) => {
                setIpfs(event.currentTarget.value);
              }}
            />
          </label>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Save</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="create-erc20" className="modal">
        <div className="modal-box">
          <Create
            toqen={toqen}
            standart="ERC20"
            dark
            steps={false}
            handle={({ data, status }) => {
              console.log(data, status);
            }}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="create-erc721" className="modal">
        <div className="modal-box">
          <Create
            toqen={toqen}
            standart="ERC721"
            dark
            steps={false}
            handle={({ data, status }) => {
              console.log(data, status);
            }}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="not-genesis" className="modal">
        <div className="modal-box">
          Stake NFT Genesis is required to create new pools. Please create new
          NFT Genesis and Stake on the{" "}
          <Link href="/pool?id=0" target="_blank" className="btn btn-xs">
            Genesis page
          </Link>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default LaunchPool;
