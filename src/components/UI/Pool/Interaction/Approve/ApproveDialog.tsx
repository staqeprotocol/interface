import { useEffect, useState } from "react";
import { useTokenApproval } from "@/src/hooks/useTokenApproval";
import { IToken } from "@/src/interfaces";
import { Alert } from "@/src/components/UI/Pool/Interaction/Approve/Alert";
import { LuSendToBack } from "react-icons/lu";

export const ApproveDialog = ({
  token,
  handle,
}: {
  token: IToken | undefined;
  handle: (isApproved: boolean) => void;
}) => {
  const { handleApprove, offChain, onChain } = useTokenApproval(token);
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Approve spending ${token?.symbol ?? ``} tokens.`);
  }, [token]);

  useEffect(() => {
    if (offChain === "pending") {
      setMessage("Awaiting wallet confirmation...");
      setStatus(0.5);
      setTimeout(() => {
        setMessage("Confirm the transaction in your wallet.");
        setStatus(1);
      }, 2_000);
    }
    if (offChain === "success") {
      setMessage("Transaction submitted. Please wait...");
      setStatus(2);
    }
    if (onChain === "success") {
      setMessage("Approval successful!");
      setStatus(3);
    }
    if (offChain === "error" || onChain === "error") {
      setMessage("Error: Transaction failed.");
      setStatus(-1);
      setTimeout(() => {
        setMessage(`Approve spending ${token?.symbol ?? ``} tokens.`);
        setStatus(0);
      }, 5_000);
    }
  }, [offChain, onChain]);

  useEffect(() => {
    if (status === 3) {
      setTimeout(() => {
        handle(true);
      }, 2_000);
    }
  }, [status]);

  return (
    token && (
      <dialog id={`approve-${token?.tokenAddress}`} className="modal">
        <div className="modal-box">
          <div className="grid grid-rows-3 gap-4 items-center w-full">
            <Alert status={status} message={message} />
            <ul className="steps w-full">
              <li
                data-content="✓"
                className={`step ${status >= 1 ? "step-accent" : ""}`}
              >
                {status === 0.5 ? (
                  <span className="loading loading-dots loading-sm"></span>
                ) : (
                  `Init`
                )}
              </li>
              <li
                data-content="✓"
                className={`step ${status >= 2 ? "step-accent" : ""}`}
              >
                {status === 1 ? (
                  <span className="loading loading-dots loading-sm"></span>
                ) : (
                  `Transaction`
                )}
              </li>
              <li
                data-content="✓"
                className={`step ${status >= 3 ? "step-accent" : ""}`}
              >
                {status === 2 ? (
                  <span className="loading loading-dots loading-sm"></span>
                ) : (
                  `Success`
                )}
              </li>
            </ul>
            <div className="w-full p-2 mt-2">
              <a
                className={`btn btn-block text-2xl overflow-hidden relative btn-warning ${status > 0 && status < 3 ? "animate-pulse" : ""}`}
                onClick={() => status <= 0 && handleApprove()}
              >
                {status > 0 && status < 3 ? (
                  <span className="loading loading-dots loading-sm"></span>
                ) : status === 3 ? (
                  `Approved`
                ) : (
                  `Approve ${token?.symbol}`
                )}
                <LuSendToBack className="absolute inset-y-0 right-0 text-8xl -top-6 opacity-40" />
              </a>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    )
  );
};
