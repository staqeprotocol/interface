import { useMemo } from "react";
import { IToken } from "@/src/interfaces";

function formatBalance(balance: bigint, decimals: number | bigint): string {
  const scale: bigint = BigInt(10 ** 3);
  const scaledBalance: bigint = balance * scale / BigInt(10 ** Number(decimals));

  let balanceStr: string = scaledBalance.toString();

  const insertPosition: number = balanceStr.length - 3;
  if (insertPosition > 0) {
    balanceStr = balanceStr.slice(0, insertPosition) + "." + balanceStr.slice(insertPosition);
  } else {
    balanceStr = "0." + "0".repeat(-insertPosition) + balanceStr;
  }

  return balanceStr;
}

export function useTokenBalance(token: IToken | undefined) {
  const balance = useMemo(() => {
    if (token?.balance === undefined) return "0";
    let numericAmount: number;

    if (typeof token.balance === 'bigint') {
      return formatBalance(token.balance, token.decimals);
    } else {
      numericAmount = typeof token.balance === 'string' ? parseFloat(token.balance) : token.balance;
      return BigInt(Math.floor(numericAmount * Number(10n ** BigInt(token.decimals ?? 0))));
    }
  }, [token]);

  return balance;
}
