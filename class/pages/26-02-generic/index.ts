import { Maybe } from "graphql/jsutils/Maybe";

// 1.문자타입
const getString = (args: string): string => {
  return args;
};
const result1 = getString("철수");

// 2.숫자타입
const getNumber = (args: number): number => {
  return args;
};

const result2 = getNumber(8);

// 3.any 타입
const getAny1 = (args: any): any => {
  return args + 2;
};

const result3_1 = getAny1("철수");
const result3_2 = getAny1(8);
const result3_3 = getAny1(true);

// 4. any타입2

const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result4 = getAnys("철수", "다람쥐초등학교", 8);

// 5.generic 타입 (뭔지는 모르겠으나, 들어온타입을 그대로 사용)
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result5_1 = getGeneric(aaa);
const result5_2 = getGeneric(bbb);
const result5_3 = getGeneric(ccc);

// 6. generic 타입2
// prettier-ignore
function getGenerics<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result6 = getGenerics("철수", "다람쥐초등학교", 8);

// 7. generic - 축약1
// prettier-ignore
function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg1];
  }

const result7 = getGenerics("철수", "다람쥐초등학교", 8);,

// 8. generic - 축약2
// prettier-ignore
function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
    return [arg3, arg2, arg1];
  }

const result8 = getGenericsTUV<string, string, number>(
  "철수",
  "다람쥐초등학교",
  8
);

const apple: number = 3;
console.log(apple);

// 화살표함수에서의 generic
// const getGenericsTUV = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
//     return [arg3, arg2, arg1];
//   }
