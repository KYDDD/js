/*
전역 변수와 지역 변수
*/

/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1
 * @param {number} n2
 */

function max(n1, n2) {
  const max = Math.max(n1, n2);
  return max;
}

console.log(max(10, 20)); //20
console.log(max(200, 30)); //200
