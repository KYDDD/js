/*
* 함수 호이스팅
  - 선언문 형태로 정의한 함수의 유효 범위가 코드의 맨 처음부터 시작하게 되는 자바스크립트의 동작 방식
  - 특정 블럭의 코드가 자바스크립트 엔진에 의해 실행 되기 전에 호이스팅 단계를 거치는데 
    이때 선언문 형태의 함수가 생성 되므로 함수 선언 코드보다 먼저 호출하는 코드를 작성하는게 가능
*/

// 호이스팅 단계에서 함수를 생성
// 선언문 방식의 함수 정의

function add(x, y) {
  return x + y;
}
console.log(add(10, 20));

console.log(add(10, 20));
