import { MouseEvent } from "react";

export interface IBoardListPresenterPros {
  data: any;
  onClickDetailPage: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface INavigationPros {
  onClickBoardNewPage: () => void;
  lastPage: number;
  refetch: any;
}
