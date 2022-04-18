import MarketItemsContainerPage from "../src/components/common/MarketList/MarketItemsList.container";
import MarketListContanierPage from "../src/components/market/list/MarketList.container";

export default function MarketListPresenterPage() {
  return (
    <>
      <MarketListContanierPage />
      <MarketItemsContainerPage />
    </>
  );
}
