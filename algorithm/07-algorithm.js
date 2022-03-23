//서울에서 김서방 찾기
function solution(seoul) {
    var answer = '';
    const a = seoul.indexOf('Kim')
    answer = `김서방은 ${a}에 있다`
    return answer;
}


//문자열 다루기
function solution2(s) {
    if(s.length !==4 && s.length !== 6) {
        return false
    }
    
    for(let i = 0; i < s.length; i++) {
        if(isNaN(s[i]) === true) {
            return false
        } 
    }
    
    return true
}

//약수의 합
//(1)
function solution3(n) {
    let a = []
    for (let i = 1; i < n+1; i++) {
			if(n % i === 0) {
				a.push(i)
      }
    }
  	let b = a.reduce((acc, cur) => acc + cur)
    return b
}

//(2)
function solution4(n) {
    let answer = n
    
    for(let i = 1; i <= n / 2; i++){
        if(n % i === 0) {
            answer += i      
        }
    }
    return answer
}