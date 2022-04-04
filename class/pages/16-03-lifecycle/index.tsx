import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class counterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = {
    count: 0,
  };

  componentDidMount() {
    // render 후 실행
    console.log("미운트됨");
    this.inputRef.current?.focus();
    // 포커스가 깜빡거리게 할 때
  }

  componentDidUpdate() {
    // 리랜더 될 떄(state 변경될 때)
    console.log("수정이 되고 다시 그려짐");
    // 채팅방 나가기(백엔드에게 채팅방 나가기 api)
  }

  componentWillUnmount() {
    //
    console.log("컴포넌트 사라짐!!");
  }

  onClickCounter() {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  }

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
