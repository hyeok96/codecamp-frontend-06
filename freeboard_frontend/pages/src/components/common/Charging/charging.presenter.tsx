import { useForm } from "react-hook-form";
import { IChargingPresenterProps } from "./charging.type";
import * as s from "./charging.styles";

export default function ChargingPresenterPage(props: IChargingPresenterProps) {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(props.requestPay)}>
        <s.Wrapper>
          <s.Modal>
            <s.Title>포인트 충전하기</s.Title>
            <s.Input {...register("price")} />
            <s.BtnBox>
              <s.Btn>충전하기</s.Btn>
              <s.CanCelBtn type="button" onClick={() => props.setModal(false)}>
                취소하기
              </s.CanCelBtn>
            </s.BtnBox>
          </s.Modal>
        </s.Wrapper>
      </form>
    </>
  );
}
