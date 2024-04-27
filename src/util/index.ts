import { formatDistanceToNow } from "date-fns";

export const amountStr = (tokenAmount: bigint = 0n, decimals: bigint = 18n): string =>
    (BigInt(tokenAmount) / 10n ** BigInt(decimals)).toString();
export const amountBig = (tokenAmount: string = "0", decimals: bigint = 18n): bigint =>
    (BigInt(tokenAmount) * 10n ** BigInt(decimals));
export const timeAgo = (timestamp: string | number | undefined): string =>
    formatDistanceToNow(new Date(Number(timestamp || "0")), { addSuffix: true });
export const addressLink = (tokenAddress: `0x${string}`) => {
    return {
        address: `${tokenAddress.substring(0, 8)}..${tokenAddress.substring(tokenAddress.length - 6)}`,
        link: `https://etherscan.io/address/${tokenAddress}`
    }
}
export function formatNumber(
    number: bigint | number | undefined = 0,
    decimals: bigint | number | undefined = 0
): string {
    const bigNum = (BigInt(number) * 1_000n) / 10n ** BigInt(decimals);
    const floatNum = parseFloat((parseInt(bigNum.toString()) / 1_000).toString());
    if (floatNum > 10_000 && floatNum < 1_000_000) {
        return (floatNum / 10_000).toFixed(0) + "K";
    } else if (floatNum >= 1_000_000) {
        return (floatNum / 1_000_000).toFixed(0) + "M";
    } else {
        return floatNum.toString();
    }
}