 interface Score {
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
  }

  // FIXME 타입 스크립트 클래스 선언(인터페이스 지정)
  class HighSchool implements Score {
    kor: number;
    eng: number;
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      return this.sum() / 2;
    }
  }

  // 총점과 평균을 출력하는 함수
  function printScore(score: Score) {
    console.log(score.sum(), score.avg());
  }

  const haru: Score = new HighSchool(100, 90);
  printScore(haru);
})();
