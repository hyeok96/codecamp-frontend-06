import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../src/commons/types/generated/types";
import { Modal } from "antd";
import { checkFileValidation } from "../src/commons/libraries/validation";

const UPLOADFILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImgaeValidationPage() {
  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

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

  return (
    <div>
      <input type="file" onChange={onChangeFile} multiple />
      <div>이미지 업로드 연습하기</div>
      {/* cloud 기업의 주소를 앞에 넣어주아야 나온다. */}
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </div>
  );
}
