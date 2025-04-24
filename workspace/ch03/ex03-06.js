/*
 * 클래스 정의와 상속
 * ex03-05.js 복사
 */
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

class HighSchool {
  constructor(kor, eng) {
    this.kor = kor;
    this.eng = eng;
  }

  sum() {
    return this.kor + this.eng;
  }

  avg() {
    // 소수 첫째자리에서 반올림한다.
    return Math.round(this.sum() / 2);
  }
}

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */

class Colledge extends HighSchool {
  constructor(kor, eng) {
    super(kor, eng); //부모(HighSchool)의 생성자 호출
    this.total = kor + eng;
  }

  //constructor()를 생략할 경우 자동으로 추가

  grade = function () {
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
}

const c1 = new Colledge(80, 99);
console.log(c1.sum());
console.log(c1.avg());
console.log(c1.grade());
