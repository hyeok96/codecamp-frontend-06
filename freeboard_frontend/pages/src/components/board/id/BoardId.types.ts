import { MouseEvent, ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IBoardComment,
} from "../../../common/types/generated/types";

export interface IBoardIdPresenterProps {
  data: any;
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
  onClickUpdateMove: () => void;
  onClickBoardListMove: () => void;
}
