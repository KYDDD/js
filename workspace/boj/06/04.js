/*
제목: 팰린드롬인지 확인하기
설명: 🔄
제출: https://www.acmicpc.net/submit/10988

문제
알파벳 소문자로만 이루어진 단어가 주어진다. 
이때, 이 단어가 팰린드롬인지 아닌지 확인하는 프로그램을 작성하시오.
팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다. 
level, noon은 팰린드롬이고, baekjoon, online, judge는 팰린드롬이 아니다.

입력
첫째 줄에 단어가 주어진다. 
단어의 길이는 1보다 크거나 같고, 100보다 작거나 같으며, 알파벳 소문자로만 이루어져 있다.

출력
첫째 줄에 팰린드롬이면 1, 아니면 0을 출력한다.

예제 입력 1
level
예제 출력 1
1

예제 입력 2
baekjoon
예제 출력 2
0
*/

function main() {
  const data = getData();

  const reverse = data.split("").reverse().join("");

  if (data === reverse) {
    console.log(1);
  } else {
    console.log(0);
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
