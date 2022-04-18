import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../store/index";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToBoard = (path) => () => {
    setVisitedPage(path);
    router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToBoard,
  };
}
