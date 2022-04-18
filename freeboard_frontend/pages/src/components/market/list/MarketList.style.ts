import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

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
  padding-bottom: 40px;
`;

export const BestListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const BoardListBoxProductImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0 20px;
  width: 100%;
  height: 242px;
`;

export const BoardListBoxProductName = styled.div`
  padding: 0 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
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

export const BoxBodyProductremarks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
  text-align: center;
`;

export const Image = styled.img`
  width: 242px;
  height: 242px;
  outline: none;
`;

export const BoxBodyProductPrice = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
`;

export const BoardListBoxBodyIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeIcon = styled.div``;

export const LikeCount = styled.div``;

export const Heart = styled(HeartFilled)`
  color: #ffd600;
  font-size: 20px;
`;
