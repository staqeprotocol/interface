import { getLogo } from "@/src/logo";
import Image from "next/image";
import { useState } from "react";

interface ISettingsResult {
  tokenAddress: `0x${string}` | undefined;
  afterBlocks: number;
}

interface ISettingsParams {
  rewardToken: `0x${string}` | undefined;
  handle: (settings: ISettingsResult) => void;
}

export const Settings = ({ rewardToken, handle }: ISettingsParams) => {
  const [settings, setSettings] = useState<ISettingsResult>({
    tokenAddress: rewardToken,
    afterBlocks: 0,
  });

  const handleTokenAddress = (event: any) => {
    const tokenAddress = event.target.value as `0x${string}`;
    setSettings({ ...settings, tokenAddress });
  };

  const handleAfterBlocks = (event: any) => {
    const afterBlocks = event.target.value;
    setSettings({ ...settings, afterBlocks });
  };

  const handleSave = () => {
    handle(settings);
  };

  return (
    <dialog id="reward-settings" className="modal">
      <div className="modal-box">
        <div className="p-2 w-full">
          {!rewardToken && (
            <div className="flex justify-center items-center w-full mb-2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Token Address</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <Image
                    src={getLogo(settings.tokenAddress)}
                    width={0}
                    height={0}
                    alt="Token Logo"
                    className="w-8 h-8 opacity-70 rounded-full"
                  />
                  <input
                    type="text"
                    className="grow ml-5"
                    placeholder="0x0..."
                    value={
                      settings.tokenAddress ??
                      "0x603E1BD79259EbcbAaeD0c83eeC09cA0B89a5bcC"
                    }
                    spellCheck={false}
                    onChange={handleTokenAddress}
                  />
                </label>
              </label>
            </div>
          )}
          <label className="form-control w-full mb-2">
            <div className="label">
              <span className="label-text">
                Access to reward after {settings.afterBlocks} blocks
              </span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="0"
                value={settings.afterBlocks ?? ""}
                spellCheck={false}
                onChange={handleAfterBlocks}
              />
            </label>
          </label>
          <input
            type="range"
            min={0}
            max="36000"
            className="range"
            step="1800"
            value={settings.afterBlocks ?? ""}
            onChange={handleAfterBlocks}
          />
          <div className="w-full flex justify-between text-xs px-2 text-center">
            <span>
              0<br></br>Days
            </span>
            <span>
              1<br></br>Days
            </span>
            <span>
              2<br></br>Days
            </span>
            <span>
              3<br></br>Days
            </span>
            <span>
              4<br></br>Days
            </span>
            <span>
              5<br></br>Days
            </span>
          </div>
        </div>
        <div className="modal-action w-full">
          <div className="grid grid-cols-5 gap-4 w-full">
            <div className="col-span-2">
              <form method="dialog">
                <button className="btn btn-block">Cancel</button>
              </form>
            </div>
            <div className="col-span-3">
              <form method="dialog">
                <button
                  className="btn btn-success btn-block"
                  onClick={handleSave}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
