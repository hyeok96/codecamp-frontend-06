import { Dispatch, SetStateAction } from "react";

export interface IChargingPresenterProps {
  requestPay: (data: any) => void;
  setModal: Dispatch<SetStateAction<boolean>>;
}
