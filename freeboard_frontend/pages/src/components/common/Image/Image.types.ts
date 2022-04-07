import { ChangeEvent } from "react";

export interface IImageProps {
  onChangeImg: (e: ChangeEvent<HTMLInputElement>) => void;
  imgUrl: any;
  isEdit: boolean;
  data?: any;
}
