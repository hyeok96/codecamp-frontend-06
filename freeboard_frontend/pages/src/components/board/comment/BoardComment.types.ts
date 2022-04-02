import { MouseEvent } from "react";

export interface IBoardCommentPresenterProps {
  commentData: object;
  onToggle: () => void;
  isOpen: boolean;
  onClickModal: (e: MouseEvent<HTMLDivElement>) => void;
  onClickDeleteBoardComment: () => void;
  onChangePw: (e: any) => void;
  el: any;
}
