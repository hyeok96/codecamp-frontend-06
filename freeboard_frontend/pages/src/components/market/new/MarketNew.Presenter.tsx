import ImagePresenterPage from "../../common/Image/Image.presenter";
import * as s from "./MarketNew.style";

import { IMarketNewPresenterProps } from "./MarketNew.type";

export default function MarketPresenterPage(props: IMarketNewPresenterProps) {
  return (
    <>
      <s.Wrapper>
        <s.Title>상품 등록하기</s.Title>
        <s.Div2>
          <s.MenuTitle>상품명</s.MenuTitle>
          <s.ProductInput onChange={props.onChangeProcutInput} name="name" />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>한줄요약</s.MenuTitle>
          <s.ProductInput onChange={props.onChangeProcutInput} name="remarks" />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>상품설명</s.MenuTitle>
          <s.ProductText onChange={props.onChangeProcutInput} name="contents" />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>판매가격</s.MenuTitle>
          <s.ProductInput onChange={props.onChangeProcutInput} name="price" />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>태그</s.MenuTitle>
          <s.ProductInput onChange={props.onChangeProductTag} name="tags" />
        </s.Div2>
        <s.Div2>
          <s.MenuTitle>거래위치</s.MenuTitle>
          <s.Div3>
            <s.MapDiv></s.MapDiv>
            <s.AddressDiv>
              <s.Div4>
                <s.MenuTitle>주소</s.MenuTitle>
                <s.AddressInput
                  onChange={props.onChangeProductAddress}
                  name="address"
                />
                <s.AddressInput
                  onChange={props.onChangeProductAddress}
                  name="addressDetail"
                />
              </s.Div4>
            </s.AddressDiv>
          </s.Div3>
        </s.Div2>
        <ImagePresenterPage
          onChangeUseditemImage={props.onChangeUseditemImage}
          isUseditem={true}
        />
        <s.Div5>
          <s.Btn3 onClick={props.onClickCreateUseditem}>등록하기</s.Btn3>
        </s.Div5>
      </s.Wrapper>
    </>
  );
}
