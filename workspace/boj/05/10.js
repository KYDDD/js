/*
제목: 다이얼
설명: 규칙에 따라 문자에 대응하는 수를 출력하는 문제
제출: https://www.acmicpc.net/submit/5622

문제
상근이의 할머니는 아래 그림과 같이 오래된 다이얼 전화기를 사용한다.
https://u.acmicpc.net/9c88dd24-3a4c-4a09-bc50-e6496958214d/Screen%20Shot%202021-06-16%20at%2012.48.39%20AM.png

전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 
숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다.

숫자 1을 걸려면 총 2초가 필요하다. 
1보다 큰 수를 거는데 걸리는 시간은 이보다 더 걸리며, 한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸린다.

상근이의 할머니는 전화 번호를 각 숫자에 해당하는 문자로 외운다. 
즉, 어떤 단어를 걸 때, 각 알파벳에 해당하는 숫자를 걸면 된다. 
예를 들어, UNUCIC는 868242와 같다.

할머니가 외운 단어가 주어졌을 때, 이 전화를 걸기 위해서 필요한 최소 시간을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 알파벳 대문자로 이루어진 단어가 주어진다. 단어의 길이는 2보다 크거나 같고, 15보다 작거나 같다.

출력
첫째 줄에 다이얼을 걸기 위해서 필요한 최소 시간을 출력한다.

예제 입력 1
WA
예제 출력 1
13

예제 입력 2
UNUCIC
예제 출력 2
36
*/

function main() {
  const data = getData();
  const dialog = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  const number = [];

  for (let i = 0; i < data.length; i++) {
    for (let k = 0; k < dialog.length; k++) {
      if (dialog[k].includes(data[i])) {
        number.push(k + 3);
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
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
