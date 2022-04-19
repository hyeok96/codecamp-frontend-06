import ImagePresenterPage from "../../common/UseditemsImg/Image.presenter";
import * as s from "./MarketNew.style";
import { Modal } from "antd";
import { IMarketNewPresenterProps } from "./MarketNew.type";
import DaumPostcode from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { ProductInputState } from "../../../common/store";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function MarketPresenterPage(props: IMarketNewPresenterProps) {
  const { register, handleSubmit } = useForm();
  const imgRef = useRef(null);
  const onClickIng = () => {
    imgRef.current.click();
  };

  return (
    <form
      onSubmit={handleSubmit(
        props.isEdit ? props.onClickUpdateUseditem : props.onClickCreateUsedItem
      )}
    >
      <s.Wrapper>
        <s.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</s.Title>
        <s.Div2>
          <s.MenuTitle>상품명</s.MenuTitle>
          <s.ProductInput
            {...register("name")}
            defaultValue={props.data?.fetchUseditem.name}
          />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>한줄요약</s.MenuTitle>
          <s.ProductInput
            {...register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>상품설명</s.MenuTitle>
          <s.ProductText
            {...register("contents")}
            defaultValue={props.data?.fetchUseditem.contents}
          />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>판매가격</s.MenuTitle>
          <s.ProductInput
            {...register("price")}
            defaultValue={props.data?.fetchUseditem.price}
          />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>태그</s.MenuTitle>
          <s.ProductInput />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>거래위치</s.MenuTitle>
          <s.Div3>
            <s.MapDiv></s.MapDiv>
            <s.AddressDiv>
              <s.Div4>
                <s.MenuTitle>주소</s.MenuTitle>
                <s.AddressBtn type="button" onClick={props.showModal}>
                  주소 검색
                </s.AddressBtn>
                <s.AddressInput
                  value={
                    props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address
                  }
                  readOnly
                />
                <s.AddressInput
                  {...register("addressDetail")}
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.addressDetail
                  }
                />
                {props.isModalVisible && (
                  <Modal
                    title="주소검색"
                    visible={props.isModalVisible}
                    onOk={props.showModal}
                    onCancel={props.showModal}
                  >
                    <DaumPostcode onComplete={props.handleComplete} />
                  </Modal>
                )}
              </s.Div4>
            </s.AddressDiv>
          </s.Div3>
        </s.Div2>
        <s.Div2>
          <>
            <s.UploadDiv onClick={onClickIng}></s.UploadDiv>
            <input
              type="file"
              style={{ display: "none" }}
              {...register("images")}
              ref={imgRef}
              onChange={props.onChangeImg}
            />
          </>
          {props.imgUrl.map((el: any) => (
            <>
              <s.UploadImg src={`https://storage.googleapis.com/${el}`} />
            </>
          ))}
          {props.data?.fetchUseditem.images.map((el: any) => (
            <>
              <s.UploadImg src={`https://storage.googleapis.com/${el}`} />
            </>
          ))}
        </s.Div2>
        <s.Div5>
          <s.Btn3>{props.isEdit ? "수정하기" : "등록하기"}</s.Btn3>
        </s.Div5>
      </s.Wrapper>
    </form>
  );
}
