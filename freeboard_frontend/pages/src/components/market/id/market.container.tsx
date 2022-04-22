import { useMutation, useQuery } from "@apollo/client";
import { async } from "@firebase/util";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../common/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../common/LayoutHeader/LayoutHeader.Query";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
} from "../MarketQurey";
import MarketIdPresenterrPage from "./market.presenter";

export default function MarketIdContainerPage() {
  const router = useRouter();

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.id),
    },
  });

  const [buyUseditem] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

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

  const onClickBuyUseditem = (id: string) => async () => {
    try {
      const result = await buyUseditem({
        variables: {
          useritemId: id,
        },
        refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
      });
      alert("정상적으로 구매되었습니다.");
      console.log(result);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <MarketIdPresenterrPage
        data={data}
        onClickDeleteUseditem={onClickDeleteUseditem}
        loginData={loginData}
        onClickBuyUseditem={onClickBuyUseditem}
      />
    </>
  );
}
