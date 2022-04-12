import { useState } from "react";
// export default function Presenter(props: any) {
//   return <div>{props.child}</div>;
// }

export default function Presenter(props: any) {
  const [age, setAge] = useState(13);

  const onClickBtn = () => {
    setAge((prev) => prev + 1);
  };

  return (
    <>
      <div>
        {props.child}는 {age}살 입니다.
      </div>
      <button onClick={onClickBtn}>올리기</button>
    </>
  );
}
