import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../src/commons/types/generated/types";
import { Modal } from "antd";
import { checkFileValidation } from "../src/commons/libraries/validation";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
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

export default function CraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const [callApi] = useMutation(CREATE_BOARD);

  const [myWriter, setMyWrite] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContent, setMyContent] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") rest-api 방식
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: myWriter,
          title: myTitle,
          contents: myContent,
          password: myPassword,
          images: [imgUrl],
        },
      },
    }); // graph-api 방식
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  const onChangeWiter = (e: ChangeEvent<HTMLInputElement>) => {
    setMyWrite(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(e.target.value);
  };

  const onChangeCOntent = (e: ChangeEvent<HTMLInputElement>) => {
    setMyContent(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(e.target.value);
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    const isVaild = checkFileValidation(file);
    if (!isVaild) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result.data?.uploadFile.url);

      setImgUrl(result.data?.uploadFile.url);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImg = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div>
        {/* <div>{data}</div> */}
        작성자: <input onChange={onChangeWiter} />
        제목: <input onChange={onChangeTitle} />
        내용: <input onChange={onChangeCOntent} />
        비밀번호: <input onChange={onChangePassword} type="password" />
        <button onClick={callGraphqlApi}>graphql-api 요청하기</button>
      </div>
      <div>
        <div>이미지 업로드 연습하기</div>
        <div
          style={{ width: "150px", height: "150px", background: "gray" }}
          onClick={onClickImg}
        >
          이미지 선택
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          multiple
          ref={fileRef}
        />
        {/* cloud 기업의 주소를 앞에 넣어주아야 나온다. */}
        <img src={`https://storage.googleapis.com/${imgUrl}`} />
      </div>
    </>
  );
}
