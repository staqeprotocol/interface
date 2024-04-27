import { UINT256_MAX, ZERO_ADDRESS } from "@/src/constants";
import {
    staqeProtocolAddress,
    useWriteErc20Approve,
    useWriteErc721SetApprovalForAll
} from "@/src/generated";
import { IToken } from "@/src/interfaces";
import { useCallback, useMemo } from "react";
import { useChainId, useWaitForTransactionReceipt } from "wagmi";

export function useTokenApproval(token: IToken | undefined) {
    const chainId = useChainId();
    const { [chainId]: address } = staqeProtocolAddress as any;

    const isERC20 = useMemo(() => BigInt(token?.decimals ?? 0n) > 0n, [token]);
    const {
        data: hash,
        writeContract,
        status: offChain,
    } = isERC20 ? useWriteErc20Approve() : useWriteErc721SetApprovalForAll();
    const { status: onChain } = useWaitForTransactionReceipt({
        query: { enabled: !!hash, refetchInterval: 10_000 },
        hash,
    });

    const handleApprove = useCallback(() => {
        if (!token) return;

        writeContract({
            address: token?.tokenAddress || ZERO_ADDRESS,
            // @ts-ignore
            args: [address, isERC20 ? token?.balance || UINT256_MAX : true],
        });
    }, [token]);

    return { handleApprove, offChain, onChain };
}