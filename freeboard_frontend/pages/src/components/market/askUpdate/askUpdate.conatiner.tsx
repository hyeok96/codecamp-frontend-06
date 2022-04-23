import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  FETCH_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "../MarketQurey";
import AskWriterPresenterPage from "./askUpdate.presenter";
import {
  IAskUpdateContainerPageProps,
  IAskWriteFormProps,
} from "./askUpdate.type";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { QuestionState } from "../../../common/store";

export default function AskUpdateConainerPage(
  props: IAskUpdateContainerPageProps
) {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onSubmitUpdateUseditemQuestion = async (data: IAskWriteFormProps) => {
    const { contents } = data;

    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: String(props.el._id),
          updateUseditemQuestionInput: {
            contents,
          },
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
      props.setIsEidt(false);
      alert("댓글이 수정 되었습니다");
    } catch (error) {
      Modal.error({ content: error.message });
      props.setIsEidt(false);
    }
  };

  return (
    <AskWriterPresenterPage
      register={register}
      handleSubmit={handleSubmit}
      el={props.el}
      onSubmitUpdateUseditemQuestion={onSubmitUpdateUseditemQuestion}
    />
  );
}
