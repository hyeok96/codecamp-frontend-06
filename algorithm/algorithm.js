//배열의 선언과 할당
const fruits = ["사과", "바나나", "파인애플"];

//빈 배열에서 push를 통해 배열 만들기
//push는 원본의 배열이 수정이 된다.
//push는 재할당을 하지말아야 한다.

// fruits.push('사과');
// fruits.push('바나나');
// fruits.push('파인애플');

// console.log(fruits);

//배열의 기능

// fruits는 위에 상수 사용
//정적으로 이용하기
const newFruits =[]
// newFruits.push(fruits[2])

//동적으로 가져오기
newFruits.push(fruits[fruits.length - 1 ])
console.log(newFruits)

//객체 할당
// let student = {}

// student.name = "철수"


//객체 키와 값 추가
const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}


student.school = school
console.log(student)