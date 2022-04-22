import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

const ReactQuil = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function QuizPage() {
  const router = useRouter();
  const { register, handleSubmit, setValue, trigger } = useForm();
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeContents = (value: any) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...data,
          },
        },
      });
      router.push(`/Quiz6/3day/${result.data.createBoard._id}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input {...register("title")} />
      <br />
      내용: <ReactQuil onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
