import { ChangeEvent, MouseEvent } from "react";

export interface IImageProps {
  isEdit?: boolean;
  data?: any;
  isUseditem?: boolean;
  onChangeUseditemImage?: (e: ChangeEvent<HTMLInputElement>) => void;
}
