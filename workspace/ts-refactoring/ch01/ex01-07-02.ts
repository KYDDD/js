/*
Symbol

*/

//string
var s1: string = "hello";
var s2: string = "world";
var s3: string = "hello";

console.log(s1 === s2);
console.log(s2 === s3);
console.log(s1 === s3);

var sym1: Symbol = Symbol("hello");
var sym2: Symbol = Symbol("world");
var sym3: Symbol = Symbol("hello");

console.log(s1 === s2);
console.log(s2 === s3);
console.log(s1 === s3);
