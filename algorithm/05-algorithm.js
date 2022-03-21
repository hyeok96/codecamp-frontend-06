//문자열를 정수로 바꾸기

function solution(s) {
    return +s
    //return Number(s) 
}

//같은 숫자는 싫어

function solution2(arr) {
    var answer = []
    answer = arr.filter((item,index) => arr[index] !== arr[index-1] )
  	return answer
}

//핸드폰 번호 가리기