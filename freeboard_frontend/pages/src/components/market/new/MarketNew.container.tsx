import { ChangeEvent } from "react";
import MarketPresenterPage from "./MarketNew.Presenter";
import { useRecoilState } from "recoil";
import { ProductInputState } from "../../../common/store";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "../MarketQurey/index";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../common/types/generated/types";
import { Modal } from "antd";

export default function MarketNewContainerpage() {
  const [productInput, setProductInput] = useRecoilState(ProductInputState);

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
      console.log(result);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <MarketPresenterPage
      onChangeProcutInput={onChangeProcutInput}
      onChangeProductAddress={onChangeProductAddress}
      onChangeProductTag={onChangeProductTag}
      onChangeProductImage={onChangeProductImage}
      onClickCreateUseditem={onClickCreateUseditem}
    />
  );
}
