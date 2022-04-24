import { ChangeEvent } from "react";
import { IQuery } from "../../../common/types/generated/types";

export interface IMarketNewPresenterProps {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  isModalVisible?: boolean;
  showModal?: () => void;
  handleComplete?: (data: any) => void;
  onClickCreateUsedItem?: (data: any) => void;
  onChangeImg?: (e: ChangeEvent<HTMLInputElement>) => void;
  imgUrl: any;
  address: string;
  onClickUpdateUseditem?: (data: any) => void;
  // latitude: number;
  // longitude: number;
}

export interface IMarketStyleProps {
  activeBtn?: boolean;
}

export interface IMarketNewContainerProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit?: boolean;
}
