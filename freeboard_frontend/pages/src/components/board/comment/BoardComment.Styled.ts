import styled from "@emotion/styled";

export const Comment = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  width: 1200px;
  /* border-top: 1px solid #bdbdbd; */
`;

export const Input2 = styled.input`
  width: 200px;
  border: none;
  outline: none;
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
  width: 100px;
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

export const CommentFooterNameDeleteIcon = styled.div`
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
  width: 80px;
  height: 18px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #bdbdbd;
`;

// 수정페이지

export const EditInput = styled.input`
  padding: 4px;
  width: 50%;
  border: none;
`;

export const InfiniteScroller = styled.div`
  width: 1200px;
  height: 700px;
  overflow: auto;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 80px auto 0 auto;
  width: 1200px;
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

export const CommentWriteInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

export const CommentBodyWriteSubmitBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const CommentInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  height: 100%;
`;

export const CommentInput = styled.input`
  margin-right: 20px;
  padding: 0 4px;
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
`;
