//2-15복사

// globalThis.name = "global"; // 브라우저는 window, Node.js는 global 객체

// const getPingName = function () {
//   return this.name;
// };

// const baro = new Object();
// baro.name = "바로핑";
// baro.age = 9;
// baro.getName = getPingName;

// const rara = {
//   name: "라라핑",
//   age: 8,
//   getName: getPingName,
// };

// const copyPing = {
//   name: "복사핑",
//   age: 12,
//   getName: getPingName,
// };

// 객체를 생성해서 반환하는 함수(생성자)
function Ping(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
}

// new의 동작
// 1. 빈 객체를 참조하는 this 생성
// 2. this를 생성자 함수에 전달
// 3. 생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
const baro = new Ping("바로핑", 9);
const rara = new Ping("라라핑", 8);
const copyPing = new Ping("카피핑", 12);
// const rePing = Ping();

// 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체. baro)
console.log(baro.age, baro.getName()); // getName()의 this는 baro
console.log(rara.age, rara.getName()); // getName()의 this는 rara
console.log(copyPing.age, copyPing.getName()); // getName()의 this는 copyPing
