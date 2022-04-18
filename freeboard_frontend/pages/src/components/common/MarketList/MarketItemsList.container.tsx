import MarketItemsListPresenterPage from "./MarketItemsList.presenter";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../common/types/generated/types";
import { FETCH_USED_ITEMS } from "../../market/MarketQurey";
import { ChangeEvent, MouseEvent } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

export default function MarketItemsContainerPage() {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

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

  const onClickMoveDetailPage = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${(e.currentTarget as HTMLDivElement).id}`);
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
    />
  );
}
