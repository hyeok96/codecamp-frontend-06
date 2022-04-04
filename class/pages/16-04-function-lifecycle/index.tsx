import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function counterPage() {
  // inputRef = createRef<HTMLInputElement>();
  // state = {
  //   count: 0,
  // };
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const [count, setCount] = useState(0);

  // componentDidMount() {
  //   // render 후 실행
  //   console.log("미운트됨");
  //   this.inputRef.current?.focus();
  //   // 포커스가 깜빡거리게 할 때
  // }

  // 1. conponentDidMount
  // useEffect(() => {
  //   console.log("미운트됨");
  //   inputRef.current?.focus();
  // }, []);

  // 2. DidUpdate
  // componentDidUpdate() {
  //   // 리랜더 될 떄(state 변경될 때)
  //   console.log("수정이 되고 다시 그려짐");
  //   // 채팅방 나가기(백엔드에게 채팅방 나가기 api)
  // }

  // 2. DidUpdate
  useEffect(() => {
    console.log("수정되고 다시 그려짐");
  });

  // 3. WillUumount
  // componentWillUnmount() {
  //   //
  //   console.log("컴포넌트 사라짐!!");
  // }

  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!");
  //   };
  // }, []);

  // 4. DidMount와 WillUnmount를 합치기
  useEffect(() => {
    console.log("마운트 됨");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!");
    };
  }, []);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  // 5-1. useEffect의 잘목돤 사용 예 랜더 이후에 실행이 되기 때문에 한 번더 재 랜더링(불필요한)이 된다. 어쩔 수 없는 상황이 아니면 지양해라
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  // 5-2. 무한루프(주의)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  // 먼저 나온다. 이유는 위의 useEffect가 만들어지고 랜더 이후에 실행이 되기 때문에
  console.log("나는 언제 실행이 되게???");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
