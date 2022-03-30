//자연수 뒤집어 배열로 만들기
function solution(n) {
  n = String(n);
  n = n.split("");
  let answer = n.reverse();
  answer = answer.map((el) => Number(el));

  return answer;
}

//나누어 떨어지는 숫자 배열
function solution2(arr, divisor) {
  arr = arr.filter((el) => el % divisor === 0);
  arr.sort((a, b) => a - b);

  if (arr.length === 0) {
    arr.push(-1);
  }

  return arr;
}
