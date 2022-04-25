import * as s from "./market.style";
import { IMarketIdPresenterProps } from "./market.type";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMoveToPage } from "../../../common/utils/moveToPage";
import { useRouter } from "next/router";
import { Tooltip } from "antd";
import { imageError } from "../../../common/utils/utils";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketIdPresenterrPage(props: IMarketIdPresenterProps) {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const text = (
    <span>
      {props.data?.fetchUseditem.useditemAddress?.address}
      {props.data?.fetchUseditem.useditemAddress?.addressDetail}
    </span>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress?.address,
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
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${props.data?.fetchUseditem.useditemAddress?.address}</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data?.fetchUseditem.useditemAddress?.address]);

  return (
    <>
      <s.Wrapper>
        <s.Head>
          <s.HeadBox>
            <s.HeadProfile>
              <img src="/borad/Vector.png" />
            </s.HeadProfile>
            <s.HeadNameBox>
              <s.HeadName>{props.data?.fetchUseditem.seller?.name}</s.HeadName>
              <s.HeadDate>
                {props.data?.fetchUseditem.createdAt.slice(0, 10)}
              </s.HeadDate>
            </s.HeadNameBox>
          </s.HeadBox>
          <s.HeadBox>
            <s.HeadIcon>
              <img src="/borad/file.png" />
            </s.HeadIcon>
            <Tooltip placement="top" title={text}>
              <s.HeadIcon>
                <img src="/borad/map.png" />
              </s.HeadIcon>
            </Tooltip>
          </s.HeadBox>
        </s.Head>
        <s.Body>
          <s.BodyTitle>{props.data?.fetchUseditem.name}</s.BodyTitle>
          <s.BodyPrice>{props.data?.fetchUseditem.price}</s.BodyPrice>
          <s.BodyImage>
            <s.Slider1 {...settings}>
              {props.data?.fetchUseditem.images?.map((el: string) => (
                <s.Div key={uuidv4()}>
                  <s.Img
                    src={`https://storage.googleapis.com/${el}`}
                    onError={imageError}
                  />
                </s.Div>
              ))}
            </s.Slider1>
          </s.BodyImage>
          <s.BodyText>{props.data?.fetchUseditem.contents}</s.BodyText>
          <s.BodyTag>
            {props.data?.fetchUseditem.tags.map((el: string) => (
              <s.TagSpan key={uuidv4()}>{el}</s.TagSpan>
            ))}
          </s.BodyTag>
          <s.BodyMap id="map"></s.BodyMap>
        </s.Body>
      </s.Wrapper>
      {props.data?.fetchUseditem.seller._id ===
        props.loginData?.fetchUserLoggedIn._id && (
        <s.UpdateMain>
          <s.UpdateBox onClick={onClickMoveToPage(`/market`)}>
            목록으로
          </s.UpdateBox>
          <s.UpdateBox
            onClick={onClickMoveToPage(`/market/${router.query.id}/edit`)}
          >
            수정하기
          </s.UpdateBox>
          <s.UpdateBox
            onClick={props.onClickDeleteUseditem(props.data?.fetchUseditem._id)}
          >
            삭제하기
          </s.UpdateBox>
        </s.UpdateMain>
      )}
      {props.data?.fetchUseditem.seller._id !==
        props.loginData?.fetchUserLoggedIn._id && (
        <s.UpdateMain>
          <s.UpdateBox onClick={onClickMoveToPage(`/market`)}>
            목록으로
          </s.UpdateBox>
          <s.UpdateBox
            onClick={props.onClickBuyUseditem(props.data?.fetchUseditem._id)}
          >
            구매하기
          </s.UpdateBox>
        </s.UpdateMain>
      )}
    </>
  );
}
