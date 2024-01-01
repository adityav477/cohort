const fs = require("fs");

//will run asynchronously
//third
fs.readFile("hi.txt", "utf-8", (err, data) => {
  console.log(data);
});

//1st
console.log("hi there 1");

let a = 0;
for (let i = 1; i < 100000; i++) {
  a += i;
}

//second
console.log("hi there 2");

//output
// hi there 1
// hi there 2
// hi there from hi.txt
//the order is like this because the reading file goes waits for the js thread to get empty and the thus until all the
//other console happens it waits in background and after all the other sync tasks are done then the file's date is given
    