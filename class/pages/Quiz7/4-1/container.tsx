import { useCallback, useMemo, useState } from "react";
import PresenterPage from "./presenter";

export default function ContainerPage() {
  let count1 = 0;
  const [count2, setCount2] = useState(0);

  const onClcickCount1 = useMemo(() => {
    return () => {
      count1 += 1;
    };
  }, []);

  const onClcickCount2 = useMemo(() => {
    return () => {
      console.log(count2 + 1);
      setCount2(count2 + 1);
    };
  }, []);

  //   const setState = (data) => {
  //     state = data
  //   }

  return (
    <div>
      <div>{count1}</div>
      <button onClick={onClcickCount1}>let 올리기</button>
      <div>============================================</div>
      <div>{count2}</div>
      <button onClick={onClcickCount2}>state 올리기</button>
      <div>============================================</div>
      <PresenterPage />
    </div>
  );
}
