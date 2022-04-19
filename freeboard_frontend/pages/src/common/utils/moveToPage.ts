import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { PrevPageState } from "../store";

export function useMoveToPage() {
  const router = useRouter();
  const [prevPage, setPrevPage] = useRecoilState(PrevPageState);

  const onClickMoveToPage = (path: any) => () => {
    setPrevPage(path);
    router.push(path);
  };

  return { onClickMoveToPage, prevPage };
}
