/*
제목: 곱셈
설명: 빈 칸에 들어갈 수는?
제출: https://www.acmicpc.net/submit/2588

문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

     472 ... (1)
   x 385 ... (2)
  -------
    2360 ... (3)  <- 472 × 5
   3776  ... (4)  <- 472 × 80
  1416   ... (5)  <- 472 × 300
 -------
  181720 ... (6)  <- 최종 결과

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

예제 입력 1
472
385

472\r\n385

예제 출력 1
2360
3776
1416
181720
*/

// 첫 번쨰 방법
// const fs = require("fs");
// const inputData = fs.readFileSync(0).toString().trim().split("\n");

// const a = parseInt(inputData[0]);
// const b = parseInt(inputData[1]);
// const c = parseInt(inputData[1][0]);
// const d = parseInt(inputData[1][1]);
// const e = parseInt(inputData[1][2]);

// console.log(a * e);
// console.log(a * d);
// console.log(a * c);
// console.log(a * b);

// 두번째 방법
// const fs = require("fs");
// const inputData = fs.readFileSync(0).toString().trim().split("\n");

// const a = parseInt(inputData[0]);
// const b = parseInt(inputData[1]);

// console.log(a * (b % 10));
// console.log(a * (Math.floor(b / 10) % 10));
// console.log(a * Math.floor(b / 100));
// console.log(a * b);

function main() {
  const data = getData();
  //data에서 값을 꺼내서 문제 해결하는 코드 작성
  const n1 = data.a; //472
  const n2 = data.b; //385
  const n3 = n1 * (n2 % 10);
  const n4 = n1 * (parseInt(n2 / 10) % 10); //472 * ( 38 % 10 ) = 472*80
  const n5 = n1 * parseInt(n2 / 100); //472 * ( 3 * 100 ) = 472 * 300
  const n6 = n3 + n4 * 10 + n5 * 100;

  //TODO toString() 단원

  console.log(n3);
  console.log(n4);
  console.log(n5);
  console.log(n6);
}

main();

// 입력값 예시:
// 10 20

/**
 * 표준 입력장치 (콘솔)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {string|number} 읽은 데이터(숫자일 경우 number로 형변환))
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split("\n");
  const result = new Object();
  result.a = isNaN(fileData[0]) ? fileData : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData : parseInt(fileData[1]);
  return result; //함수는 오직 하나의 값만 반환할 수 있다.
}
