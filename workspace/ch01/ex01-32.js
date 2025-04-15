/*
매개변수를 가진 함수 - 도어락
올바른 비밀번호가 입력되면 문이 열린다.
잘못된 비밀번호가 입력되면 경보음이 울린다.
*/

function doorLock(password = "") {
  const pwd = "1234";
  const subPassword = password.slice(-pwd.length);
  if (subPassword === pwd) {
    console.log("문이 열립니다.");
  } else {
    console.log("삐삐삐삐!");
  }
}

doorLock("111111");
doorLock("1343251234");
doorLock(); //undefined가 된다. 함수가 정의만 되어있고 같이 없기 때문에
