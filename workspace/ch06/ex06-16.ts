// 인터페이스 선언 병합
// ex06-15.ts 복사

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface Todo {
    id: number; //type이 다르다면 동일한 속성을 지정할수 없음
    title: string; //type 이 같다면 동일한 속성도 상관 없음
    done: boolean;
    createdAt: Date;
  }

  const todo: Todo = {
    id: 1,
    title: "할일1",
    content: "내용1",
    done: true,
    createdAt: new Date(),
  };
  console.log(todo);
})();
