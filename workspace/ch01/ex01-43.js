/*
나머지 매개변수(Rest parameters)
*/

function fn(...args) {
  console.log(args);
  for (let arg of args) {
    console.log(arg);
  }
}

fn();
fn(1);
fn(1, 2);
fn(1, 2, 3);
fn(1, 2, 34, 34, 23, 4, 234, 454, 23423, 3241, 2);
