import * as s from "./market.style";
import { IMarketIdPresenterProps } from "./market.type";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MarketIdPresenterrPage(props: IMarketIdPresenterProps) {
  console.log(props.data);

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
            <s.HeadIcon>
              <img src="/borad/map.png" />
            </s.HeadIcon>
          </s.HeadBox>
        </s.Head>
        <s.Body>
          <s.BodyTitle>{props.data?.fetchUseditem.name}</s.BodyTitle>
          <s.BodyPrice>{props.data?.fetchUseditem.price}</s.BodyPrice>
          <s.BodyImage>
            {/* <s.Slider1 {...settings}> */}
            {/* {props.data?.fetchUseditem.images?.map((el: any) => (
                <>
                  <div key={el}>
                    <s.Img src={`https://storage.googleapis.com/${el}`} />
                  </div>
                </>
              ))} */}
            {/* </s.Slider1> */}
            {props.data?.fetchUseditem.images?.map((el: string) => (
              <s.ImageBox key={el}>
                <s.Img
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
                />
              </s.ImageBox>
            ))}
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
      <s.UpdateMain>
        <s.UpdateBox>목록으로</s.UpdateBox>
        <s.UpdateBox>수정하기</s.UpdateBox>
      </s.UpdateMain>
    </>
  );
}
