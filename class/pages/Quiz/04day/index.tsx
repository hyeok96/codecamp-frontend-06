import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../pages/src/commons/types/generated/types";
import { LikeOutlined } from "@ant-design/icons";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const UPLOADFILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImgPage() {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [writer, setWriter] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [title, setTitle] = useState<string | undefined>("");
  const [contents, setContents] = useState<string | undefined>("");

  const imgRef = useRef<HTMLInputElement>(null);

  const onChangeUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const result = await uploadFile({
      variables: { file },
    });

    setImgUrl(result.data?.uploadFile.url);
  };

  const onClickCreateBoard = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imgUrl],
        },
      },
    });

    alert("등록했어요~~~");
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onClickImg = () => {
    imgRef.current?.click();
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
      <input
        type="file"
        onChange={onChangeUploadFile}
        ref={imgRef}
        style={{ display: "none" }}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <button onClick={onClickCreateBoard}>저장하기</button>
      <LikeOutlined onClick={onClickImg} />
    </>
  );
}
