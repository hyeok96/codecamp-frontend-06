import * as s from "./market.style";
import { IMarketIdPresenterProps } from "./market.type";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMoveToPage } from "../../../common/utils/moveToPage";
import { useRouter } from "next/router";
import { Tooltip } from "antd";
import { imageError } from "../../../common/utils/utils";

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
            {/* {props.data?.fetchUseditem.images?.map((el: string) => (
              <s.ImageBox key={el}>
                <s.Img src={`https://storage.googleapis.com/${el}`} />
              </s.ImageBox>
            ))} */}
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
          <s.BodyMap></s.BodyMap>
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
