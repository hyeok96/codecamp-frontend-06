import { Dispatch, SetStateAction } from "react";
import { IUser } from "../../../common/types/generated/types";

export interface ILayoutHeaderProps {
  onClickMoveHome: () => void;
  data: any;
  showProfile: boolean;
  onClickShowProfile: () => void;
  onClickLogout: () => void;
  onClickModal: () => void;
  Modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}
