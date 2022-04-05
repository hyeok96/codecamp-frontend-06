import { useEffect, useState } from "react";
import axios from "axios";

export default function aaa() {
  const [api, setApi] = useState("");

  useEffect(() => {
    const bbb = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setApi(result.data.message);
    };
    bbb();
  }, []);

  return (
    <>
      <div>api</div>
      <img src={api} />
    </>
  );
}
