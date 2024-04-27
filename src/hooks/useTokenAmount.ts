import { useCallback, useMemo, useState } from "react";

type TokenAmountResult = {
  str: string;
  big: bigint;
};

export function useTokenAmount(decimals: string | number | bigint | undefined) {
  const [amount, setTokenAmount] = useState<string | number | bigint | undefined>();

  const tokenAmount: TokenAmountResult = useMemo(() => {
    if (!amount) return { str: "", big: 0n };

    let numericAmount = 0;
    if (typeof amount === 'string') {
      numericAmount = Math.round(parseFloat(amount) * 1000) / 1000 || 0;
    } else {
      numericAmount = Number(amount);
    }

    return {
      str: amount.toString(),
      big: BigInt(Math.floor(numericAmount * Math.pow(10, Number(decimals ?? 0)))),
    };
  }, [amount, decimals]);

  const handleTokenAmount = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let inputAmount = event.currentTarget.value;
      if (/^\d*\.?\d*$/.test(inputAmount) || inputAmount === "") {
        setTokenAmount(inputAmount);
      }
    },
    []
  );

  return [tokenAmount, setTokenAmount, handleTokenAmount] as const;
}
