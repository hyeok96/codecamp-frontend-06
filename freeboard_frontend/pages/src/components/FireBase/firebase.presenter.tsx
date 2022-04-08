import { IFirebasePresenterProps } from "./firebase.type";

export default function FireBasePresenterPage(props: IFirebasePresenterProps) {
  return (
    <>
      <input type="text" onChange={props.onChangeContents} />
      <button onClick={props.onCLickRegister}>등록하기</button>
      <button onClick={props.onClickFetch}>조회하기</button>
    </>
  );
}
