import { ChangeEvent } from "react";

export interface IMarketNewPresenterProps {
  onChangeProcutInput?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeProductAddress?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeProductTag?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeProductImage?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateUseditem?: () => void;
}
