import { useMoveToPage } from "../src/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPagr() {
  const { onClickMoveToBoard } = useMoveToPage();

  return (
    <div>
      <button onClick={onClickMoveToBoard("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToBoard("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToBoard("/myPage")}>
        마이페이지으로 이동
      </button>
    </div>
  );
}
