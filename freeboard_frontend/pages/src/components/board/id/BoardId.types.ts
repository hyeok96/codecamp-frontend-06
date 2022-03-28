import { MouseEvent } from "react";

export interface IBoardIdPresenterProps {
  data: any;
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
  onClickUpdateMove: () => void;
  onClickBoardListMove: () => void;
  onClickLikeBoard: () => void;
  onClickDisLikeBoard: () => void;
}
