import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../src/commons/store";
import GlobalStateContainer from "../src/components/units/board/21-global-state/BoardWrite.container";

export default function GlobalStatePage() {
  const [isEidt, setIsEidt] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEidt(true);
  }, []);

  return <GlobalStateContainer />;
}
