import { useEffect, useState } from "react";
import { useTokenApproval } from "@/src/hooks/useTokenApproval";
import { IToken } from "@/src/interfaces";

const Alert = ({ status, message }: { status: number; message: string }) => {
  return (
    <div
      role="alert"
      className={`alert my-2 ${status === -1 && `alert-error`} ${status === 3 && `alert-success`}`}
    >
      {status === -1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      {status > -1 && status < 3 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      )}
      {status === 3 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <span>{message}</span>
    </div>
  );
};

export const Approve = ({
  token,
  handle,
}: {
  token: IToken | undefined;
  handle: (isApproved: boolean) => void;
}) => {
  const { handleApprove, offChain, onChain } = useTokenApproval(token);
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState("Approve tokens for spending.");

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
    <dialog id="approve" className="modal">
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
              className={`btn btn-block btn-success ${status > 0 && status < 3 ? "animate-pulse" : ""}`}
              onClick={() => status <= 0 && handleApprove()}
            >
              {status > 0 && status < 3 && (
                <span className="loading loading-dots loading-sm"></span>
              )}{" "}
              {status === 3 ? `Approved` : `Approve`} {token?.symbol}
            </a>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
