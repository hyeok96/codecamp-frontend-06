//숫자더하기
function sum(num) {
	let count = 0;

  for(let i = 1; i < num+1; i++) {
       count = count + i
  }
  
  console.log(count)
}

//특정문자열세기
function countLetter(str) {
  let count = 0;
  const string = str.toLowerCase()
  for(let i = 0; i < str.length-1; i++) {
    if(string[i] === "a") {
      count++
    }
  }
  console.log(count)
}

//홀수 문자열
function makeOdd(num) { 
	let str = '';
  for (let i = 1; i < num+1; i++) {
    if(i%2 === 1) {
      str = str + i
    }
  }
  console.log(str)
}

makeOdd(5)

//가장 큰 수
function bigNum(str) {
	let biggest = 0;
	for(let i = 0; i < str.lenght; i++) {
    if(Number(str[i]) > biggest) {
    	biggest = Number(str[i])
    }
  }
  console.log(biggest)
}

