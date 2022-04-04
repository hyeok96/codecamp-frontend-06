import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function aaa() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    alert("Rendered!!");
    inputRef.current?.focus();
    return () => {
      alert("Bye!!!");
    };
  }, []);

  useEffect(() => {
    alert("Change!!");
  }, [isChange]);

  const onClickChange = () => {
    setIsChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };
  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <input type="text" ref={inputRef} />
    </>
  );
}
