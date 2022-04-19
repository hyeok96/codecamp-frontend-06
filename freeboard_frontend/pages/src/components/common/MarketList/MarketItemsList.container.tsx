import MarketItemsListPresenterPage from "./MarketItemsList.presenter";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../common/types/generated/types";
import { FETCH_USED_ITEMS } from "../../market/MarketQurey";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import { useMoveToPage } from "../../../common/utils/moveToPage";

export default function MarketItemsContainerPage() {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const { onClickMoveToPage } = useMoveToPage();

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveDetailPage = (el: IUseditem) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);
    if (temp.length === 1) {
      router.push(`/market/${el._id}`);
      return;
    }

    const { __typename, ...rest } = el;
    baskets.push(rest);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    router.push(`/market/${el._id}`);
  };

  const onClickMoveProductNewPage = () => {
    router.push("/market/new");
  };

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });
  }, 200);

  const onChangeSearchUseditems = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  return (
    <MarketItemsListPresenterPage
      data={data}
      loadFunc={loadFunc}
      onClickMoveDetailPage={onClickMoveDetailPage}
      onClickMoveProductNewPage={onClickMoveProductNewPage}
      onChangeSearchUseditems={onChangeSearchUseditems}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
