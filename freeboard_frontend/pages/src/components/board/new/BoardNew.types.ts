import { ChangeEvent } from "react";

export interface IBoardNewContainerProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardNewPresenterProps {
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutube: (e: ChangeEvent<HTMLInputElement>) => void;
  onCilckRegister: () => void;
  errorName: string;
  errorPw: string;
  errorTitle: string;
  errorText: string;
  onClickUpdate: () => {};
  data?: any;
  isEditActive: boolean;
  isActive: boolean;
  isEdit: boolean;
  showModal: () => void;
  onClickAddressModal: () => void;
  isOpen: boolean;
  handleComplete: (data: any) => void;
  address: string;
  addressZone: string;
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
