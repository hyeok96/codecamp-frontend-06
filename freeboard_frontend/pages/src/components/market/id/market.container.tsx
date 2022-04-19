import { useMutation, useQuery } from "@apollo/client";
import { async } from "@firebase/util";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../common/types/generated/types";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "../MarketQurey";
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

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const onClickDeleteUseditem = (el: string) => async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: el,
        },
      });
      alert("게시글이 삭제되었습니다.");
      const barkets = JSON.parse(localStorage.getItem("baskets"));
      const newBarket = barkets.filter(
        (barketEl: IUseditem) => barketEl._id !== el
      );
      localStorage.setItem("baskets", JSON.stringify(newBarket));

      router.push("/market");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <MarketIdPresenterrPage
      data={data}
      onClickDeleteUseditem={onClickDeleteUseditem}
    />
  );
}
