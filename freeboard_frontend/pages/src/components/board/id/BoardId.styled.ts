import styled from "@emotion/styled";
import { yellow } from "@material-ui/core/colors";
import { Input } from "antd";

export const Main = styled.div`
  margin-top: 50px;
  margin-left: 50px;
`;

//개시물 내용
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  width: 1200px;
  padding: 80px 120px;
  box-sizing: border-box;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
`;

export const HeadBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeadProfile = styled.div`
  width: 56px;
  height: 56px;
  margin-right: 16px;
`;

export const HeadNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeadName = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
`;

export const HeadDate = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #828282;
`;

export const HeadIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-left: 20px;
`;

export const Body = styled.div`
  width: 100%;
  padding-top: 80px;
`;

export const BodyTitle = styled.div`
  padding-bottom: 40px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #000000;
`;

export const BodyImage = styled.div`
  width: 100%;
  height: 480px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  background: #f2f2f2;
`;
export const BodyText = styled.div`
  width: 100%;
  padding-bottom: 120px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

export const BodyVideoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 123px;
  width: 100%;
`;

export const BodyVideo = styled.div`
  width: 486px;
  height: 240px;
  background: #f2f2f2;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const FooterLikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-right: 20px;
`;

export const FooterDisLikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-left: 20px;
`;
export const FooterLikeIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: #ffd600;
`;
export const FooterLikeCount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #ffd600;
`;
export const FooterDisLikeIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: #828282;
`;

export const FooterDisLikeCount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #828282;
`;

//게시물 업데이트

export const UpdateMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 87px;
  margin-top: 110px;
  width: 1200px;
`;
export const UpdateBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 60px;
  margin-right: 24px;
  width: 179px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;

//댓글
