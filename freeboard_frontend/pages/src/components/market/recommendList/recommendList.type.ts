import { IUseditemQuestionAnswer } from "../../../common/types/generated/types";

export interface IRecommendPresenterProps {
  el: IUseditemQuestionAnswer;
  onClickDeleteRecommend: (id: string) => () => void;
  id?: string;
}
