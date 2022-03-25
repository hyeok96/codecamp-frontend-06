import styled from "@emotion/styled";

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
export const Comment = styled.div`
  padding-top: 40px;
  width: 1200px;
  border-top: 1px solid #bdbdbd;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-bottom: 40px;
`;
export const CommentHeaderIcon = styled.div`
  margin-right: 14px;
  width: 24px;
  height: 24px;
`;

export const CommentHeaderText = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentBodyInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
`;

export const CommentBodyInfoRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  height: 52px;
`;

export const CommentBodyInfoRatingStar = styled.div`
  margin-right: 4px;
  width: 20px;
  height: 20px;
`;

export const CommentBodyWriteBox = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;

export const CommentBodyWrite = styled.div`
  padding: 20px;
  width: 100%;
  height: 108px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  color: #bdbdbd;
`;

export const CommentWriteInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

export const CommentBodyWriteSubmitBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 52px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
`;

export const CommentBodyWriteSubmit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  width: 91px;
  height: 52px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  background: #000000;
  color: #fff;
`;

export const CommentFooter = styled.div`
  padding-top: 40px;
  width: 1200px;
`;

export const CommentFooterBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #bdbdbd; ;
`;

export const CommentFooterProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 16px;
  width: 40px;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentFooterProfile = styled.div`
  width: 40px;
  height: 40px;
`;

export const CommentFooterMultiBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CommentFooterNameBox = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  width: 100%;
`;
export const CommentFooterNameRating = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CommentFooterNameRatingName = styled.div`
  width: 45px;
  height: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

export const CommentFooterNameRatingBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentFooterNameUpdate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const CommentFooterNameUpdateIcon = styled.div`
  margin-left: 8px;
  width: 24px;
  height: 24px;
`;

export const CommentFooterText = styled.div`
  width: 100%;
`;

export const CommentFooterDate = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  width: 60px;
  height: 18px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #bdbdbd;
`;
