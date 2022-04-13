import { ChangeEvent, MouseEvent } from "react";

export interface IBoardNewContainerProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardNewPresenterProps {
  onChangeInput: (e: ChangeEvent<any>) => void;
  onCilckRegister: () => void;
  errorName: string;
  errorPw: string;
  errorTitle: string;
  errorText: string;
  onClickUpdate: () => {};
  isEditActive: boolean;
  isActive: boolean;
  isEdit: boolean;
  showModal: () => void;
  onClickAddressModal: () => void;
  isOpen: boolean;
  handleComplete: (data: any) => void;
  onChangeImg: (e: ChangeEvent<HTMLInputElement>) => void;
  input: any;
  images: any;
  onClickDeleteImg: (e: MouseEvent<HTMLButtonElement>) => void;
  data?: any;
  isShowImage?: boolean;
}

interface IupdateBoardInput {
  title?: string;
  contents?: string;
}

export interface IMyVariables {
  boardId: string;
  password?: string;
  updateBoardInput?: IupdateBoardInput;
}

export interface IStyled {
  isActive: boolean;
  isEdit: boolean;
  isEditActive: boolean;
}
