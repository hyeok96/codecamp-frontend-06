import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  // 최소 768px에서 최대 991px에서 적용
  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  // max-width는 최대 가로길이가 767px이다. 즉, 767px이하일 때 이 부분이 적용
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
    display: none;
  }

  /* 반응형을 만들때 전체크기를 줄이거나 가로길이를 줄인다. 주로 가로를 많이 줄인다.(세로를 줄이는 겨우도 있지만 적다.)
     가로는 퍼센테이지로 해준다.
  */
  /* 핸드폰마다 사이즈가 다른데 어떤 것을 기준으로 만들것인가?
    1. 가장 마노이 사용되는 기종을 기준으로
    2. 많이 사용되는 기종중 가장 작은 것을 기준으로 (큰 거를 기준으로 만들어 놓으면 작은 사이즈에서 꺠질 수 있음 )
  */
`;

export default function ResponsiveDesignPage() {
  return (
    <div>
      <Wrapper>상자</Wrapper>;
    </div>
  );
}
