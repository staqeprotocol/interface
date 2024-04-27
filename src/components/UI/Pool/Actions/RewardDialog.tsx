import { useEffect, useState } from "react";
import { Alert } from "@/src/components/UI/Pool/Interaction/Approve/Alert";
import { useWriteStaqeProtocolClaimRewards } from "@/src/generated";
import { ZERO_ADDRESS } from "@/src/constants";
import { useAccount } from "wagmi";
import { PiPercentDuotone } from "react-icons/pi";

export const RewardDialog = ({
  poolId,
  rewardId,
  handle,
}: {
  poolId: bigint;
  rewardId: bigint;
  handle: () => void;
}) => {
  const { address: accountAddress = ZERO_ADDRESS } = useAccount();
  const [rewardAddress, setRewardAddress] = useState(accountAddress);

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
        <div className="grid grid-rows-3 gap-4 items-center w-full">
          <Alert status={status} message={message} />
          <div className="w-full">
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
          </div>
          <div className="w-full">
            <a
              className={`btn btn-block text-2xl overflow-hidden relative btn-success ${status > 0 && status < 3 ? "animate-pulse" : ""}`}
              onClick={() => {
                writeContract({
                  args: [[poolId], [[rewardId]], rewardAddress],
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
