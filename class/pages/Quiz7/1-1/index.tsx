import axios from "axios";
import { useState } from "react";

export default function QuizPage() {
  const [state, setState] = useState([]);

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];
      console.log(num);
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const userId = res.target.response.UserId;
        console.log(userId);
        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          console.log(res);
          setState(res.target.response.data);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200%22")
      .then((res: any) => {
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res);
        setState(res.data);
      });
  };

  console.log(state);

  const onClickAsyncawait = async () => {
    const aaa = await axios.get(
      "http://numbersapi.com/random?min=1&max=200%22"
    );
    console.log(aaa);
    const num = aaa.data.split(" ")[0];
    const bbb = await axios.get(`http://koreanjson.com/posts/${num}`);
    console.log(bbb);
    const userId = bbb.data.UserId;
    const ccc = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    console.log(ccc);
    setState(ccc.data);
  };

  return (
    <div>
      <button onClick={onClickCallback}>callback</button>
      <button onClick={onClickPromise}>promise</button>
      <button onClick={onClickAsyncawait}>async/await </button>
      {state.map((el: any) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
}
