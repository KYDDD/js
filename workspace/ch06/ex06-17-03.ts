// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(() => {
  //T가 아닌 아무 문자나 사용가능 하지만 관레적으로 Type의 첫글자인 T를 사용
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo<number>(100));
  //console.log(echo<boolean>(true)); //타입에러

  const str = echo<string>("hello");
  const num = echo<number>(123.456);

  console.log(str.toUpperCase(), num.toFixed(2));

  function echo2<T extends { length: number }>(msg: T): T {
    return msg;
  }

  //echo2<nhumber>(100); // length속성이 없어서 제약에 걸린다.
  const str2 = echo2<string>("hello");
  const num2 = echo2<number[]>([10, 20]);

  console.log(str2.length, num2.length);
})();
