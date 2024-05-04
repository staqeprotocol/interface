import { useEffect } from "react";

export const ErrorDialog = ({
  error,
}: {
  error: { metaMessages: string[] };
}) => {
  useEffect(() => {
    const modal: any = document.getElementById(`error`);
    if (!error) modal?.close();
    if (error) modal?.showModal();
  }, [error]);

  return (
    error?.metaMessages && (
      <dialog id="error" className="modal">
        <div className="modal-box">
          <div role="alert" className="alert alert-error">
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
            <span>
              {error.metaMessages.map((mess, i) => (
                <div key={i}>{mess}</div>
              ))}
            </span>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    )
  );
};
