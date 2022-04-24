import styled from "@emotion/styled";
import { IMarketStyleProps } from "./MarketNew.type";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  padding: 60px 103px 0px 101px;
  margin: 80px auto 0 auto;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const Div3 = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;

export const Div4 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Div5 = styled.div`
  padding: 40px 0px 100px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerDiv = styled.div`
  padding-right: 24px;
`;

export const InnerDiv2 = styled.div`
  padding-right: 24px;
`;

export const UploadDiv = styled.div`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  color: #4f4f4f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

export const UploadImg = styled.img`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  color: #4f4f4f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

export const MapDiv = styled.div`
  width: 384px;
  height: 252px;
  margin-right: 24px;
`;

export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 252px;
`;

export const Input7 = styled.input`
  width: 77px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  margin-right: 16px;
  color: #bdbdbd;
`;

export const ProductInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 100%;
  height: 52px;
  padding-left: 10px;
`;

export const AddressInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 588px;
  height: 52px;
  padding-left: 10px;
`;

export const CheckInput = styled.input`
  color: yellow;
`;

// Button

export const Btn1 = styled.button`
  width: 77px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  margin-right: 16px;
  background-color: #bdbdbd;
`;

export const Btn2 = styled.button`
  width: 124px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  background: #000000;
  color: #ffffff;
`;

export const Btn3 = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 60px;
  width: 179px;
  height: 52px;
  background-color: ${(props: IMarketStyleProps) =>
    props.activeBtn ? "#c92a1f" : "none"};
`;

// 기타
export const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  padding-bottom: 80px;
`;

export const MenuTitle = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
`;

export const ProductText = styled.textarea`
  width: 996px;
  height: 268px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
  padding-top: 14px;
`;

export const AddressBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  width: 124px;
  height: 52px;
  background: #000000;
  color: #ffffff;
`;
