import { memo } from "react";
// mome에 props를 넘겨주면 props가 변경이 되었을 때 memo가 자동으로 리랜더링이 된다. 그래서 props를 막 넘겨주게 되면 의미가 없어지니 잘 넘갸주어야 한다.
function MemoizatonPresenterPage(props) {
  console.log("프리젠터가 랜더링 됩니다.");
  return (
    <div>
      <div>==========================</div>
      <h1>이것은 프리젠터입니다.</h1>
      <div>==========================</div>
    </div>
  );
}

// 메모해 두었다가 갔다가 다시 씀 성능 최적화
export default memo(MemoizatonPresenterPage);
