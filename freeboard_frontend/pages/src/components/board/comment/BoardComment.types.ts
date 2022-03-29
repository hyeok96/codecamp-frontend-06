import { MouseEvent } from "react";

export interface IBoardCommentPresenterProps {
  commentData: any;
  onClickDeleteBoardComment: (e: MouseEvent<HTMLDivElement>) => void;
}
