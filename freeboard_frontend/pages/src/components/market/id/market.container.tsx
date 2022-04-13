import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../common/types/generated/types";
import { FETCH_USED_ITEM } from "../MarketQurey";
import MarketIdPresenterrPage from "./market.presenter";

export default function MarketIdContainerPage() {
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

  return <MarketIdPresenterrPage data={data} />;
}
