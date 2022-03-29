import { MouseEvent } from "react";

export interface IBoardCommentPresenterProps {
  commentData: any;
  onClickDeleteBoardComment: (a: any) => void;
  onToggle: () => void;
  onchangeCommentPassword: (e: any) => void;
  isOpen: boolean;
  onClickModal: (e: MouseEvent<HTMLDivElement>) => void;
}
