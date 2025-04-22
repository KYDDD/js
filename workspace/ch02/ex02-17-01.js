/*
카운터 예제
*/

// ex02-17-01.js

var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가
    this.count++; // this = myObj
    const that = this; // that = this, this = myObj
    const visit2 = function () {
      that.count++; // that = myObj
    };
    visit2();
  },
};
myObj.visit(); // this = myObj
myObj.visit();
console.log("총 방문자 수: ", myObj.count);
