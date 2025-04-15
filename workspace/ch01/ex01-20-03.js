/*
첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을수 있을까?
*/
let day = 1;
let count = 1;
let sum = 1;

while (true) {
  if (sum >= 1000_0000) {
    day--; //첫날부터 두번째날 받아야하는 2톨을 받으므로 날짜를 하나 빼줌
    break;
  }
  day++;
  sum = 2 * sum;
}
console.log(day);

//30일 동안 몇개의 쌀알을 모을 수 있는가?

day = 1;
count = 1;
sum = 1;

while (day <= 30) {
  sum = sum * 2;
  day++;
}
console.log(sum);
