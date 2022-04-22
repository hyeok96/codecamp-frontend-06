import { gql, useQuery } from "@apollo/client";
import MarketItemsContainerPage from "../src/components/common/MarketList/MarketItemsList.container";
import MarketListContanierPage from "../src/components/market/list/MarketList.container";
import SeeUseditemContainerPage from "../src/components/market/seeUseditem/seeUsetitem.container";

const FETCH_USED_ITEMS_IBOUGHT = gql`
  query fetchUseditemsIBought {
    fetchUseditemsIBought {
      _id
      name
      price
    }
  }
`;

export default function MarketListPresenterPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_IBOUGHT);

  console.log(data);

  return (
    <>
      <MarketListContanierPage />
      <MarketItemsContainerPage />
      <SeeUseditemContainerPage />
    </>
  );
}
