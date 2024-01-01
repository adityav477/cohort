let currentdate = new Date();

// console.log("the current date is " + currentdate.getDate());
// console.log("the current year is " + currentdate.getFullYear());
// console.log("the current month is " + (xxxcurrentdate.getMonth() + 1)); //added 1 because gives zerod based indexing

//getTime() - gives the milisecods past since 1970
//use case is below to know the time a function takes to be exeuctied
// let sum = 0;
// let beforeDate = new Date();
// let beforeTime = beforeDate.getTime();
// for (let i = 0; i < 1000000000; i++) {
//   sum += i;
// }
// let afterDate = new Date();
// let afterTime = afterDate.getTime();
// console.log(
//   "the time to execute the sum function is " + (afterTime - beforeTime)
// );

//JSON USE CASE
//JSON.parse - converts sting to json format
// let user1 = '{"name":"Aditya","age":21,"gender":"male"}';
// let parse = JSON.parse(user1);
// console.log("output of parse name is " + parse.name);

// //JSON.strigify - converts the json object to sting
// let user2 = {
//   name: "Aditya1",
//   age: 21,
//   gender: "male",
// };
// console.log("output of stringify is " + JSON.stringify(user2));
