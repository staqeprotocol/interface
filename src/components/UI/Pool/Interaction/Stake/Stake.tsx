import { useCallback, useEffect, useMemo, useState } from "react";
import { PiCoinsDuotone } from "react-icons/pi";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";

import { ZERO_ADDRESS as ZERO } from "@/src/constants";

import { ApproveDialog } from "@/src/components/UI/Pool/Interaction/Approve/ApproveDialog";

import { useWriteStaqeProtocolStake } from "@/src/generated";

import { useErc20, useErc721 } from "@/src/hooks/useErc";
import { usePoolData } from "@/src/hooks/usePools";
import { useTokenAmount } from "@/src/hooks/useTokenAmount";
import { useTokenBalance } from "@/src/hooks/useTokenBalance";
import { Mint } from "@toqen/react";
import { MdOutlineGeneratingTokens } from "react-icons/md";

export const Stake = () => {
  const { address: accountAddress = ZERO } = useAccount();

  const { pool, refetch } = usePoolData();

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
  const max = useMemo(() => {
    if (!pool || !pool.totalMax) return;

    let max = { big: 0n, str: "" };

    if (pool.stakeERC20.tokenAddress !== ZERO) {
      const scaledAmount =
        (pool.totalMax - pool.totalStakedERC20) * BigInt(1_000);
      const rawAmount = scaledAmount / 10n ** pool.stakeERC20.decimals;
      const amount = Number(rawAmount) / 1_000;
      if (amount > 1_000) {
        max.big = pool.totalMax - pool.totalStakedERC20;
        max.str = amount.toLocaleString("en-US");
      } else {
        max.big = pool.totalMax - pool.totalStakedERC20;
        max.str = amount.toFixed(3).replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
      }
    }
    if (pool.stakeERC721.tokenAddress !== ZERO) {
      max.big = pool.totalMax - pool.totalStakedERC721;
      max.str = (pool.totalMax - pool.totalStakedERC721).toString();
    }

    return max;
  }, [pool]);

  const [mint, setMint] = useState(<></>);

  const [onChainLoading, setonChainLoading] = useState(false);
  const [error, setError] = useState(0);
  const [isERC721, setIsERC721] = useState(!!STK === !!NFT ? undefined : !!NFT);
  const [stakeAmount, setStakeAmount, handleStakeAmount] = useTokenAmount(
    pool?.stakeERC20.decimals
  );
  const [stakeId, setStakeId, handleStakeId] = useTokenAmount(
    pool?.stakeERC721.decimals
  );
  const [args, setAgrs] = useState<[bigint, bigint, bigint] | undefined>();

  const [erc20, refetchErc20] = useErc20(
    pool?.stakeERC20.tokenAddress,
    accountAddress
  );
  const [erc721, refetchErc721] = useErc721(
    pool?.stakeERC721.tokenAddress,
    accountAddress
  );

  const erc20Balance = useTokenBalance(erc20) as string;
  const erc721Balance = (erc721?.balance ?? 0).toString() as string;

  const [erc20NeedApprove, setErc20NeedApprove] = useState<
    boolean | undefined
  >();
  const [erc721NeedApprove, setErc721NeedApprove] = useState<
    boolean | undefined
  >();

  useEffect(() => {
    if (stakeAmount.big > 0n) {
      if (
        stakeAmount.big > (erc20?.allowance ?? 0n) &&
        stakeAmount.big <= (erc20?.balance ?? 0n)
      ) {
        setErc20NeedApprove(true);
      }
    } else {
      setErc20NeedApprove(undefined);
    }
    if (stakeId.big > 0n) {
      if (!erc721?.isApproved) {
        setErc721NeedApprove(true);
      }
    } else {
      setErc721NeedApprove(undefined);
    }
  }, [stakeAmount, stakeId, erc20, erc721]);

  useEffect(() => {
    if (
      !pool ||
      erc20NeedApprove ||
      erc721NeedApprove ||
      (stakeAmount.big <= 0n && stakeId.big <= 0n)
    )
      return;
    setAgrs([BigInt(pool.id), stakeAmount.big, stakeId.big]);
  }, [erc20NeedApprove, erc721NeedApprove]);

  useEffect(() => {
    console.log("args", args);
    if (args) writeContract({ args }, { onSuccess });
  }, [args]);

  const {
    writeContract,
    status,
    error: err,
    data: hash,
  } = useWriteStaqeProtocolStake();
  const { status: onChain } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (onChain === "success") {
      setonChainLoading(false);
      setTimeout(() => refetch(), 100);
    }
  }, [onChain]);

  console.log("err", err);

  const modal = (
    tokenAddress: `0x${string}` | undefined,
    close: boolean = false
  ) => {
    const modal: any = document.getElementById(`approve-${tokenAddress}`);
    if (close) modal?.close();
    if (!close) modal?.showModal();
  };

  const onSuccess = () => {
    setIsERC721(undefined);
    setStakeAmount(undefined);
    setStakeId(undefined);
    setonChainLoading(true);
  };

  const handleStake = () => {
    if (!pool) {
      return;
    }
    if (isERC721 === undefined) {
      setError(1);
      setTimeout(() => setError(0), 1_000);
      return;
    }
    if (stakeAmount.big <= 0n && stakeId.big <= 0n) {
      setError(2);
      setTimeout(() => setError(0), 1_000);
      return;
    }
    if (stakeAmount.big > 0n && stakeAmount.big > (erc20?.balance ?? 0n)) {
      setError(3);
      setTimeout(() => setError(0), 1_000);
      return;
    }
    if (stakeId.big > 0n && (erc721?.balance ?? 0n) <= 0n) {
      setError(4);
      setTimeout(() => setError(0), 1_000);
      return;
    }
    if (
      max &&
      max.big > 0n &&
      max.big - (stakeAmount.big || (stakeId.big > 0n ? 1n : 0n)) < 0n
    ) {
      setError(5);
      setTimeout(() => setError(0), 1_000);
      return;
    }

    if (erc721NeedApprove) {
      modal(erc721?.tokenAddress);
    } else if (erc20NeedApprove) {
      modal(erc20?.tokenAddress);
    } else {
      setAgrs([BigInt(pool.id), stakeAmount.big, stakeId.big]);
    }
  };

  const handleApproveErc20 = useCallback(
    (isApproved: boolean) => {
      modal(erc20?.tokenAddress, isApproved);
      setErc20NeedApprove(false);
      if (erc721NeedApprove) {
        modal(erc721?.tokenAddress);
      }
    },
    [erc20, erc721, erc721NeedApprove]
  );

  const handleApproveErc721 = useCallback(
    (isApproved: boolean) => {
      modal(erc721?.tokenAddress, isApproved);
      setErc721NeedApprove(false);
      if (erc20NeedApprove) {
        modal(erc20?.tokenAddress);
      }
    },
    [erc20, erc721, erc20NeedApprove]
  );

  return (
    <div className="flex flex-col justify-evenly gap-2 rounded-2xl bg-base-200 p-4 h-full">
      <div className="flex-none w-full">
        <div
          role="tablist"
          className={`flex items-center justify-center tabs tabs-boxed border-2 border-base-200 ${error === 1 ? `border-pink-700` : ``}`}
        >
          {STK && (
            <>
              {!NFT && <div className="mx-2 opacity-15">Stake </div>}
              <button
                role="tab"
                className={`tab h-full text-l px-4 py-2 ${isERC721 === false ? `text-white bg-neutral-700` : `bg-slate-700/10 hover:bg-slate-700/25 text-gray-500`}`}
                onClick={() => {
                  setIsERC721(false);
                }}
              >
                {STK}
              </button>
              {!NFT && <div className="mx-2 opacity-15">Tokens</div>}
            </>
          )}
          {STK && NFT && <div className="mx-2 opacity-15">and</div>}
          {NFT && (
            <>
              {!STK && <div className="mx-2 opacity-15">Stake </div>}
              <button
                role="tab"
                className={`tab h-full text-l px-4 py-2 ${isERC721 === true ? `text-white bg-neutral-700` : `bg-slate-700/10 hover:bg-slate-700/25 text-gray-500`}`}
                onClick={() => {
                  setIsERC721(true);
                }}
              >
                {NFT}
              </button>
              {!STK && <div className="mx-2 opacity-15">NFT</div>}
            </>
          )}
        </div>
      </div>
      {isERC721 === undefined ? (
        <div className="flex-1 content-center">
          <div className="text-sm text-neutral-600 w-full text-center px-4">
            <div>
              {onChainLoading ? (
                <span className="loading loading-dots loading-lg"></span>
              ) : (
                <MdOutlineGeneratingTokens className="text-7xl w-full text-center" />
              )}
            </div>
            It is possible to stake ERC20 tokens and ERC721 NFT in one stake,
            just select the token symbol and set the amount or NFT ID.
          </div>
        </div>
      ) : (
        <div className="flex-1 content-center w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-neutral-600">
                Stake Token{" "}
                {isERC721 !== undefined && isERC721 ? `ID` : `Amount`}
              </span>
              <span
                className={`label-text-alt ${error === 3 || error === 4 ? `text-pink-700` : `text-neutral-600`}`}
              >
                Balance:{" "}
                {isERC721 !== undefined &&
                  (isERC721 ? erc721Balance : erc20Balance)}
              </span>
            </div>
            <label
              className={`input input-bordered flex items-center gap-2 border-2 ${error === 2 || error === 5 ? `border-pink-700` : ``}`}
            >
              <input
                type="text"
                className="grow placeholder:text-neutral-700"
                placeholder={
                  isERC721 !== undefined ? (isERC721 ? "1" : "123.456") : ""
                }
                value={
                  isERC721 !== undefined
                    ? isERC721
                      ? stakeId.str
                      : stakeAmount.str
                    : ""
                }
                onChange={
                  isERC721 !== undefined
                    ? isERC721
                      ? handleStakeId
                      : handleStakeAmount
                    : undefined
                }
              />
              {isERC721 === false && (
                <span
                  className={`badge badge-ghost text-neutral-600 hover:cursor-pointer hover:bg-neutral-800 ${error === 5 ? `bg-pink-700 text-white` : ``}`}
                  onClick={() => {
                    if (max && erc20) {
                      setStakeAmount(
                        erc20.balance > max.big ? max.str : erc20Balance
                      );
                    } else {
                      setStakeAmount(erc20Balance);
                    }
                  }}
                >
                  MAX
                </span>
              )}
            </label>
            <div className="label whitespace-nowrap overflow-hidden text-ellipsis text-center">
              <span className="label-text-alt text-neutral-600 w-full">
                {isERC721 ? erc721?.name : erc20?.name}{" "}
                <button
                  className="btn btn-xs"
                  onClick={() => {
                    const modal: any = document.getElementById("modal");
                    setMint(
                      <Mint
                        address={(isERC721 ? erc721 : erc20)?.tokenAddress}
                        dark
                        handle={({ data, status }) => {
                          console.log("data", data);
                          console.log("status", status);
                          if (status === "success") {
                            refetchErc20();
                            refetchErc721();
                            refetch();
                          }
                        }}
                      />
                    );
                    modal?.showModal();
                  }}
                >
                  Mint
                </button>
              </span>
            </div>
          </label>
        </div>
      )}
      <div className="flex-none w-full">
        <a
          className={`btn btn-block text-2xl overflow-hidden relative btn-success ${status === "pending" && `animate-pulse`} ${status === "success" && `btn-disabled`}`}
          onClick={() => handleStake()}
        >
          {status === "pending" || onChainLoading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            `Stake Now`
          )}
          <PiCoinsDuotone className="absolute inset-y-0 right-0 text-8xl -top-6 opacity-40" />
        </a>
        {erc20NeedApprove && (
          <ApproveDialog token={erc20} handle={handleApproveErc20} />
        )}
        {erc721NeedApprove && (
          <ApproveDialog token={erc721} handle={handleApproveErc721} />
        )}
      </div>
      <dialog id="modal" className="modal w-full">
        <div className="modal-box m-0 p-0">
          <div className="relative">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-0">
                ✕
              </button>
            </form>
            <h3 className="text-lg font-extrabold ml-4 my-4">Mint</h3>
            <hr className="border-0 border-slate-200 dark:border-slate-700" />
          </div>
          <div className="flex justify-center items-center m-4 p-4 mt-1 pt-1">
            {mint}
          </div>
        </div>
      </dialog>
    </div>
  );
};
