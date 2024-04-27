import { useCallback, useMemo, useState } from "react";
import { PiCoinsDuotone } from "react-icons/pi";
import { useAccount } from "wagmi";

import { ZERO_ADDRESS as ZERO } from "@/src/constants";

import { ApproveDialog } from "@/src/components/UI/Pool/Interaction/Approve/ApproveDialog";
import { Settings } from "@/src/components/UI/Pool/Interaction/Reward/Settings";

import { useWriteStaqeProtocolAddReward } from "@/src/generated";

import { useErc20 } from "@/src/hooks/useErc";
import { usePoolData } from "@/src/hooks/usePools";
import { useTokenAmount } from "@/src/hooks/useTokenAmount";
import { useTokenBalance } from "@/src/hooks/useTokenBalance";
import { MdOutlineGeneratingTokens } from "react-icons/md";

export const Reward = () => {
  const { address: accountAddress = ZERO } = useAccount();

  const { pool } = usePoolData();

  const STK = useMemo(
    () =>
      (pool?.stakeERC20.tokenAddress ?? ZERO) !== ZERO
        ? pool?.stakeERC20.symbol
        : undefined,
    [pool]
  );
  const NFT = useMemo(
    () =>
      (pool?.stakeERC721.tokenAddress ?? ZERO) !== ZERO
        ? pool?.stakeERC721.symbol
        : undefined,
    [pool]
  );
  const rewardToken = useMemo(
    () =>
      (pool?.rewardToken.tokenAddress ?? ZERO) !== ZERO
        ? pool?.rewardToken.tokenAddress
        : undefined,
    [pool]
  );

  const [error, setError] = useState(0);
  const [isERC721, setIsERC721] = useState(!!STK === !!NFT ? undefined : !!NFT);
  const [afterBlocks, setAfterBlocks] = useState<number | undefined>();
  const [tokenAddress, setTokenAddress] = useState<`0x${string}` | undefined>(
    rewardToken
  );
  const [token] = useErc20(tokenAddress, accountAddress);
  const [tokenAmount, setTokenAmount, handleTokenAmount] = useTokenAmount(
    token?.decimals
  );
  const tokenBalance = useTokenBalance(token) as string;

  const { writeContract, status } = useWriteStaqeProtocolAddReward();

  const handleReward = useCallback(
    (isApproved = false) => {
      if (!pool) {
        return;
      }
      if (isERC721 === undefined) {
        setError(1);
        setTimeout(() => setError(0), 1_000);
        return;
      }
      if (!tokenAmount || tokenAmount.big <= 0n) {
        setError(2);
        setTimeout(() => setError(0), 1_000);
        return;
      }
      if (!tokenAddress || tokenAddress === ZERO) {
        setError(3);
        setTimeout(() => setError(0), 1_000);
        return;
      }
      if (!tokenAmount || !token || tokenAmount.big > token.balance) {
        setError(4);
        setTimeout(() => setError(0), 1_000);
        return;
      }

      const modal: any = document.getElementById(`approve-${tokenAddress}`);
      if (!isApproved) return modal?.showModal();
      modal?.close();

      writeContract(
        {
          args: [
            BigInt(pool.id),
            rewardToken ?? tokenAddress,
            tokenAmount.big,
            BigInt(afterBlocks ?? 0),
            isERC721,
          ],
        },
        {
          onSuccess: () => {
            setTokenAddress(undefined);
            setIsERC721(undefined);
            setTokenAmount(undefined);
            setAfterBlocks(undefined);
          },
        }
      );
    },
    [pool, tokenAddress, isERC721, afterBlocks, tokenAmount]
  );

  return (
    <div className="flex flex-col justify-evenly gap-2 rounded-2xl bg-base-200 p-4 h-full">
      <div className="flex-none w-full">
        <div
          role="tablist"
          className={`flex items-center justify-center tabs tabs-boxed border-2 border-base-200 ${error === 1 ? `border-pink-700` : ``}`}
        >
          <div className="mx-2 opacity-15">For</div>
          {STK && (
            <button
              role="tab"
              className={`tab h-full text-l px-4 py-2 ${isERC721 === false ? `text-white bg-neutral-700` : `bg-slate-700/10 hover:bg-slate-700/25 text-gray-500`}`}
              onClick={() => {
                setIsERC721(false);
              }}
            >
              {STK}
            </button>
          )}
          {STK && NFT && <div className="mx-2 opacity-15">or</div>}
          {NFT && (
            <button
              role="tab"
              className={`tab h-full text-l px-4 py-2 ${isERC721 === true ? `text-white bg-neutral-700` : `bg-slate-700/10 hover:bg-slate-700/25 text-gray-500`}`}
              onClick={() => {
                setIsERC721(true);
              }}
            >
              {NFT}
            </button>
          )}
          <div className="mx-2 opacity-15">Stakers</div>
        </div>
      </div>
      {isERC721 === undefined ? (
        <div className="flex-1 content-center">
          <div className="text-sm text-neutral-600 w-full text-center px-4">
            <div>
              <MdOutlineGeneratingTokens className="text-7xl w-full text-center" />
            </div>
            Choose who gets the reward, ERC20 or ERC721 Stackers, simply select
            the token symbol
            {!tokenAddress && `, set the token address`} and the reward amount.
          </div>
        </div>
      ) : (
        <div className="flex-1 content-center w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-neutral-600">
                Reward Token Amount
              </span>
              <span
                className={`label-text-alt ${error === 4 ? `text-pink-700` : `text-neutral-600`}`}
              >
                Balance: {tokenBalance}
              </span>
            </div>
            <label
              className={`input input-bordered flex items-center gap-2 border-2 ${error === 2 ? `border-pink-700` : ``}`}
            >
              <input
                type="text"
                className="grow placeholder:text-neutral-700"
                placeholder="123.456"
                value={tokenAmount?.str}
                onChange={handleTokenAmount}
              />
              {tokenBalance !== "0" && (
                <span
                  className="badge badge-ghost text-neutral-600 hover:cursor-pointer hover:bg-neutral-800"
                  onClick={() => {
                    setTokenAmount(tokenBalance);
                  }}
                >
                  MAX
                </span>
              )}
            </label>
            <div className="label">
              {tokenAddress ? (
                <span className="label-text-alt text-neutral-600">
                  Token{" "}
                  <span className="bg-neutral-700 text-white py-1 px-2 rounded-md">
                    {token?.symbol}
                  </span>
                </span>
              ) : (
                <span
                  className={`label-text-alt link underline underline-offset-2 decoration-dotted ${error === 3 ? `text-pink-700` : `text-neutral-600`}`}
                  onClick={() => {
                    const settings: any =
                      document?.getElementById("reward-settings");
                    settings?.showModal();
                  }}
                >
                  Set Token Address
                </span>
              )}
              <span
                className="label-text-alt text-neutral-600 link underline underline-offset-2 decoration-dotted"
                onClick={() => {
                  const settings: any =
                    document?.getElementById("reward-settings");
                  settings?.showModal();
                }}
              >
                {!afterBlocks
                  ? `Set access to rewards`
                  : `Access to reward after ${afterBlocks} blocks`}
              </span>
            </div>

            <Settings
              rewardToken={rewardToken}
              handle={(settings) => {
                setAfterBlocks(settings.afterBlocks);
                setTokenAddress(settings.tokenAddress);
              }}
            />
          </label>
        </div>
      )}
      <div className="flex-none w-full">
        <a
          className={`btn btn-block text-2xl overflow-hidden relative btn-success ${status === "pending" && `animate-pulse`} ${status === "success" && `btn-disabled`}`}
          onClick={() => handleReward(!!token?.isApproved)}
        >
          {status === "pending" ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            `Add Reward`
          )}
          <PiCoinsDuotone className="absolute inset-y-0 right-0 text-8xl -top-6 opacity-40" />
        </a>
        <ApproveDialog token={token} handle={handleReward} />
      </div>
    </div>
  );
};
