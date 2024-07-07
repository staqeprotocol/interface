import { Alert } from "@/src/components/UI/Pool/Interaction/Approve/Alert";
import { ZERO_ADDRESS } from "@/src/constants";
import { useWriteStaqeProtocolClaimRewards } from "@/src/generated";
import {
  AvalancheBadge,
  BinanceSmartChainBadge,
  EthereumBadge,
  PolygonBadge,
} from "cryptocons";
import { useEffect, useState } from "react";
import { PiPercentDuotone } from "react-icons/pi";
import { useAccount, useChainId } from "wagmi";

const chainMap: any = {
  80002: {
    selector: "16281711391670634445",
    name: "Polygon",
    icon: <PolygonBadge className="w-10 h-10" />,
  },
  43113: {
    selector: "14767482510784806043",
    name: "Avalanche",
    icon: <AvalancheBadge className="w-10 h-10" />,
  },
  97: {
    selector: "13264668187771770619",
    name: "BNB Chain",
    icon: <BinanceSmartChainBadge className="w-10 h-10" />,
  },
  11155111: {
    selector: "16015286601757825753",
    name: "Ethereum Sepolia",
    icon: <EthereumBadge className="w-10 h-10" />,
  },
};

export const RewardDialog = ({
  poolId,
  rewardId,
  handle,
}: {
  poolId: bigint;
  rewardId: bigint;
  handle: () => void;
}) => {
  const chainId = useChainId();
  const { address: accountAddress = ZERO_ADDRESS } = useAccount();
  const [rewardAddress, setRewardAddress] = useState(accountAddress);
  const [rewardChain, setRewardChain] = useState(null);

  const [selectedChain, setSelectedChain] = useState(null);

  const handleChainSelect = (key: any) => {
    setSelectedChain(key);
    setRewardChain(chainMap[key].selector);
  };

  const id = (rewardId + 1n).toString();

  const { writeContract, status: offChain } =
    useWriteStaqeProtocolClaimRewards();

  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState(
    `Set address to receive reward #${id}`
  );

  useEffect(() => {
    if (offChain === "pending") {
      setMessage("Awaiting wallet confirmation...");
      setStatus(0.5);
      setTimeout(() => {
        setMessage("Confirm the transaction in your wallet.");
        setStatus(1);
      }, 2_000);
    }
    if (offChain === "success") {
      setMessage("Transaction submitted. Please wait...");
      setStatus(2);
      setTimeout(() => {
        setMessage("Check balance after 1 min.");
        setStatus(0);
        handle();
      }, 5_000);
    }
    if (offChain === "error") {
      setMessage("Error: Transaction failed.");
      setStatus(-1);
      setTimeout(() => {
        setMessage(`Set address to receive reward #${id}`);
        setStatus(0);
      }, 5_000);
    }
  }, [offChain]);

  return (
    <dialog id={`reward-${id}`} className="modal">
      <div className="modal-box">
        <div className="w-full flex flex-col gap-2 justify-center justify-items-center">
          <Alert status={status} message={message} />
          <div className="w-full mb-2">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Reward Address"
                spellCheck={false}
                value={rewardAddress}
                onChange={(e: any) => {
                  setRewardAddress(e.currentTarget.value);
                }}
              />
            </label>
            {(chainId === 80002 || chainId === 43113 || chainId === 97) && (
              <div className="w-full">
                <div className="flex flex-col space-y-1">
                  {Object.keys(chainMap).map((key) => {
                    const chain = chainMap[key];
                    return (
                      <div
                        key={key}
                        className={`flex items-center space-x-2 p-2 border-0 rounded-lg hover:bg-gray-900 cursor-pointer ${
                          selectedChain === key ? "bg-green-900" : ""
                        }`}
                        onClick={() => handleChainSelect(key)}
                      >
                        {chain.icon}
                        <span>{chain.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="w-full">
            <a
              className={`btn btn-block text-2xl overflow-hidden relative btn-success ${status > 0 && status < 3 ? "animate-pulse" : ""}`}
              onClick={() => {
                writeContract({
                  args: rewardChain
                    ? [[poolId], [[rewardId]], rewardAddress, rewardChain]
                    : [[poolId], [[rewardId]], rewardAddress],
                });
              }}
            >
              {status > 0 && status < 3 ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : status === 3 ? (
                `Reward Claimed`
              ) : (
                `Claim Reward`
              )}
              <PiPercentDuotone className="absolute inset-y-0 right-0 text-8xl -top-6 opacity-40" />
            </a>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
