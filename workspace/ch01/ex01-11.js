/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

// > (크다)
console.log(a > b); //false

// < (작다)
console.log(a < b); //true

// >= (크거나 같다)
console.log(a >= d); //true

// <= (작거나 같다)
console.log(a <= d); //true

//문자열 비교
console.log(a == c); //동등, 5 == '5'  = 5 == 5 = true
console.log(a === c); //일치, 5 === '5' = number === string = false

console.log("ch05" > "ch01"); // 사전순으로 비교, true
console.log("ch12" > "ch2"); // 사전순으로 비교, false
//ch05, ch12, ch2, ch01 오름차순 정렬 순서
//ch01, ch05, ch12, ch2
