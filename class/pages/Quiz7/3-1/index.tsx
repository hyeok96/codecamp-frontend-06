import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";

const UPLOADFILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function Quiz() {
  const [state, setState] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });
  const [imgUrl, setImgUrl] = useState("");
  const [file1, setFile1] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("파일없음");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setImgUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async () => {
    try {
      const result = await uploadFile({
        variables: {
          file: file1,
        },
      });

      const img = result.data?.uploadFile.url;

      await createBoard({
        variables: {
          createBoardInput: {
            ...state,
            images: [img],
          },
        },
      });
      alert("등록성공");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      작성자: <input onChange={onChangeInput} name="writer" />
      <br />
      비밀번호:{" "}
      <input onChange={onChangeInput} name="password" type="password" />
      <br />
      제목: <input onChange={onChangeInput} name="title" />
      <br />
      내용: <input onChange={onChangeInput} name="contents" />
      <br />
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
