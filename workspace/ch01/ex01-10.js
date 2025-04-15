/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0; // 0으로 초기화
console.log(count);

count = count + 1;
count += 1;
count++;

console.log(count);

console.log(count++); //3
console.log(++count); //5

var sum = count++ + 10; // 5 + 10 = 15
console.log(sum);

sum = ++count + 10; // 5 + 10 = 15
console.log(sum);
