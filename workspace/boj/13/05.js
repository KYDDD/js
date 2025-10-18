/*
제목: 
설명: 
제출: 


*/

function main() {
  const data = getData();
  const number = data[0];
  const sliceData = data.slice(1, 1 + number);
  const sortedData = sliceData.sort((a, b) => a - b);

  console.log(sortedData.join("\n"));
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
