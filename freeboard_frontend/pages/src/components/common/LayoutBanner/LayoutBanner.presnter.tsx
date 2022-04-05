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
          <s.BannerImg src="/Banner/aaa.jpeg" />
        </s.Div>
        <s.Div>
          <s.BannerImg src="/Banner/ccc.webp" />
        </s.Div>
      </s.Slider1>
    </s.Wrapper>
  );
}
