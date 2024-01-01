function forpromise() {
  console.log(3);
  return new Promise((resolve) => {
    console.log(4);
    resolve("hi hello");
    console.log(7);
  });
}

function rdata(data) {
  console.log(data);
}

sconsole.log(5);
let a = forpromise();

console.log(1);
a.then(rdata);
console.log(2);
for (let i = 0; i < 1000; i++) {
  if (i > 998) {
    console.log("from for");
  }
}

// 5
// 3
// 4
// 1
// 2
// from for
// hi hello
