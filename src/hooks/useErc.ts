import { erc20Abi, erc721Abi, staqeProtocolAddress } from "@/src/generated";
import { ITokenFull } from "@/src/interfaces";
import { useEffect, useMemo, useState } from "react";
import { useChainId, useReadContracts } from "wagmi";
import { ZERO_ADDRESS } from "../constants";

export function useErc20(address: `0x${string}` | undefined, account: `0x${string}` | undefined) {
  const chainId = useChainId();
  const { [chainId]: spender } = staqeProtocolAddress as any;

  const [token, setToken] = useState<ITokenFull | undefined>();

  const contracts = useMemo(() => {
    if (!address || address === ZERO_ADDRESS || !account || !spender) return undefined;

    return [
      {
        address,
        abi: erc20Abi,
        functionName: "name",
      },
      {
        address,
        abi: erc20Abi,
        functionName: "symbol",
      },
      {
        address,
        abi: erc20Abi,
        functionName: "decimals",
      },
      {
        address,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [account]
      },
      {
        address,
        abi: erc20Abi,
        functionName: "allowance",
        args: [account, spender]
      },
    ]
  }, [address, account, spender]);

  const { data, refetch }: any = useReadContracts({
    allowFailure: false,
    contracts
  });

  useEffect(() => {
    if (!data) return;
    const [name, symbol, decimals, balance, allowance] = data;
    const tokenAddress = address ?? ZERO_ADDRESS;
    const isApproved = false;
    setToken({ tokenAddress, name, symbol, decimals, balance, isApproved, allowance });
  }, [data])

  return [token, refetch];
}

export function useErc721(address: `0x${string}` | undefined, account: `0x${string}` | undefined) {
  const chainId = useChainId();
  const { [chainId]: spender } = staqeProtocolAddress as any;

  const [token, setToken] = useState<ITokenFull | undefined>();

  const contracts = useMemo(() => {
    if (!address || address === ZERO_ADDRESS || !account || !spender) return undefined;

    return [
      {
        address,
        abi: erc721Abi,
        functionName: "name",
      },
      {
        address,
        abi: erc721Abi,
        functionName: "symbol",
      },
      {
        address,
        abi: erc721Abi,
        functionName: "balanceOf",
        args: [account]
      },
      {
        address,
        abi: erc721Abi,
        functionName: "isApprovedForAll",
        args: [account, spender]
      },
    ]
  }, [address, account, spender]);

  const { data, refetch }: any = useReadContracts({
    allowFailure: false,
    contracts
  });

  useEffect(() => {
    if (!data) return;
    const [name, symbol, balance, isApproved] = data;
    const tokenAddress = address ?? ZERO_ADDRESS;
    const allowance = 0n;
    setToken({ tokenAddress, name, symbol, decimals: 0n, balance, isApproved, allowance });
  }, [data])

  return [token, refetch]
};