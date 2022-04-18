import { IQuery } from "../../../common/types/generated/types";
import { MouseEvent, ChangeEvent } from "react";

export interface IMarketItemsListPresenterProps {
  data: Pick<IQuery, "fetchUseditems">;
  loadFunc: () => void;
  onClickMoveDetailPage: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveProductNewPage: () => void;
  onChangeSearchUseditems: (e: ChangeEvent<HTMLInputElement>) => void;
}
