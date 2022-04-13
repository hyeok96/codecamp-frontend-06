import { ChangeEvent } from "react";
import MarketPresenterPage from "./MarketNew.Presenter";
import { useRecoilState } from "recoil";
import { ProductInputState } from "../../../common/store";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPLOAD_FILE } from "../MarketQurey/index";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../common/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function MarketNewContainerpage() {
  const router = useRouter();
  const [productInput, setProductInput] = useRecoilState(ProductInputState);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeProcutInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "price") {
      setProductInput({
        ...productInput,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setProductInput({
        ...productInput,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onChangeProductAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setProductInput((prve) => ({
      ...prve,
      useditemAddress: {
        ...prve.useditemAddress,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const onChangeProductTag = (e: ChangeEvent<HTMLInputElement>) => {
    setProductInput((prve) => ({
      ...prve,
      tags: [...prve.tags, e.target.value],
    }));
  };

  const onChangeProductImage = (e: ChangeEvent<HTMLInputElement>) => {
    setProductInput((prve) => ({
      ...prve,
      images: [...prve.images, e.target.value],
    }));
  };

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const onClickCreateUseditem = async () => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...productInput,
          },
        },
      });
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onChangeUseditemImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    try {
      const result = await uploadFile({
        variables: { file },
      });

      setProductInput((prev) => ({
        ...prev,
        images: [...prev.images, result.data.uploadFile.url],
      }));
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <MarketPresenterPage
      onChangeProcutInput={onChangeProcutInput}
      onChangeProductAddress={onChangeProductAddress}
      onChangeProductTag={onChangeProductTag}
      onChangeProductImage={onChangeProductImage}
      onClickCreateUseditem={onClickCreateUseditem}
      onChangeUseditemImage={onChangeUseditemImage}
    />
  );
}
