/*
유사 배열 객체
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @param {any[]} arr - 배열
 */
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

const colorArr = ["orange", "yellow", "green"];

printArr(colorArr);
//TODO 유사 배열 객체
//유사배열 객체를 만들려면
//- length속성이 있어야한다
//- 0 부터 시작해서 1씩 증가하는 속성 추가
const arr = {
  length: 3,
  0: "orange",
  1: "yellow",
  2: "green",
  /**
   * 맨 끝에 지정한 elem를 추가한다.
   * @param {*} elem - 추가할 요소
   */
  push: function (elem) {
    // this[this.length] = elem; // 현재 length 위치에 요소 추가
    // this.length++; // length 증가
    // 배열의 push 메서드 사용

    // const tmpArr = new Array();
    // tmpArr.push.call(this, elem);

    // TODO prototype 배운 후에. 배열의 모든 메서드는 배열의 생성자 함수인 Array.prototype 속성에 정의되어 있음.
    Array.prototype.push.call(this, elem);
  },
};

arr.push("black");
arr.push("white");

printArr(arr);

//문자열도 유사 배열 객체의 일종
//printArr("이것은 문자열");
