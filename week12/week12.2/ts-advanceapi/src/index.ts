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

interface User {
  id: string,
  name: string,
  email: string,
  age: number,
  password: string
}

//Pick - allows to create a new interface with only selected key value pairs form already created object or interface
// type updateUser = Pick<User, "name" | "age" | "password">
// function displayUserProfile(user: userPartial) {
//   console.log(user);
// }
// displayUserProfile({ name: "example1", password: "password", age: 25 });

//Partials - to make interfaces key value pair optional
// type userPartial = Partial<User>
// function displayUserProfile(user: userPartial) {
//   console.log(user);
// }
// displayUserProfile({ name: "example1" });

//ReadOnly - when you declare a const object you can't update the object but can update the value of the declared values eg. user.name="adi"
//and similary fo rarrays you can change the value inside the array but you can't change the whole array a[2] = 2 but a = [1,2,3] can't happen
//thus readonly makes it possible so that the key value or the elements of array can't be changed

// type readUser = {
//   readonly name: string,
//   readonly age: number,
// }
//
// const user1: readUser = {
//   name: "Aditya",
//   age: 23
// }
//
// user1.name = "Adit";

//Records and Maps
//Records
// users object with key of type string and value as a object with id and name both strings
// type recordUser = {
//   id: string,
//   name: string,
// }
//
// type Users = {
//   [key: string]: User
// }
// //in records we can do 
// type recordUsers = Record<string, recordUser>
// const user1: recordUsers = {
//   "hi": { id: "hi", name: "hi" },
//   "hello": { id: "hello", name: "hello" },
// }
// console.log(user1);

//Maps - are like maps in c++ it's a js concept noet a ts 
// type mapUser = { id: string, name: string };
//
// const mapUsers = new Map<string, mapUser>();
// mapUsers.set("hi", { id: "hello", name: "hello" });
// mapUsers.set("hello", { id: "hello", name: "hello" });
// console.log(mapUsers);

