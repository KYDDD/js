/*
제목: 
설명: 
제출: 


*/

function main() {
  const number = getData();
  const sortedNumber = String(number)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  console.log(sortedNumber);
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
