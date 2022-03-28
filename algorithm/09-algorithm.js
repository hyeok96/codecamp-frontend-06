//문자열 내 p와 y의 갯수

function solution(s) {
  //p와 y의 갯수를 저장하는 함수
  s = s.toLowerCase();

  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      p++;
    } else if (s[i] === "y") {
      y++;
    }
  }
  return p === y;
}

//다른 방법

function solution2(s) {
  const check = {};
  s.toLowerCase()
    .split("")
    .forEach((str) => {
      check[str] === undefined
        ? check[str] === 1 //객체에 해당 키값이 없으면 초기값 1을 넣는다
        : check++; // 객체에 해당 키값이 있으면 1을 더한다.
    });

  return check.p === check.y;
}

// 이상한 문자 만들기

function solution3(s) {
  let answer = "";

  let idx = 0; // 단어별로 인덱스를 구분하기 위한 변수

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
      idx = 0;
    } else {
      answer +=
        idx % 2 === 1
          ? s[i].toLowerCase() // 홀수일 때는 소문자 그대로 넣어준다.
          : s[i].toUpperCase(); //짝수일 때는 대문자로 변환해서 넣는다.
      idx++;
    }
  }
  return answer;
}

//다른 방법

function solution4(s) {
  const answer = s
    .split("")
    .map((str) => {
      return str
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase : letter.toLowerCase;
        })
        .join(" ");
    })
    .join("");
}
