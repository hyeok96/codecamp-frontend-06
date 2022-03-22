// 짝수와 홀수
function solution(num) {
   return num % 2 === 0 ? "Even" : "Odd"
}

// 평균구하기
function solution2 (arr) {
    const answer = arr.reduce( (acc, cur) => {
        console.log(acc, cur)
        return acc + cur
    },0)
    return answer/arr.length
}

// 가운데 글자 가져오기
function solution3 (s) {
//    const center = Math.floor(s.length/2);
//    let answer = s[center]

//    if(s.length % 2 === 0) {
//        answer = s[center -1] + answer
//    }

//    return answer

    const center = Math.floor(s.length/2)
    return s.length %2 === 1 ? s[center] : s.slice( center-1, center+1 )
}
