import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 196px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  position: fixed;
  right: 50px;
  top: 500px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
`;

export const UseditemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 199px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;

export const UseditemImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;
  height: 60px;
`;

export const UseditemName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 12px;
  width: 100%;
  height: 18px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UseditemRemarks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 4px;
  width: 100%;
  height: 18px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UseditemPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 8px;
  width: 100%;
  height: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UseditemTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 15px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #bdbdbd;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
`;
