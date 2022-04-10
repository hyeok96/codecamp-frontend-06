import styled from "@emotion/styled";
import { IProps } from "./BoardList.types";

export const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
`;

export const ListBox = styled.div``;

export const List = styled.div`
  margin-bottom: 30px;
  width: 100%;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const RowTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 11px 40px 14px;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #bdbdbd;
`;

export const RowListTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 11px 40px 14px;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #bdbdbd;
`;

export const RowBody = styled.div`
  width: 100%;
  height: 24px;
`;

export const HeadColNum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 10%;
`;

export const HeadColTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const HeadColWriter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const HeadColDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 23px;
  width: 10%;
`;

export const ColNum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  width: 10%;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const ColTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans CJK KR";
  width: 60%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ColWriter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans CJK KR";
  width: 20%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const ColDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-family: "Noto Sans CJK KR";
  width: 10%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "#dc2f21" : "black")};
`;
