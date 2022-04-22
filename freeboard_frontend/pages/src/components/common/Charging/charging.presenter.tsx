import { useForm } from "react-hook-form";
import { IChargingPresenterProps } from "./charging.type";
import Head from "next/head";

export default function ChargingPresenterPage(props: IChargingPresenterProps) {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(props.requestPay)}>
        <div>
          충전금액: <input {...register("price")} />
          <button>충전하기</button>
        </div>
      </form>
    </>
  );
}
