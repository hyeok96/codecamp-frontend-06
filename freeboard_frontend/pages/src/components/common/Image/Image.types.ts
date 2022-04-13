import { ChangeEvent, MouseEvent } from "react";

export interface IImageProps {
  onChangeImg?: (e: ChangeEvent<HTMLInputElement>) => void;
  imgUrl?: any;
  isEdit?: boolean;
  data?: any;
  onClickDeleteImg?: (e: MouseEvent<HTMLButtonElement>) => void;
  isShowImage?: boolean;
  isUseditem?: boolean;
  onChangeUseditemImage?: (e: ChangeEvent<HTMLInputElement>) => void;
}
