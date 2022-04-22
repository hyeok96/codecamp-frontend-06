import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const router = useRouter();
  const [pay, setPay] = useState(0);

  const onClickPayBtn = (pay: number) => () => {
    setPay(pay);
    console.log(pay);
  };

  const requestPay = () => {
    // IMP.request_pay(param, callback) 결제창 호출
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp53307926");

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: pay,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/Quiz6/4day",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          router.push("/Quiz6/4day/complete");
        } else {
          // 결제 실패 시 로직,
          alert("실패");
        }
      }
    );
  };

  return (
    <div>
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
      <div onClick={onClickPayBtn(500)}>500원</div>
      <div onClick={onClickPayBtn(1000)}>1000원</div>
      <div onClick={onClickPayBtn(2000)}>2000원</div>
      <div onClick={onClickPayBtn(5000)}>5000원</div>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
