// 함수에 타입 지정

(() => {
  function getCount(count: number): string {
    //return count; //타입에러
    return "Count: " + count;
  }

  // let result = getCount("20"); // 타입에러
  let result /* : string 생략가능 타입추론 이라는 기능이 있음 */ = getCount(20);

  console.log(result);
})();
