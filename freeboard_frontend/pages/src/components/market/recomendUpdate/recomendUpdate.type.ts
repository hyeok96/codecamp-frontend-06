import { IUseditemQuestionAnswer } from "../../../common/types/generated/types";
import { Dispatch, SetStateAction } from "react";

export interface IRecomendWriteFormProps {}

export interface IRecommendUpdatePresenterPageProps {
  handleSubmit: any;
  register: any;
  el?: IUseditemQuestionAnswer;
  onClickUpdateRecommend: (id: string) => (data: any) => void;
  id?: any;
}

export interface IRecommendUpdateContainerPageProps {
  el?: IUseditemQuestionAnswer;
  id?: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}
