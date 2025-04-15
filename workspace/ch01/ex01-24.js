/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavaScript Object Notation -> 자바스크립트 객체 표기법법
*/

const foo = {
  name: "제이슨핑",
  age: 7,
  job: "요정",
  married: true,
};
//네트워크로 전송할 때는 꼭 문자열을 큰 따옴표로 감싸야한다.
//TODO ajax 단원에서..., JSON.stringify() 함수를 사용하면 객체를 JSON형태의 문자열로 변환 가능
const strFoo = JSON.stringify(foo);
console.log("strFoo", typeof strFoo, strFoo);
console.log(foo.job, strFoo.job); //요정, undefined
//TODO ajax단원에서..., JSON.parse() 함수를 사용하면 JSON 형태의 문자열을 객체로 변환 가능
const objFoo = JSON.parse(strFoo);
console.log("objFoo", typeof objFoo, objFoo);

console.log(foo["name"], foo["age"], foo.job, foo.married);
//object {name: '함수핑', age: 6, job: '마법사', married: false}
console.log(typeof foo, foo);
