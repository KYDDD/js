// 기본 타입

(() => {
  let str: string = "hello";
  let age: number = 9;
  let done: boolean = true;
  // done = 'false'; // 컴파일 에러, 불린 타입에 웬 스트링??

  let nullVal: null = null; //null 값만 있어야한다.
  let emptyVal: undefined;

  let todo: object = { title: "TypeScript 공부", done: false };
  let todoList: Array<string> = ["JavaScript", "TypeScript"]; // 문자열로 구성된 배열
  let todoList2: string[] = ["React", "Next.js"]; // 문자열로 구성된 배열

  // tuple: 길이가 고정되고 각 요소의 타입이 정의된 타입
  let items: [string, number] = ["타스핑", 10];

  let userName: any = "이일구"; //tsc가 타입 체크를 하지 않음
  userName = 219;

  // unknown: 값을 저장할 때는 아무 타입의 값이나 저장이 가능하지만 사용할 때 추가적인 타입체크 코드를 요구
  let userName2: unknown = "TSping";
  // userName2 = 540;

  // console.log(userName.toUpperCase());
  if (typeof userName2 === "string") {
    // 타입 가드
    console.log(userName2.toUpperCase());
  }
})();
