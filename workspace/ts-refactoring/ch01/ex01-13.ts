/*
논리 연산자 &&, ||, !
*/
{
  //논리 합(or): 피연산자 둘 중 하나라도 true일 경우 true가 됨. 둘다 false일 경우에만 false가 된다.
  console.log(true || true);
  console.log(true || false);
  console.log(false || true);
  console.log(false || false);

  const id = "yeono";
  let invalidId = id.length < 4 || id.length > 12;
  invalidId = !(id.length >= 4 && id.length <= 12);
  console.log("id 입력 조건에 맞지 않음", invalidId);

  // 앞의 값이 참이면 앞의 값을 반환
  // 앞의 값이 거짓이면 뒤의 값을 반환
  // 뭔가 값이 있으면 쓰고 그 값이 없으면 뒤에꺼를 대신써라!!
  //falsy: nnumber 0 , string '', boolean false, null, undefined
  //truthy: 100, ' ', 'hello', true
  //   console.log("hello" || "world"); //hello
  //   console.log(90 || 30); //90
  //   console.log(null || "guest"); //world
  //   console.log(undefined || "guest"); //hello
  //   console.log(0 || 30); //100
  //   console.log("" || "guest"); // hello

  // let userName = "체리핑";
  let userName = "";
  let userAge = 0;

  console.log(userName || "guest");
  console.log(userAge || "나이 미상");

  //논리곱(AND):
  // 피연산자 둘 다 true일 경우 true가 됨.
  // 둘 중 하나라도 false일 경우 false가 됨.
  console.log(true && true); //true
  console.log(true && false); //false
  console.log(false && true); //false
  console.log(false && false); //false

  // 앞의 값이 참이면 뒤의 값을 반환
  // 앞의 값이 거짓이면 앞의 값을 반환

  const idNull: string | null = null; //type은 object
  //   console.log("글자수", idNull && idNull?.length);
}
