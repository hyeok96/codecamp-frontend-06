// 1. HOF - 일반타입
function firstFunc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const result1 = firstFunc1("영희")(8);

// 2. HOF - any타입
function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}
const result2 = firstFunc2("영희")(8);

// 3. HOF - generic타입
function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const result3 = firstFunc3("영희")(8);

// 4. HOF - generic타입의 화살표 함수
const firstFunc4 =
  <T,>(arg1: T) =>
  <U,>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const result4 = firstFunc4("영희")(8);

// 5.HOF - generic타입의 컴포넌트의 응용 - HOC
const firstFunc5 =
  <C,>(Component: C) =>
  <P,>(props: P): [C, P] => {
    return [Component, props];
  };

const result = withAuth("Bbb")({ aaa: "철수" });
