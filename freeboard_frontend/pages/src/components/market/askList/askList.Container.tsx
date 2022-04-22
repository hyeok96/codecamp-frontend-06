import { useQuery, useMutation } from "@apollo/client";
import AskListPresenterPage from "./askList.Presenter";
import {
  FETCH_USED_ITEM_QUESTION,
  DELETE_USED_ITEM_QUESTION,
} from "../../../components/market/MarketQurey/index";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../common/types/generated/types";
import { useRouter } from "next/router";

export default function AskListContainerPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTION, {
    variables: {
      useditemId: String(router.query.id),
    },
  });

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickDeleteUseditmeQusetion = (id: string) => async () => {
    await deleteUseditemQuestion({
      variables: {
        useditemQuestionId: String(id),
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION,
          variables: {
            useditemId: String(router.query.id),
          },
        },
      ],
    });
  };

  return (
    <div>
      {data?.fetchUseditemQuestions.map((el: any) => (
        <>
          <AskListPresenterPage
            el={el}
            onClickDeleteUseditmeQusetion={onClickDeleteUseditmeQusetion}
          />
        </>
      ))}
    </div>
  );
}
