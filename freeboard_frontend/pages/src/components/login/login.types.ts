import { ChangeEvent } from "react";

export interface ILoginPresenterProps {
  onChangeLoginInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLoginBtn?: () => void;
  onClickMoveSignUpPage?: () => void;
  onChangeUseditemImage?: (e: ChangeEvent<HTMLInputElement>) => void;
}
