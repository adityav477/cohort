"use strict";
// interface User {
//   name: string,
//   age: number
// }
//
// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }
//
// console.log(sumOfAge({ name: "user1", age: 15 }, { name: "user2", age: 45 }))
const mapUsers = new Map();
mapUsers.set("hi", { id: "hello", name: "hello" });
mapUsers.set("hello", { id: "hello", name: "hello" });
console.log(mapUsers);
