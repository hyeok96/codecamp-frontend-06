import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/store";

export default function GlobalStatePresenter() {
  const [isEidt, setIsEdit] = useRecoilState(isEditState);

  return <div>{isEidt ? "수정하기" : "등록하기"}</div>;
}
