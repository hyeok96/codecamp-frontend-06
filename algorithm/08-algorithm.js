//문자열 내림차순으로 배치하기

function solution(s) {
  let a = [];
  a = s.split("");
  a.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  a = a.join("");
  return a;
}

//k번째 수
function solution2(array, commands) {
  let a = [];
  for (let i = 0; i < commands.length; i++) {
    let b = commands[i];
    let c = array.slice(b[0] - 1, b[1]);
    c.sort((a, b) => {
      a - b;
    });
    a.push(c[b[2] - 1]);
  }
  return a;
}
