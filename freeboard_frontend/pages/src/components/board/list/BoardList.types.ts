import { MouseEvent, ChangeEvent } from "react";

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
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSearchBoard: () => void;
  onClickMoveBestPage: (e: MouseEvent<HTMLDivElement>) => void;
  onChangeStartDate: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (e: ChangeEvent<HTMLInputElement>) => void;
}
