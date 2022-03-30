import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 1200px;
`;

export const Best = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BestTilte = styled.div`
  padding-bottom: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  color: #000000;
`;

export const BestList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 80px;
`;

export const BestListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 257px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const BoardListBoxImage = styled.div`
  margin-bottom: 20px;
  width: 282px;
  height: 120px;
  background-color: gray;
  border-radius: 20px 20px 0 0;
`;

export const BoardListBoxTitle = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

export const BoardListBoxBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const BoardListBoxBodyProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxBodyProfileName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  text-align: center;
`;

export const Image = styled.img`
  padding-right: 6px;
`;

export const BoxBodyProfileDate = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #828282;
`;

export const BoardListBoxBodyIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeIcon = styled.div``;

export const LikeCount = styled.div``;

export const Search = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px 19px;
  width: 776px;
  height: 52px;
  background: #f2f2f2;
  border-radius: 10px;
  border: none;
`;

export const SearchBoxIcon = styled.div`
  height: 17px;
  width: 17px;
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 24px;
  color: #000000;
  border: none;
  outline: none;
  background-color: #f2f2f2;
`;

export const SearchDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  width: 244px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  color: #bdbdbd;
  text-align: center;
`;
export const SearchDateStart = styled.input`
  padding-right: 8px;
  width: 93px;
  height: 24px;
  color: #bdbdbd;
  border: none;
  outline: none;
`;
export const SearchDateEnd = styled.input`
  padding-left: 8px;
  width: 93px;
  height: 24px;
  color: #bdbdbd;
  border: none;
  outline: none;
`;

export const SearchBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  width: 94px;
  height: 52px;
  background: #000000;
  border-radius: 10px;
  color: white;
`;

export const ListBox = styled.div``;

export const List = styled.div`
  margin-bottom: 40px;
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
  border-bottom: 1px solid #bdbdbd; ;
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
  color: #4f4f4f;
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

export const ListPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const PageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PrevBtn = styled.div`
  padding-right: 20px;
`;

export const PageNum = styled.div`
  padding-right: 20px;
`;

export const PageNum2 = styled.div`
  padding-right: 20px;
  color: #ffd600;
`;

export const NextBtn = styled.div``;

export const RegisteBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  margin-left: 373px;
  width: 171px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 10px;
`;
