export interface IAskWriteFormProps {
  contents: string;
}

export interface IAskWritePresenterPageProps {
  onSubmitcreateUseditemQuestion: (data: IAskWriteFormProps) => void;
}
