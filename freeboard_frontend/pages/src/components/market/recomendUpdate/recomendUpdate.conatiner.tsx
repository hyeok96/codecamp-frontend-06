import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../common/types/generated/types";
import {
  FETCH_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "../MarketQurey";
import RecommendUpdataPresenterPage from "./recomendUpdate.presenter";
import { useForm } from "react-hook-form";
import { IRecommendUpdateContainerPageProps } from "./recomendUpdate.type";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { RecommendUpdate } from "../../../common/store";
import { useRouter } from "next/router";

export default function RecommendUpdateConainerPage(
  props: IRecommendUpdateContainerPageProps
) {
  const { register, handleSubmit } = useForm();

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const onClickUpdateRecommend = (id: string) => async (data: any) => {
    const { contents } = data;
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(id),
          updateUseditemQuestionAnswerInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: {
              useditemQuestionId: String(props.id),
            },
          },
        ],
      });
      alert("수정되었습니다.");
      props.setIsEdit(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <RecommendUpdataPresenterPage
      register={register}
      handleSubmit={handleSubmit}
      el={props.el}
      onClickUpdateRecommend={onClickUpdateRecommend}
      id={props.id}
    />
  );
}
