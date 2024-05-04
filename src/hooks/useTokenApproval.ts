import { UINT256_MAX, ZERO_ADDRESS } from "@/src/constants";
import {
  staqeProtocolAddress,
  useWriteErc20Approve,
  useWriteErc721SetApprovalForAll,
} from "@/src/generated";
import { IToken } from "@/src/interfaces";
import { useCallback, useMemo } from "react";
import { useChainId, useWaitForTransactionReceipt } from "wagmi";

export function useTokenApproval(token: IToken | undefined) {
  const chainId = useChainId();
  const { [chainId]: address } = staqeProtocolAddress as any;

  const isERC20 = useMemo(() => BigInt(token?.decimals ?? 0n) > 0n, [token]);
  const {
    data: hashERC20,
    writeContract: writeContractERC20,
    status: offChainERC20,
  } = useWriteErc20Approve();
  const {
    data: hashERC721,
    writeContract: writeContractERC721,
    status: offChainERC721,
  } = useWriteErc721SetApprovalForAll();
  const { status: onChainERC20 } = useWaitForTransactionReceipt({
    query: { enabled: !!hashERC20, refetchInterval: 10_000 },
    hash: hashERC20,
  });
  const { status: onChainERC721 } = useWaitForTransactionReceipt({
    query: { enabled: !!hashERC721, refetchInterval: 10_000 },
    hash: hashERC721,
  });

  const handleApprove = useCallback(() => {
    if (!token) return;

    if (isERC20) {
      writeContractERC20({
        address: token?.tokenAddress || ZERO_ADDRESS,
        // @ts-ignore
        args: [address, token?.balance || UINT256_MAX],
      });
    } else {
      writeContractERC721({
        address: token?.tokenAddress || ZERO_ADDRESS,
        // @ts-ignore
        args: [address, true],
      });
    }
  }, [token, isERC20, address, writeContractERC20, writeContractERC721]);

  return {
    handleApprove,
    offChain: isERC20 ? offChainERC20 : offChainERC721,
    onChain: isERC20 ? onChainERC20 : onChainERC721,
  };
}
