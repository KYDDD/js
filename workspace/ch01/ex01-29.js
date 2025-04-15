/*
2차원 배열
*/

const numbers = [
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
  [6, 12, 18, 24],
];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

console.log(numbers[0][2]);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  for (let k = 0; k < numbers[i].length; k++) {
    console.log(numbers[i][k]);
    sum += numbers[i][k];
  }
}
console.log(sum);
