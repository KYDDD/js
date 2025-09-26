/*
제목: 별 찍기 - 7
설명: 🌟
제출: https://www.acmicpc.net/submit/2444

문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
3
예제 출력 1
  *
 ***
*****
 ***
  *

예제 입력 2
4
예제 출력 2
    *
   ***
  *****
 *******
  *****
   ***
    *

예제 입력 3
5
예제 출력 3
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

function main() {
  const data = getData();

  const space = " ";
  const star = "*";
  for (let j = 0; j < data; j++) {
    const repeatedSpace = space.repeat(data - 1 - j);
    const repeatedStar = star.repeat(2 * j + 1);
    console.log(repeatedSpace + repeatedStar);
  }

  for (let i = 1; i < data; i++) {
    const repeatedSpace = space.repeat(i);
    const repeatedStar = star.repeat(2 * (data - i) - 1);
    console.log(repeatedSpace + repeatedStar);
  }
}
main();

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");
  const result = [];

  for (let row of arr) {
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }

  return result.length === 1 ? result[0] : result;
}
