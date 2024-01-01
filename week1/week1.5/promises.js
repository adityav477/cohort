const fs = require("fs");

function forpromise() {
  console.log(3);
  return new Promise((resolve) => {
    console.log(7);
    fs.readFile("hi.txt", "utf-8", (err, data) => {
      console.log(4);
      resolve(data);
      console.log(5);
    });
  });
}

function rdata(data) {
  console.log(6);
  console.log(data);
}

let a = forpromise(); //calls promises and it get's executed till the 7 then the fs.readFile goes in callbackqueue
console.log("1");
a.then(rdata); //gets in the callback queue after the fs.readFile and hence it's output is printed last
console.log("2");
for (let i = 0; i < 1000; i++) {
  if (i > 998) {
    console.log("from for 1;");
  }
}

// 3
// 7
// 1
// 2
// from for 1;
// 4
// 5
// 6
// hi there from hi.txt

//first the fs.readfile enters the callback queue and after the js thread is free after running all the other sync functions then it executes
//the the a.then(rdata)

/* 
        flow goes like :- 
         forpromise() get's called the ouput 3,7 get's printed and since fs.readFile takes time then it get's in callback queue and the js 
            thread continues and prints the " 1 2 from for 1" we still don't know if the fs.readFile has completed or not it is taking it's time 
            and after the thread is complete it prints "4 5 " and then the rdata() is called and it prints the data received from resolve
        


*/
