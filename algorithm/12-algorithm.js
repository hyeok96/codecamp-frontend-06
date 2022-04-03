//두 사이의 정수의 합

function solution(a, b) {
  let answer = 0;

  if (a < b) {
    for (let i = a; i < b + 1; i++) {
      answer = answer + i;
    }
  } else if (a > b) {
    for (let i = b; i < a + 1; i++) {
      answer = answer + i;
    }
  } else {
    answer = a;
  }

  return answer;
}

// 정수 제곱근 판별

function solution1(n) {
  if (n > 0 && n <= 50000000000000) {
    const x = Math.sqrt(n);
    console.log(typeof x);
    if (Math.ceil(x) === x) {
      return (x + 1) ** 2;
    } else {
      return -1;
    }
  }
}
