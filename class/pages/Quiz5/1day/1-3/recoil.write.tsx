import { atom, useRecoilState } from "recoil";
import { isEditState } from "./recoil.edit";

export default function Write() {
  const [isEidt, setIsEdit] = useRecoilState(isEditState);

  return <div>{isEidt === true ? "수정하기" : "등록하기"}</div>;
}
