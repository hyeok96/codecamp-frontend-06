import Write from "./recoil.write";
import { atom, useRecoilState } from "recoil";
import { useEffect, useState } from "react";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export default function RecoilEditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  });

  return <Write />;
}
