/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 배열의 모든 요소 출력(for)
// console.log("for");
// for (let i = 0; i < arr.length; i++) {
//   //i=0, i=1, i=2 경우에 for 문이 실행됨
//   const elem = arr[i];
//   console.log(i, elem);
// }

// 배열 모든 요소의의 합계, 홀수의 합계, 짝수의 합계를 출력
let sum = 0;
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < arr.length; i++) {
  //i=0, i=1, i=2 경우에 for 문이 실행됨
  const elem = arr[i];

  sum += elem;
  if (elem % 2 === 0) {
    evenSum += elem;
  } else {
    oddSum += elem;
  }
}
console.log("배열 모든 요소의 합계", sum);
console.log("배열 짝수 요소의 합계", evenSum);
console.log("배열 홀수 요소의 합계", oddSum);

// for-of 인덱스는 사용하지 않고 배열 요소의 값만 꺼내서 사용할 때
for (let elem of arr) {
  console.log(elem);
}

// for-in
for (let prop in arr) {
  console.log(prop, arr[prop]);
}
