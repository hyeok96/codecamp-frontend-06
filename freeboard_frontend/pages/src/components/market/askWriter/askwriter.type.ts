import { UseFormRegister } from "react-hook-form";

export interface IAskWriteFormProps {
  contents: string;
}

export interface IAskWritePresenterPageProps {
  onSubmitcreateUseditemQuestion: (data: IAskWriteFormProps) => void;
  register: any;
  handleSubmit: any;
}
