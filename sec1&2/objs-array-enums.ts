/* const ADMIN = 0;
 const READ_ONLY = 1;
 const AUTHOR = 2;
 => enum으로 대체가능 */

//기본 0부터 시작, 변경 가능 / 5를 줬으니 뒤에 속성들은 6,7이 옴
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[]; //문자열배열
favoriteActivities = ["work out", "coding"];

for (const key of person.hobbies) {
  console.log(key.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
