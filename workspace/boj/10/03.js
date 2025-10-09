/*
제목: 네 번째 점
설명: 직사각형을 완성하는 문제
제출: https://www.acmicpc.net/submit/3009

문제
세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

입력
세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

출력
직사각형의 네 번째 점의 좌표를 출력한다.

    #(5,7)----*(7,7)
    |         |
    |         |
    #(5,5)----#(7,5)
    [예제 1]

    #(10,20)------#(30,20)
    |             |
    |             |
    #(10,10)------*(30,10)
    [예제 2]

* 두 점의 x 좌표가 같아야 하고, 두 점의 y 좌표가 같아야 한다.
* 주어진 x 좌표 3개 중 다른 하나가 직사각형의 네 번째 점의 x 좌표이다.
* 주어진 y 좌표 3개 중 다른 하나가 직사각형의 네 번째 점의 y 좌표이다.

예제 입력 1
5 5
5 7
7 5
예제 출력 1
7 7

예제 입력 2
30 20
10 10
10 20
예제 출력 2
30 10
*/

function main() {
  const data = getData();

  const X = [data[0][0], data[1][0], data[2][0]];
  const Y = [data[0][1], data[1][1], data[2][1]];

  const countX = {};
  for (let i = 0; i < X.length; i++) {
    if (Object.hasOwn(countX, X[i])) {
      countX[X[i]]++;
    } else {
      countX[X[i]] = 1;
    }
  }

  const resultX = Object.keys(countX).find((k) => countX[k] === 1);

  const countY = {};
  for (let i = 0; i < Y.length; i++) {
    if (Object.hasOwn(countY, Y[i])) {
      countY[Y[i]]++;
    } else {
      countY[Y[i]] = 1;
    }
  }

  const resultY = Object.keys(countY).find((k) => countY[k] === 1);

  console.log(resultX, resultY);
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
