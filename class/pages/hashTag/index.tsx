import { useState } from "react";

export default function HasgATag() {
  const [hash, setHash] = useState("");
  const [hasharr, setHasharr] = useState<string[]>([]);

  const onKeyupHash = (e: any) => {
    // keyCode 32는 스패이스바
    if (e.keyCode === 32 && e.target.value !== "") {
      setHasharr([...hasharr, "#" + e.target.value]);
      // setHasharr((prev) => [
      //     ...prev,
      //     "#"+e.target.value
      // ])
      e.target.value = "";
    }
  };

  return (
    <>
      <span>
        {hasharr.map((el, index) => (
          <span key={index}>{el}</span>
        ))}
      </span>
      <input onKeyUp={onKeyupHash} type="text" />
    </>
  );
}
