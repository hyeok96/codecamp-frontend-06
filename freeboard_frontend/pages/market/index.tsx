import MarketItemsContainerPage from "../src/components/common/MarketList/MarketItemsList.container";
import MarketListContanierPage from "../src/components/market/list/MarketList.container";
import SeeUseditemContainerPage from "../src/components/market/seeUseditem/seeUsetitem.container";

export default function MarketListPresenterPage() {
  return (
    <>
      <MarketListContanierPage />
      <MarketItemsContainerPage />
      <SeeUseditemContainerPage />
    </>
  );
}
