import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../LayoutHeader/LayoutHeader.Query";
import ChargingPresenterPage from "./charging.presenter";
import Head from "next/head";
import { CREATE_POINT_TRANSACTION_LOADING } from "./charging.query";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../common/types/generated/types";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ChargingContainerPage(props: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [createPointCharging] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_LOADING);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const requestPay = (el: any) => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        name: "충전",
        amount: el.price,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "강남구",
        buyer_postcode: "01181",
        // 모바일에 경우 결제 후 이동 페이지 설정
        m_redirect_url: "http://localhost:3000/market",
      },
      async (rsp: any) => {
        if (rsp.success) {
          // 백엔드에 결제 관련 데이터 넘겨주기 뮤테이션 실행하기 createPointTransactionOfLoading 포인트 충전하기
          await createPointCharging({
            variables: {
              impUid: String(rsp.imp_uid),
            },
            // refetchQueries: [
            //   {
            //     query: FETCH_USER_LOGGED_IN,
            //   },
            // ],
          });
          console.log(rsp);
          alert("결제가 성공적으로 완료되었습니다.");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <ChargingPresenterPage
        requestPay={requestPay}
        setModal={props.setModal}
      />
    </>
  );
}
