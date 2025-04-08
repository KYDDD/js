/*
JSON 표기법 - 리터럴 방식으로 객체 생성
*/

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

console.log(foo["name"], foo["age"], foo.job, foo.married);
//object {name: '함수핑', age: 6, job: '마법사', married: false}
console.log(typeof foo, foo);
