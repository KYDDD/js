// 인터페이스 상속 - 계층 구조
// ex06-13.ts 복사

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist {
    id: number;
    done: boolean;
    // title: string;
    // content: string;
  }

  interface TodoInfoWithDate extends TodoInfo {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoRegist = {
    title: "할일1",
    content: "내용1",
  };

  console.log("등록", todo1);

  const todo2: TodoInfo = {
    id: 1,
    title: "할일1",
    content: "내용1",
    done: false,
  };

  console.log("할일 상세 조회", todo2);

  const todo3: TodoInfoWithDate = {
    id: 3,
    title: "할일3",
    content: "내용3",
    done: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  console.log("할일 상세 조회", todo3);
})();
