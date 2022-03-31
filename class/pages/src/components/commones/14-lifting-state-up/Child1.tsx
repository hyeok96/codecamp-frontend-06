export default function Child1Page(props: any) {
  const aaa = () => {
    props.setCount((prev: any) => prev + 1);
  };

  return (
    <div>
      <div>자식1의 카운트:{props.count}</div>
      <button onClick={aaa}>카운트올리기</button>
    </div>
  );
}
