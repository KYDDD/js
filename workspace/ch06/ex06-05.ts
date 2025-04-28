// 유니언 타입(union type)

(() => {
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }

  logString("hello");
  logNumber(123);

  //유니언 타입
  //여러타입을 | 연산자로 연결해서 지정
  function log(msg: string | number | boolean) {
    console.log(msg);
  }

  log("hello");
  log(123);
})();
