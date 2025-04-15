/*
new Object() - 생성자 함수로 객체 생성
*/

// 몰라핑 회원의 속성
const userName = "몰라핑";
const userNo = 3;
const userGender = "male";
const userLevel = "diamond";
const userPassword = "1234";
const userAge = 30;
const userEmail = "uzoolove@gmail.com";

console.log(userName, userAge);
//호정핑 회원의 속성
const userName2 = "호정핑";
const userNo2 = 4;
const userGender2 = "female";
const userLevel2 = "gold";
const userPassword2 = "1234";
const userAge2 = 30;
const userEmail2 = "hojeong@gmail.com";

console.log(userName2, userAge2);
//몰라핑 회원의 속성(객체, object)
const user1 = new Object();
user1.userName = "몰라핑";
user1.userNo = 3;
user1.userGender = "male";
user1.userLevel = "diamond";
user1.userPassword = "1234";
user1.userAge = 30;
user1.userEmail = "uzoolove@gmail.com";

console.log(user1.userName, user1.userAge);
//호정핑 회원의 속성
const user2 = new Object();
user2.userName = "호정핑";
user2.userNo = 4;
user2.userGender = "female";
user2.userLevel = "gold";
user2.userPassword = "1234";
user2.userAge = 30;
user2.userEmail = "hojeong@gmail.com";

console.log(user2.userName, user2.userAge);
