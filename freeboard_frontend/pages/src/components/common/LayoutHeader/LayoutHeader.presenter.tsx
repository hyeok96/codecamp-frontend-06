import * as s from "./LayoutHeader.styled";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import ChargingContainerPage from "../Charging/charging.container";

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
        <s.ProfileWrapper>
          <s.ProfileBox onClick={props.onClickShowProfile}>
            <s.ProfileImg>
              <img src="/layout/Vector.png" />
            </s.ProfileImg>
            <s.ProfileMore>
              <img src="/layout/Polygon1.png" />
            </s.ProfileMore>
          </s.ProfileBox>
          {props.showProfile && (
            <s.TolTip>
              <s.TolTipInfo>
                {/* <s.TolTipInfoIcon></s.TolTipInfoIcon> */}
                <s.TolTipInfoNameBox>
                  <s.TolTipInfoName>
                    {props.data?.fetchUserLoggedIn.name}
                  </s.TolTipInfoName>
                  <s.TolTipInfoMoney>
                    {props.data?.fetchUserLoggedIn.userPoint.amount}
                  </s.TolTipInfoMoney>
                </s.TolTipInfoNameBox>
              </s.TolTipInfo>
              <s.TolTipCharging onClick={props.onClickModal}>
                충전하기
              </s.TolTipCharging>
              {props.Modal && (
                <ChargingContainerPage setModal={props.setModal} />
              )}
              <s.TolTipLogout onClick={props.onClickLogout}>
                로그아웃
              </s.TolTipLogout>
            </s.TolTip>
          )}
        </s.ProfileWrapper>
      </s.Box>
    </s.Wrapper>
  );
}
