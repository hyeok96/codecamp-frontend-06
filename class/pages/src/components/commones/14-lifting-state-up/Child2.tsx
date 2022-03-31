export default function Child2Page(props: any) {
  return (
    <div>
      <div>자식2의 카운트:{props.count}</div>
      <button onClick={props.onClickCount}>카운트올리기</button>
    </div>
  );
}
