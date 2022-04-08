import { ChangeEvent } from "react";

export interface IFirebasePresenterProps {
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  onCLickRegister: () => void;
  onClickFetch: () => void;
}
