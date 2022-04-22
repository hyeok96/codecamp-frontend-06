import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS_OF_THE_BEST } from "../MarketQurey";
import MarketListPresenterPage from "./MarketList.Presenter";

export default function MarketListContanierPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  return <MarketListPresenterPage data={data} />;
}
