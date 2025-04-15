/*
반환값이 있는 함수
*/

add(); //110
add(); //110

add100(10); //110
add100(20); //120

sum(10, 20); //30
sum(30, 40); //70

// 10+100 결과를 출력한다

// 전달받은 숫자와 100의 합계를 출력하는 함수(add 100)

// 전달받은 두 숫자의 합계를 출력하는 함수 (sum)

function add() {
  console.log(110);
}

function add100(num) {
  console.log(100 + num);
}

function sum(num1, num2) {
  console.log(num1 + num2);
}
