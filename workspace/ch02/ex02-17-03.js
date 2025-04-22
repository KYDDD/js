/*
카운터 예제
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // this = myObj
    // 방문자를 한명 증가시킨다.
    this.count++; //this = myObj
    const visit2 = () => {
      this.count++; //this = window
    };
    visit2();
  },
};

myObj.visit();
myObj.visit();
console.log("방문자수", myObj.count); //2
