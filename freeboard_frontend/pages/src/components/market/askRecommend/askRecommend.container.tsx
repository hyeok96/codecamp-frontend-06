import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestionAnswer,
} from "../../../common/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWER,
} from "../MarketQurey";
import RecommendPresenterPage from "../recommendList/recommendList.Presenter";
import AskRecommendPresenterPage from "./askRecommend.presenter";
import { IAskRecommendContainerProps } from "./askRecommend.type";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { async } from "@firebase/util";
import { query } from "firebase/firestore/lite";

export default function AskRecommendContainerPage(
  props: IAskRecommendContainerProps
) {
  const { register, handleSubmit, setValue } = useForm();

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWER, {
    variables: {
      useditemQuestionId: String(props.el),
    },
  });

  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const onClickCreateRecommend = async (data: any) => {
    const { contents } = data;
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: String(props.el),
          createUseditemQuestionAnswerInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: {
              useditemQuestionId: String(props.el),
            },
          },
        ],
      });
      setValue("contents", "");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickDeleteRecommend = (id: string) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWER,
            variables: {
              useditemQuestionId: String(props.el),
            },
          },
        ],
      });
      alert("댓글이 삭제되었습니다");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((el: IUseditemQuestionAnswer) => (
        <RecommendPresenterPage
          el={el}
          key={el._id}
          onClickDeleteRecommend={onClickDeleteRecommend}
          id={props.el}
        />
      ))}

      <AskRecommendPresenterPage
        register={register}
        handleSubmit={handleSubmit}
        onClickCreateRecommend={onClickCreateRecommend}
      />
    </>
  );
}
