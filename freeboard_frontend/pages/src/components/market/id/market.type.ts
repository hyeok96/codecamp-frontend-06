export interface IMarketIdPresenterProps {
  data: any;
  onClickDeleteUseditem: (el: string) => () => void;
  loginData: any;
  onClickBuyUseditem?: (id: string) => () => void;
}
