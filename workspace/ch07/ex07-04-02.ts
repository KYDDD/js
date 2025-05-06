// 내장 객체 - Math

(() => {
  // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
  function rollDice(): number {
    let number = Math.random() * 10;
    number = Math.ceil(number);
    if (number > 6) number = number - 4;
    return number;
  }

  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력

  // 로또 번호 생성 함수
  function generateLottoNumbers(): number[] {
    const numbers: number[] = [];
    while (numbers.length < 6) {
      const number = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  console.log(generateLottoNumbers()); // 로또 번호 출력
  console.log(generateLottoNumbers()); // 로또 번호 출력
  console.log(generateLottoNumbers()); // 로또 번호 출력
})();
