import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
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

export default function ImgaeUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

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
  );
}
