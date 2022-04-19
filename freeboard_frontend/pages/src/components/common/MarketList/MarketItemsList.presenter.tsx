import * as s from "./MarketItemsList.style";
import { IMarketItemsListPresenterProps } from "./MarketItemsList.type";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketItemsListPresenterPage(
  props: IMarketItemsListPresenterProps
) {
  return (
    <s.wrapper>
      <s.Search>
        <s.SearchBox>
          <s.SearchBoxIcon></s.SearchBoxIcon>
          <s.SearchBoxInput
            placeholder="제목을 검색하세요"
            onChange={props.onChangeSearchUseditems}
          />
        </s.SearchBox>
        <s.SearchDate>
          <s.SearchDateStart placeholder="YYYY.MM.DD" /> ~
          <s.SearchDateEnd placeholder="YYYY.MM.DD" />
        </s.SearchDate>
        <s.SearchBtn>검색하기</s.SearchBtn>
      </s.Search>
      <s.ListBody>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditems.map((el: any) => (
            <s.ListBox
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveDetailPage(el)}
            >
              <s.ListImageBox>
                <s.ProductImage
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                />
              </s.ListImageBox>
              <s.ListInfoBox>
                <s.ListInfoMainBox>
                  <s.InfoProductName>{el.name}</s.InfoProductName>
                  <s.InfoProductRemakes>{el.remarks}</s.InfoProductRemakes>
                  <s.InfoProductTags>
                    {el.tags?.map((el: string) => (
                      <span key={el}>{el}</span>
                    ))}
                  </s.InfoProductTags>
                  <s.InfoSellerBox>
                    <s.InfoSellerIcon>
                      <s.Img src="/Layout/Vector.png" />
                    </s.InfoSellerIcon>
                    <s.InfoSellerName>{el.seller?.name}</s.InfoSellerName>
                    <s.Heart />
                    <s.PickedCount>{el.pickedCount}</s.PickedCount>
                  </s.InfoSellerBox>
                </s.ListInfoMainBox>
                <s.ListInfoPriceBox>
                  <s.ListInfoPriceIcon>₩</s.ListInfoPriceIcon>
                  <s.ListInfoPrice>{el.price}</s.ListInfoPrice>
                </s.ListInfoPriceBox>
              </s.ListInfoBox>
            </s.ListBox>
          ))}
        </InfiniteScroll>
      </s.ListBody>
      <s.RegisteBtn onClick={props.onClickMoveProductNewPage}>
        <img src="/list/register.png" />
        상품 등록하기
      </s.RegisteBtn>
    </s.wrapper>
  );
}
