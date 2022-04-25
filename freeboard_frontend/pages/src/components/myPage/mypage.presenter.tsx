import { useState } from "react";
import * as s from "./mypage.stlye";
import { IMyPagePresenterProps } from "./mypage.type";

export default function MyPagePresenter(props: IMyPagePresenterProps) {
  return (
    <s.Wrapper>
      <s.ProfileWrapper>
        <s.ProfileTitle>MYPAGE</s.ProfileTitle>
        <s.ProfileIcon>
          <s.Img src="/mypage.png" />
        </s.ProfileIcon>
        <s.ProfileName>노원두</s.ProfileName>
        <s.ChargingBox>
          <s.ChargingIcon>
            <s.Img2 src="/pig.png" />
          </s.ChargingIcon>
          <s.ChargingMoney>100,000</s.ChargingMoney>
        </s.ChargingBox>
        <s.MyCartBox>
          <s.MyCartIcon>
            <s.Img2 src="/myCart.png" />
          </s.MyCartIcon>
          <s.MyCart>내 장터</s.MyCart>
        </s.MyCartBox>
        <s.PointBox>
          <s.PointIcon>
            <s.Img2 src="/point.png" />
          </s.PointIcon>
          <s.Point>내 포인트</s.Point>
        </s.PointBox>
        <s.ProfieBox>
          <s.ProIcon onClick={props.onClickShowProfile}>
            <s.Img2 src="/mypage.png" />
          </s.ProIcon>
          <s.Profie>내 프로필</s.Profie>
        </s.ProfieBox>
      </s.ProfileWrapper>
    </s.Wrapper>
  );
}
