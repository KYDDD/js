// for문을 이용해서 원하는 결과를 가져와보자~

const todoList = [
  {
    id: 1,
    title: "JavaScript 공부",
    done: true,
  },
  {
    id: 2,
    title: "TypeScript 공부",
    done: false,
  },
  {
    id: 3,
    title: "JavaScript 프로젝트",
    done: false,
  },
  {
    id: 4,
    title: "React 공부",
    done: false,
  },
  {
    id: 5,
    title: "Final 프로젝트",
    done: true,
  },
];

// 완료된 할일 목록
let doneList = [];
let doneCount = 0;
for (let elem of todoList) {
  if (elem.done === true) {
    doneList.push(elem.title);
    doneCount++;
  }
}

console.log("완료된 할일 목록", doneList);

// 남은 할일 목록
let remainList = [];
let remainCount = 0;
for (let elem of todoList) {
  if (elem.done === false) {
    remainList.push(elem.title);
    remainCount++;
  }
}

console.log("남은 할일 목록", remainList);

// 남은 할일 수
console.log("남은 할일 수", remainCount);

// id=2인 할일
let todo = null;
for (let elem of todoList) {
  if (elem.id === 2) {
    todo = elem.title;
    break;
  }
}
console.log("id=2인 할일", todo);

// id=3인 할일의 index
let todoIndex = -1;
for (i = 0; i < todoList.length; i++) {
  if (todoList[i].id === 3) {
    todoIndex = i;
    break;
  }
}
console.log("id=3인 할일의 index", todoIndex);

// 남은 할일이 하나라도 있는가?
let hasTodo = false;
for (let elem of todoList) {
  if (elem.done === false) {
    hasTodo = true;
    break;
  }
}
console.log("남은 할일이 하나라도 있는가?", hasTodo);

// 할일이 모두 완료 되었는가?
let isAllDone = true;
for (let elem of todoList) {
  if (elem.done === false) {
    isAllDone = false;
    break;
  }
}
console.log("할일이 모두 완료 되었는가?", isAllDone);
