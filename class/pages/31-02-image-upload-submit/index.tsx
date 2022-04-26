import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../src/commons/types/generated/types";
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

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file1, setFile1] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    const fileReader = new FileReader();
    // file을 url로 만들기
    fileReader.readAsDataURL(file);
    // load가 되면 미리보기 보여주기
    fileReader.onload = (data) => {
      // result가 null이나 undefind 일 수도 있기 때문에 조건문
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async () => {
    try {
      const result1 = await uploadFile({
        variables: { file: file1 },
      });
      const imgUrl = result1.data?.uploadFile.url;

      const result2 = await createBoard({
        variables: {
          createBoardInput: {
            writer: "영희",
            password: "123",
            title: "이ㅁ지",
            contents: "업로드",
            images: [imgUrl],
          },
        },
      });
      console.log(result2.data.createBoard._id);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      {/* 자바스크립트에서 만든 url */}
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
