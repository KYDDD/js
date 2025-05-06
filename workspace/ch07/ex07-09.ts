// 내장 객체 - Date

(() => {
  // 오늘 날짜
  const today = new Date();
  console.log(today);

  console.log(today.getFullYear()); //2025
  console.log(today.getMonth() + 1); //4(0부터 시작하므로 4월은 3)
  console.log(today.getDate()); //30
  console.log(today.getDay()); // 3
  console.log(today.getHours()); // 14
  console.log(today.getMinutes()); // 34
  console.log(today.getSeconds()); // 38

  console.log(today.getTime());
})();
