import { ChangeEvent, useState } from "react";
import MarketPresenterPage from "./MarketNew.Presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "../MarketQurey/index";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../common/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMarketNewContainerProps } from "./MarketNew.type";

export default function MarketNewContainerpage(
  props: IMarketNewContainerProps
) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  // const [productInput, setProductInput] = useRecoilState(ProductInputState);

  const [imgUrl, setImgUrl] = useState([]);
  const [address, setAddress] = useState("");

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const onClickCreateUsedItem = async (data: any) => {
    const { price, addressDetail, ...rest } = data;
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            price: Number(price),
            ...rest,
            images: [...imgUrl],
            useditemAddress: {
              address,
              addressDetail,
            },
          },
        },
      });
      setAddress("");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleComplete = (data: any) => {
    showModal();
    setAddress(data.address);
  };

  const onChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    try {
      const result = await uploadFile({
        variables: { file },
      });

      setImgUrl((prev) => [...prev, result.data.uploadFile.url]);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateUseditem = async (data: any) => {
    const { price, addressDetail, ...rest } = data;
    const myVariables: IMutationUpdateUseditemArgs = {
      useditemId: String(router.query.id),
      updateUseditemInput: {},
    };

    const currentImage = JSON.stringify(imgUrl);
    const defaultImage = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangeImage = currentImage !== defaultImage;

    if (rest.name !== "") myVariables.updateUseditemInput.name = rest.name;
    if (rest.remarks !== "")
      myVariables.updateUseditemInput.remarks = rest.remarks;
    if (price !== "") myVariables.updateUseditemInput.price = Number(price);
    if (rest.contents !== "")
      myVariables.updateUseditemInput.contents = rest.contents;
    if (address !== "" || addressDetail !== "")
      myVariables.updateUseditemInput.useditemAddress = {};
    if (address !== "")
      myVariables.updateUseditemInput.useditemAddress.address = address;
    if (addressDetail !== "")
      myVariables.updateUseditemInput.useditemAddress.addressDetail =
        addressDetail;
    if (isChangeImage && imgUrl.length >= 1) {
      myVariables.updateUseditemInput.images = imgUrl;
    }

    try {
      const result = await updateUseditem({
        variables: myVariables,
      });
      router.push(`/market/${router.query.id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <MarketPresenterPage
      isEdit={props.isEdit}
      data={props.data}
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleComplete={handleComplete}
      onClickCreateUsedItem={onClickCreateUsedItem}
      onChangeImg={onChangeImg}
      imgUrl={imgUrl}
      address={address}
      onClickUpdateUseditem={onClickUpdateUseditem}
    />
  );
}
