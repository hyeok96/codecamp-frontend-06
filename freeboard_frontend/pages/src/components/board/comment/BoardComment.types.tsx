import { MouseEvent, ChangeEvent } from "react";

export interface IBoardCommentPresenterProps {
  onChangeComment: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateComment: () => void;
  onChangePw: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  commentData: any;
  sellect1: boolean;
  sellect2: boolean;
  sellect3: boolean;
  sellect4: boolean;
  sellect5: boolean;
  onClickRating1: (e: MouseEvent<HTMLDivElement>) => void;
  onClickRating2: (e: MouseEvent<HTMLDivElement>) => void;
  onClickRating3: (e: MouseEvent<HTMLDivElement>) => void;
  onClickRating4: (e: MouseEvent<HTMLDivElement>) => void;
  onClickRating5: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface IStyledProps {
  sellect1?: boolean;
  sellect2?: boolean;
  sellect3?: boolean;
  sellect4?: boolean;
  sellect5?: boolean;
}
