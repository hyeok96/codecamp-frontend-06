import { UseFormRegisterReturn } from "react-hook-form";
import { IUseditemQuestion } from "../../../common/types/generated/types";

export interface IAskWriteFormProps {
  contents: string;
}

export interface IAskUpdatePresenterPageProps {
  register: any;
  handleSubmit: any;
  el: IUseditemQuestion;
  onSubmitUpdateUseditemQuestion: (data: IAskWriteFormProps) => void;
}

export interface IAskUpdateContainerPageProps {
  el: IUseditemQuestion;
  setIsEidt: any;
}
