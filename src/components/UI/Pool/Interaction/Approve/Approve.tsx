import {
  staqeProtocolAddress,
  useWriteErc20Approve,
  useWriteErc721SetApprovalForAll,
} from "@/src/generated";
import { UINT256_MAX, ZERO_ADDRESS as ZERO } from "@/src/constants";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { amountBig } from "@/src/util";
import { useChainId, useWaitForTransactionReceipt } from "wagmi";
import {
  ApprovalProps,
  ApprovalRequired,
  ApproveProps,
} from "@/src/components/UI/Pool/Interaction/Approve/IApprove";
import { IToken } from "@/src/interfaces";

const useApproval = (
  token: { id: string; amount: string },
  erc20: IToken | undefined,
  erc721: IToken | undefined
): [
  ApprovalRequired | undefined,
  Dispatch<SetStateAction<ApprovalRequired | undefined>>,
] => {
  const [approval, setApproval] = useState<ApprovalRequired | undefined>();

  useEffect(() => {
    const amount = amountBig(token.amount, erc20?.decimals);
    const id = BigInt(token.id || "0");
    let required;

    if (amount > 0n && !erc20?.isApproved) {
      required = ApprovalRequired.ERC20;
    }
    if (id > 0n && !erc721?.isApproved) {
      required =
        required === ApprovalRequired.ERC20
          ? ApprovalRequired.BOTH
          : ApprovalRequired.ERC721;
    }

    console.log("setApproval", required);

    if (required) setApproval(required);
  }, [erc20, erc721, token]);

  return [approval, setApproval];
};

export const Approve: React.FC<ApproveProps> = ({
  erc20,
  erc721,
  token,
  handle,
}) => {
  const chainId = useChainId();
  const { [chainId]: address } = staqeProtocolAddress as any;

  const [approval, setApproval] = useApproval(token, erc20, erc721);

  const {
    data: erc20Hash,
    writeContract: erc20Approve,
    status: erc20ClickButton,
  } = useWriteErc20Approve();
  const { status: erc20Status } = useWaitForTransactionReceipt({
    hash: erc20Hash,
    query: { refetchInterval: 2000 },
  });

  console.log("erc20ClickButton, erc20Status", erc20ClickButton, erc20Status);

  const {
    data: erc721Hash,
    writeContract: erc721Approve,
    status: erc721ClickButton,
  } = useWriteErc721SetApprovalForAll();
  const { status: erc721Status } = useWaitForTransactionReceipt({
    hash: erc721Hash,
    query: { refetchInterval: 2000 },
  });

  console.log("erc721ClickButton, erc721Hash", erc721ClickButton, erc721Hash);

  useEffect(() => {
    if (approval !== ApprovalRequired.NONE) return;
    console.log("handle", approval);
    handle();
  }, [approval]);

  useEffect(() => {
    if (erc20Status !== "success") return;
    setApproval((approval) =>
      approval === ApprovalRequired.BOTH
        ? ApprovalRequired.ERC721
        : ApprovalRequired.NONE
    );
  }, [erc20Status]);

  useEffect(() => {
    if (erc721Status !== "success") return;
    setApproval((approval) =>
      approval === ApprovalRequired.BOTH
        ? ApprovalRequired.ERC20
        : ApprovalRequired.NONE
    );
  }, [erc721Status]);

  const handleErc20Approve = () =>
    erc20Approve({
      address: erc20?.tokenAddress || ZERO,
      args: [address, UINT256_MAX as bigint],
    });

  const handleErc721Approve = () =>
    erc721Approve({
      address: erc721?.tokenAddress || ZERO,
      args: [address, true],
    });

  return (
    <dialog id="approve" className="modal">
      <div className="modal-box">
        <Approval
          token={erc721}
          status={erc721ClickButton !== "idle" ? erc721Status : ""}
          onApprove={handleErc721Approve}
          approvalState={approval}
          approvalType={ApprovalRequired.ERC721}
        />
        <Approval
          token={erc20}
          status={erc20ClickButton !== "idle" ? erc20Status : ""}
          onApprove={handleErc20Approve}
          approvalState={approval}
          approvalType={ApprovalRequired.ERC20}
        />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

const Approval: React.FC<ApprovalProps> = ({
  token,
  status,
  onApprove,
  approvalState,
  approvalType,
}) => {
  if (
    !token ||
    !approvalState ||
    (approvalState !== approvalType && approvalState !== ApprovalRequired.BOTH)
  ) {
    return null;
  }
  return (
    <div className="p-5 w-full">
      <ul className="steps w-full">
        <li data-content="✓" className="step step-accent">
          Init
        </li>
        <li
          data-content="✓"
          className={`step ${approvalState !== approvalType && approvalState !== ApprovalRequired.BOTH && "step-accent"}`}
        >
          {status === "pending" ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            `Approve ${token.symbol}`
          )}
        </li>
        <li
          data-content="✓"
          className={`step ${approvalState !== approvalType && approvalState !== ApprovalRequired.BOTH && "step-accent"}`}
        >
          Success
        </li>
      </ul>
      <div className="w-full p-2">
        <a
          className={`btn btn-block btn-warning ${approvalState !== approvalType && approvalState !== ApprovalRequired.BOTH && `btn-disabled`}`}
          onClick={onApprove}
        >
          {status === "pending" && (
            <span className="loading loading-dots loading-sm"></span>
          )}{" "}
          Approve {token.symbol}
        </a>
      </div>
    </div>
  );
};
