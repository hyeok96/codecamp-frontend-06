import { ChangeEvent } from "react";

export interface IBoardCommentPresenterProps {
  onChangeComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreateComment: () => void;
  onChangePw: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  writer: string;
  pw: string;
  contents: string;
  handleChange: (value: number) => void;
  rating: number;
}

export interface IStyledProps {
  sellect1?: boolean;
  sellect2?: boolean;
  sellect3?: boolean;
  sellect4?: boolean;
  sellect5?: boolean;
  aaa?: number;
}
