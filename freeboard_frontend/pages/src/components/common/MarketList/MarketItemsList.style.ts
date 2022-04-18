import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const wrapper = styled.div`
  width: 1200px;
  margin: auto;
  padding-bottom: 40px;
`;

export const Search = styled.div`
  margin-bottom: 30px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px 19px;
  width: 600px;
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
  width: 97px;
  height: 24px;
  color: #bdbdbd;
  border: none;
  outline: none;
`;
export const SearchDateEnd = styled.input`
  padding-left: 8px;
  width: 97px;
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

export const RegisteBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  margin-bottom: 30px;
  width: 171px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const InnerWrapper = styled.div``;

export const ListBody = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: 1004px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  overflow: auto;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ListImageBox = styled.div`
  margin-right: 40px;
  width: 160px;
  height: 160px;
`;

export const ListInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ListInfoMainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 550px;
`;

export const InfoProductName = styled.div`
  margin-bottom: 4px;
  width: 100%;
  height: 36px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InfoProductRemakes = styled.div`
  margin-bottom: 8px;
  width: 100%;
  height: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InfoProductTags = styled.div`
  margin-bottom: 24px;
  width: 100%;
  height: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InfoSellerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InfoSellerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  width: 20px;
  height: 20px;
`;

export const InfoSellerName = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Heart = styled(HeartFilled)`
  color: #ffd600;
  font-size: 20px;
`;

export const PickedCount = styled.span`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const ListInfoPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 36px;
`;

export const ListInfoPriceIcon = styled.div`
  margin-right: 11px;
  width: 18px;
  height: 18px;
  color: #c92a1f;
`;

export const ListInfoPrice = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const ProductImage = styled.img`
  width: 160px;
  height: 160px;
`;
