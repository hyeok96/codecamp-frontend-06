import { useState } from "react";
import Child1Page from "../src/components/commones/14-lifting-state-up/Child1";
import Child2Page from "../src/components/commones/14-lifting-state-up/Child2";

export default function LiftiongStateUpPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {/* 방법1 */}
      <Child1Page count={count} setCount={setCount} />
      <div>=========================</div>
      {/* 방법 2 */}
      <Child2Page count={count} onClickCount={onClickCount} />
    </div>
  );
}
