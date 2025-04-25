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
    const visitN = function (n) {
      this.count += n; //this = myObj
    };
    visitN.call(this, 2); //count를 2명 증가
    visitN.call(this, 2);

    const visit3 = visitN.bind(this, 3); //this와 n값을 미리 보내놓자~! 는게 바인드이다.
    visit3(); // count를 3명 증가
    visit3(); // count를 3명 증가
  },
};

myObj.visit();
myObj.visit();
console.log("방문자수", myObj.count); //2
