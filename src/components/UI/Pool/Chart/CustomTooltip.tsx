export const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const p = payload[0].payload ?? {};
    const rewardAmount = Number(
      p.rewardAmount / 10n ** p.rewardToken?.decimals
    ).toLocaleString("en-US");
    const rewardBlock = (p.rewardBlock ?? "").toString();
    const symbol = p.rewardToken?.symbol ?? "";
    return (
      <div className="rounded-xl bg-neutral-800 text-white text-xs p-3">
        <div className="flex">
          <div className="text-zinc-400 mr-2">Block:</div>
          <div>{rewardBlock}</div>
        </div>
        <div className="flex">
          <div className="text-zinc-400 mr-2">Reward:</div>
          <div>{`${rewardAmount} ${symbol}`}</div>
        </div>
      </div>
    );
  }

  return null;
};
