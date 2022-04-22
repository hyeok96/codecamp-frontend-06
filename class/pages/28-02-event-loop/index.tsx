export default function EventLoopPagr() {
  const onClickTimer = () => {
    console.log("=========시작================");
    setTimeout(() => {
      console.log("1초 뒤에 실행될 거에요");
    }, 0);
    console.log("=========끝!================");
  };

  return <button onClick={onClickTimer}>setTimeout 실행시키기!!</button>;
}
