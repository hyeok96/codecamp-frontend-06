//조건문

function boolean(input1, input2) {
	if( input1 === true || input2 == true ) {
        console.log("true")
    } else if( input1 === false && input2 === false ) {
        console.log(true)
    }
}

//홀짝
//풀이법 1
function evenOdd(num) {
	if(num === 0) {
        console.log("Zero")
    } else if (num % 2 === 0) {
        console.log("Even")
    } else if (num % 2 === 1) {
        console.log("Odd")
    }
}

//온도
function temperature(num){
	if(num >= 24) {
        console.log("조금 덥습니다.")
	} else if(num >= 19 && num <=23) {
        console.log("날씨가 좋습니다.")
    } else if(num >= 0 && num <= 18) {
        console.log("조금 춥네요")
    }
} 

//며칠
function days(month) {
	if( month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12
        ) {
        console.log("31일")

    } else if (month === 4 ||
               month === 6 ||
               month === 9 ||
               month === 11) {
                console.log("30일")

    } else if (month === 2) {
        console.log("28일")

    }
}

//풀이법 2
function day (month) {
    const obj = {
        1 : 31,
        2 : 28,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31
    }
    console.log(obj[month])
}    
