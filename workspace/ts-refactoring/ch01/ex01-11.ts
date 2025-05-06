/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/
{
  const a = 5;
  const b = 10;
  const c = "5";
  const d = 5;

  // > (크다)
  console.log(a > b); //false

  // < (작다)
  console.log(a < b); //true

  // >= (크거나 같다)
  console.log(a >= d); //true

  // <= (작거나 같다)
  console.log(a <= d); //true

  //문자열 비교
  console.log(a == Number(c)); //동등, 5 == '5'  = 5 == 5 = true
  console.log(a === Number(c)); //일치, 5 === '5' = number === string = false

  console.log("ch05" > "ch01"); // 사전순으로 비교, true
  console.log("ch12" > "ch2"); // 사전순으로 비교, false
  //ch05, ch12, ch2, ch01 오름차순 정렬 순서
  //ch01, ch05, ch12, ch2
}
