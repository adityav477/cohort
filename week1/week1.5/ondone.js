const fs = require("fs");

function readdata(cd) {
  console.log("5");
  fs.readFile("hi.txt", "utf-8", (err, data) => {
    console.log("7");
    cd(data);
    console.log("6");
  });
}

function ondone(data) {
  console.log("3");
  console.log(data);
  console.log("4");
}

console.log("1");
readdata(ondone);
console.log("2");

for (let i = 0; i < 1000; i++) {
  if (i > 998) {
    console.log("from for 1;");
  }
}
