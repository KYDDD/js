/*
TODO Object생성자 함수
new Object() - 생성자 함수로 객체 생성
*/

const foo = new Object();
console.log(foo);
foo.name = "함수핑";
foo["age"] = 6;
foo.job = "마법사";
foo["married"] = false;

console.log(foo["name"], foo["age"], foo.job, foo.married);
//object {name: '함수핑', age: 6, job: '마법사', married: false}
console.log(typeof foo, foo);
