import { MouseEvent } from "react";

export interface IBoardListPresenterPros {
  data: any;
  onClickDetailPage: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface INavigationPros {
  lastPage: number;
  refetch: any;
}

export interface IBestBoardDataProps {
  bestBoardData: any;
  onClickBoardNewPage: () => void;
}
