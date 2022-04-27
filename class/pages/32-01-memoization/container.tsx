import { useCallback, useMemo, useState } from "react";
import MemoizatonPresenterPage from "./presenter";

export default function MemoizatonContainerPage() {
  console.log("container가 랜더링 됩니다");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), [countState]);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    // countLet = countLet+1
    countLet += 1;
  }, []);

  // useCallback이 함수를 기억하는데 그 안에 countState까지 기억을 해버리는 문제가 생김(주의해야 함, 이 안에서 state를 사용하는 것을 지양)
  // const onClickCountState = useCallback(() => {
  //   console.log(countState + 1);
  //   // 해결책으로 (prev) => 시용하기
  //   setCountState((prev) => prev + 1);
  // }, []);

  // 다시 만들어질 필요가 없는 함수에 useCallback 사용
  // 디펜던시 어레이가 많이 들어가는 경우는 useCallback를 쓰지 말아야 한다.(디펜던시 어레이가 커질 경우)

  // useMemo로 useCallback 만들어 보기
  // return 값을 기억
  const onClickCountState = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <div>
      <div>==========================</div>
      <h1>이것은 컨테이너입니다!!!</h1>

      <div>카운트(let): {countLet}</div>
      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountLet}>카운트(let) + 1 올리기</button>
      <button onClick={onClickCountState}>카운트(state) + 1 올리기</button>
      <div>==========================</div>
      <MemoizatonPresenterPage countState={countState} />
    </div>
  );
}
