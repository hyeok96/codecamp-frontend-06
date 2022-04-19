import { IQuery, IUseditem } from "../../../common/types/generated/types";
import { MouseEvent, ChangeEvent } from "react";

export interface IMarketItemsListPresenterProps {
  data: Pick<IQuery, "fetchUseditems">;
  loadFunc: () => void;
  onClickMoveDetailPage: (el: IUseditem) => () => void;
  onClickMoveProductNewPage: () => void;
  onChangeSearchUseditems: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToPage?: (path: any) => () => void;
}
