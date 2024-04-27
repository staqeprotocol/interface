import { IToken } from "@/src/interfaces";

export enum ApprovalRequired {
  NONE,
  ERC20,
  ERC721,
  BOTH,
}

export interface ApproveProps {
  erc20: IToken | undefined;
  erc721: IToken | undefined;
  token: { amount: string; id: string };
  handle: () => void;
}

export interface ApprovalProps {
  token: IToken | undefined;
  status: string;
  onApprove: () => void;
  approvalState: ApprovalRequired | undefined;
  approvalType: ApprovalRequired;
}