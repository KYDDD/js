/*
반복문 - for문
*/

//1부터 10까지 출력
let sum = 0;

for (let i = 1; i <= 10; i++) {
  //초기화, 조건식, 증감식
  sum += i;
}

console.log(sum);

//1부터 10까지 출력

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 1부터 10까지 홀수의 합계 출력. 25
sum = 0;

for (let i = 1; i <= 10; i += 2) {
  sum += i;
}
console.log(sum);

// 1부터 10까지 짝수의 합계 출력. 30
sum = 0;
for (let i = 2; i <= 10; i += 2) {
  sum += i;
}
console.log(sum);

//조건문을 사용해서 홀수 짝수 합계출력
sum = 0;
let odd = 0;
let even = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 1) {
    odd += i;
  } else {
    even += i;
  }
}
console.log(odd, even);
