
//sum inference in js for return value of a function 
// function sum(a: number, b: number): number {
//   return a + b;
// }

//isLeagal
// function isLegal(age: number): boolean {
//   if (age < 18) {
//     return false;
//   } else {
//     return true;
//   }
// }

//takes a function and executies it after sometime
//function that accepts nothign and returns void i.e nothinjg 
// function runAfter(fn: () => void) {
//   setTimeout(fn);
// }
//
// runAfter(() => {
//   console.log("from function");
// })

//interfaces is like schema in mongoose that helps to create schema fo value to contorl the confustion of types 
// interface User {
//   firstName: string;
//   lastName: string;
//   age: number,
//   email?: string, // we did ? because the input user may or may not contian email and if not given it doesn't give errors
// }
//
// function isLegal(user: User): boolean {
//   if (user.age < 18) {
//     console.log(false);
//     return false;
//   } else {
//     console.log(false);
//     return true;
//   }
// }
//
// isLegal({
//   firstName: "Aditya",
//   lastName: "Vishwakarma",
//   age: 23
// })

//implementing classes in ts with interfaces well both interface and types do the same thing but with types you cant implement classes
// and types make it possible to use Unions and intersections
// types also to declare arrays in ts

//types
//1.Union
// type StringOrNumber = string | number;
//
// function greet(id: StringOrNumber): void {
//   console.log("hi " + id);
// }
//
// greet("hello");

//2.intersections - you can use types and interface but for union and intersections only use type
// type Employee = { // types wil lalso do 
//   name: string,
//   startDate: Date;
// }
//
// interface Manager { // interface will also do
//   name: string,
//   department: string,
// }
//
// type TeamLead = Employee & Manager;
//
// const teamlead: TeamLead = {
//   name: "Aditya",
//   startDate: new Date(),
//   department: "Operations",
// }
//
// console.log(teamlead);

//3. Arrays 
// type tsArray = number[]; //declares an array of numbers
//
// function max(a: number[]): number {
//   //logic to implement the max number of array;
//   return 0;
// }

//enumerations - enu are the way to define named constants 
//
// enum Directions {
//   Up,
//   Down,
//   Right,
//   Left,
// }
//
// function giveDirections(input: Directions) {
//   console.log(input);
// }
//
// giveDirections(Directions.Up);


//generic - to explicity declare the type of a function can take any type as input
// function any<T>(input: T[]) {
//   return input;
// }
//
// any<string>(["Aditya", "Vishwakarma"]);
// any([1, 3, 5]);


