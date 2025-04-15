/*
for문을 이용해서 구구단 작성
*/
/*
for 문을 이용해서 구구단 작성

출력 예시:
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
*/

// const dan = 3;

// for (let i = 1; i <= 9; i++) {
//   console.log(dan + " x " + i + " = " + dan * i);
//   console.log(`${dan} x ${i} =  ${dan * i}`);
// }

/*
2단 부터 9단 까지 출력

출력 예시:
*/

// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log();
// }

/*
2단 부터 9단 까지 출력

출력 예시:
2 x 1 = 2 3 x 1 = 3 4 x 1 = 4 .... 9 x 1 = 9
2 x 2 = 4

*/

let dandan = "";

for (let i = 1; i <= 9; i++) {
  dandan = "";
  for (let j = 1; j <= 9; j++) {
    dandan += `${j} * ${i} = ${j * i}`.padEnd(12);
  }
  console.log(dandan);
  console.log();
}
