import * as s from "./MarketList.style";
import { IMarketListPresneterProps } from "./MarketList.type";
import { imageError } from "../../../common/utils/utils";
import { v4 as uuid4 } from "uuid";

export default function MarketListPresenterPage(
  props: IMarketListPresneterProps
) {
  return (
    <s.Wrapper>
      <s.Best>
        <s.BestTilte>베스트 상품</s.BestTilte>
        <s.BestList>
          {props.data?.fetchUseditemsOfTheBest.map((el: any) => (
            <s.BestListBox key={uuid4()}>
              <s.BoardListBoxProductImage>
                <s.Image
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  onError={imageError}
                />
              </s.BoardListBoxProductImage>
              <s.BoardListBoxProductName>{el.name}</s.BoardListBoxProductName>
              <s.BoardListBoxBody>
                <s.BoardListBoxBodyProfile>
                  <s.BoxBodyProductremarks>
                    {el.remarks}
                  </s.BoxBodyProductremarks>
                  <s.BoxBodyProductPrice>{el.price}</s.BoxBodyProductPrice>
                </s.BoardListBoxBodyProfile>
                <s.BoardListBoxBodyIcon>
                  <s.LikeIcon>
                    <s.Heart />
                  </s.LikeIcon>
                  <s.LikeCount>{el.pickedCount}</s.LikeCount>
                </s.BoardListBoxBodyIcon>
              </s.BoardListBoxBody>
            </s.BestListBox>
          ))}
        </s.BestList>
      </s.Best>
    </s.Wrapper>
  );
}
