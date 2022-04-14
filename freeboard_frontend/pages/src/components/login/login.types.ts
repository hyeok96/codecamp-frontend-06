import { ChangeEvent } from "react";

export interface ILoginPresenterProps {
  onClickMoveSignUpPage?: () => void;
  onChangeUseditemImage?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickBtn?: (data: IHookFormProps) => void;
  schema?: any;
}

export interface ILoginStyleProps {
  isActive: boolean;
}

export interface IHookFormProps {
  email: string;
  password: string;
}
