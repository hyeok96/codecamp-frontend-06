import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto 0;
  display: flex;
  padding: 52px 360px;
  width: 100%;
  background-color: #0d1c4a;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto 0;
`;
export const Logo = styled.div`
  width: 200px;
  height: 48px;
`;

export const LogoImag = styled.img`
  width: 150px;
  height: 150px;
  z-index: 1;
  position: absolute;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 48px;
`;

export const ProfileImg = styled.div`
  width: 48px;
  height: 48px;
`;

export const ProfileMore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

// 회원정보

export const TolTip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
  width: 258px;
  height: 226px;
  background: #ffffff;
  border-radius: 16px;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
`;

export const TolTipInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #000000;
  padding-bottom: 24px;
`;

export const TolTipInfoIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: aqua;
`;

export const TolTipInfoNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TolTipInfoName = styled.div`
  width: 45px;
  height: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const TolTipInfoMoney = styled.div`
  width: 150px;
  height: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
`;

export const TolTipCharging = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 22px 0 20px 0;
  border-bottom: 1px solid #efefef;
`;

export const TolTipLogout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 22px 0 20px 0;
`;
