import * as s from "./LayoutBanner.Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerPresenter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <s.Wrapper>
      <s.Slider1 {...settings}>
        <s.Div>
          <s.H3>carousel Design</s.H3>
          <s.Text>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은
            공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은
            이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </s.Text>
        </s.Div>
        <s.Div></s.Div>
        <s.Div></s.Div>
        <s.Div></s.Div>
        <s.Div></s.Div>
        <s.Div></s.Div>
      </s.Slider1>
    </s.Wrapper>
  );
}
