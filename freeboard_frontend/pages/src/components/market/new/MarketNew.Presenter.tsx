import * as s from "./MarketNew.style";
import { Modal } from "antd";
import { IMarketNewPresenterProps } from "./MarketNew.type";
import DaumPostcode from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import { FetchAddress } from "../../../common/store";

declare const window: typeof globalThis & {
  kakao: any;
};

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketPresenterPage(props: IMarketNewPresenterProps) {
  const { register, handleSubmit, setValue, trigger, reset, getValues } =
    useForm();
  const [center] = useRecoilState(FetchAddress);

  useEffect(() => {
    reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

  const onChangeContent = (value: string) => {
    setValue("contents", value === "<p><br><p>" ? "" : value);

    trigger("contents");
  };

  const imgRef = useRef(null);
  const onClickIng = () => {
    imgRef.current.click();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e669b301755c3ce0f861ac77068e7c83&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            props.isEdit ? center.getLat : 33.450701,
            props.isEdit ? center.getLng : 126.570667
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        console.log(props.isChange);

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${props.address}</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);
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
            defaultValue={props.data?.fetchUseditem.name || ""}
          />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>한줄요약</s.MenuTitle>
          <s.ProductInput
            {...register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks || ""}
          />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>상품설명</s.MenuTitle>
          <ReactQuill
            onChange={onChangeContent}
            value={getValues("contents") || ""}
          />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>판매가격</s.MenuTitle>
          <s.ProductInput
            {...register("price")}
            defaultValue={props.data?.fetchUseditem.price || ""}
          />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>태그</s.MenuTitle>
          <s.ProductInput {...register("tag")} />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>거래위치</s.MenuTitle>
          <s.Div3>
            <s.MapDiv id="map"></s.MapDiv>
            <s.AddressDiv>
              <s.Div4>
                <s.MenuTitle>주소</s.MenuTitle>
                <s.AddressBtn type="button" onClick={props.showModal}>
                  주소 검색
                </s.AddressBtn>
                <s.AddressInput
                  value={
                    props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address ||
                    ""
                  }
                  readOnly
                />
                <s.AddressInput
                  {...register("addressDetail")}
                  defaultValue={
                    props.data?.fetchUseditem.useditemAddress?.addressDetail ||
                    ""
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
          {props.imgUrl.length === 0 &&
            props.data?.fetchUseditem.images.map((el: any) => (
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
