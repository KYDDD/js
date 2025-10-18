/*
제목: 
설명: 
제출: 


*/

function main() {
  const data = getData();
  const student = data[1];
  const cutlineIndex = data[0][1] - 1;
  const sortedStudent = student.sort((a, b) => b - a);
  console.log(sortedStudent[cutlineIndex]);
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
