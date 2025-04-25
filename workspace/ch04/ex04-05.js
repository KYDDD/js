// ex02-23.js 복사
// 함수는 순수한 함수의 기능만 구현하고 메모이제이션은 메메모를 붙혀라

// js/mylib.js파일에 memo정의됨됨
// 지정한 수가 소수인지 여부를 반환
const isPrime = function (num) {
  // 소수 판별 코드
  let prime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
};

console.time("소요시간");
console.log("3 -> ", isPrime(3));
console.log("4 -> ", isPrime(4));
console.log("5 -> ", isPrime(5));
console.log("6 -> ", isPrime(6));
console.log("7 -> ", isPrime(7));
console.log("8 -> ", isPrime(8));
console.log("9 -> ", isPrime(9));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.timeEnd("소요시간");
