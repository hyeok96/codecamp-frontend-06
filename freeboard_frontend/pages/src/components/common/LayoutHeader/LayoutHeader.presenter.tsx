import * as s from "./LayoutHeader.styled";

export default function HeaderPresenter() {
  return (
    <s.Wrapper>
      <s.Box>
        <s.Logo></s.Logo>
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
