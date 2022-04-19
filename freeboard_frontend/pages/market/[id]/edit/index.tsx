import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/common/types/generated/types";
import { FETCH_USED_ITEM } from "../../../src/components/market/MarketQurey/index";
import MarketNewContainerpage from "../../../src/components/market/new/MarketNew.container";

function MarketPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.id),
    },
  });

  console.log(data);

  return <MarketNewContainerpage isEdit={true} data={data} />;
}

export default MarketPage;
