//점수의 따른 등급

function grade(score) {
    if(score >=0 && score <=59) {
        console.log("F")
    } else if(score <= 69) {
        console.log("D")
    } else if(score <= 79) {
        console.log("c")
    } else if(score <= 89) {
        console.log("B")
    } else if(score <= 100) {
        console.log("A")
    } else {
        console.log("잘못죈 점수입니다.")
    }
}

//의류를 구매한 횟수와 총 가격과 의류만 따졌을 때 나의 등급은

const myShopping = [
    { category: "과일", price: 12000},
    { category: "의류", price:10000 },
    { category: "의류", price: 20000},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000},
    { category: "의류", price: 7000},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000 },
]


let count = 0
let totalPrice = 0

for(let i = 0; i <myShopping.length; i++) {
    if(myShopping[i].category === "의류") {
          count++
      totalPrice = totalPrice + myShopping[i].price
    }
  }
  
  if(count >= 5) {
    console.log("Gold") 
  } else if (count >= 3) {
      console.log("sliver") 
  } else if (count >= 0) {
    console.log("bronze") 
  }

