import { ChangeEvent } from "react";

export interface ISigUpPresenterProps {
  onClickSignUpBtn: (data: IHookFormProps) => void;
  schema: any;
}

export interface IHookFormProps {
  email: string;
  password: string;
  checkPassword?: string;
  name: string;
}

export interface IStyleProps {
  isActive: boolean;
}
