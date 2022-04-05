import * as s from "./LayoutHeader.styled";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function HeaderPresenter(props: ILayoutHeaderProps) {
  return (
    <s.Wrapper>
      <s.Box>
        <s.Logo>
          <s.LogoImag
            src="/logo/arsenal2.svg"
            onClick={props.onClickMoveHome}
          />
        </s.Logo>
        <s.ProfileBox>
          <s.ProfileImg>
            <img src="/layout/Vector.png" />
          </s.ProfileImg>
          <s.ProfileMore>
            <img src="/layout/Polygon1.png" />
          </s.ProfileMore>
        </s.ProfileBox>
      </s.Box>
    </s.Wrapper>
  );
}
