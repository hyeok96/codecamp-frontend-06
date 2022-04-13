export default function Page() {
  const onClickBtn = (el: any) => () => {
    console.log(el);
  };

  return <button onClick={onClickBtn(123)}>임의의 버튼</button>;
}
