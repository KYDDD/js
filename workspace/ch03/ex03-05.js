/*
 * 프로토타입 체인을 이용한 상속 기능 구현(중계 함수 추가)
 * ex03-04.js 복사
 */
/*
 * 프로토타입 체인을 이용한 상속 기능 구현
 */

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng) {
  //전달되는 국어점수, 영어점수를 생성되는 객체에 전달해준다.
  this.kor = kor;
  this.eng = eng;
}

HighSchool.prototype.sum = function () {
  return this.kor + this.eng;
};

HighSchool.prototype.avg = function () {
  // 소수 첫째자리에서 반올림한다.
  return Math.round(this.sum() / 2);
};

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function colledge(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

inherite(HighSchool, colledge);
// Child가 Parent 를 상속 받는다.
function inherite(Parent, Child) {
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  //Object.create(): 지정한 prototype 객체를 참조하는 인스턴스 생성
  Child.prototype = Object.create(parent.prototype);
  Child.prototype.constructor = Child;
}

colledge.prototype.grade = function () {
  const avg = this.avg();
  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const c1 = new colledge(80, 99);
console.log(c1.sum());
console.log(c1.avg());
console.log(c1.grade());
