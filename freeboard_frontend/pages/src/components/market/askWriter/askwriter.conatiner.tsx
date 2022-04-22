import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
} from "../MarketQurey";
import AskWriterPresenterPage from "./askwriter.presenter";
import { IAskWriteFormProps } from "./askwriter.type";
import { useForm } from "react-hook-form";

export default function AskWriterConainerPage() {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onSubmitcreateUseditemQuestion = async (data: IAskWriteFormProps) => {
    const { contents } = data;

    try {
      await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.id),
          createUseditemQuestionInput: {
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
      setValue("contents", "");
      alert("문의가 성공적으로 등록이 되었습니다.");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <AskWriterPresenterPage
      onSubmitcreateUseditemQuestion={onSubmitcreateUseditemQuestion}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
