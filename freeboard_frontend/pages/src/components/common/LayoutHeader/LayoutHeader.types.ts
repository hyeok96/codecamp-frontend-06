import { IUser } from "../../../common/types/generated/types";

export interface ILayoutHeaderProps {
  onClickMoveHome: () => void;
  data: any;
  showProfile: boolean;
  onClickShowProfile: () => void;
  onClickLogout: () => void;
}
