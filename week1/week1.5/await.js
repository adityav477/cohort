function forpromise() {
  return new Promise((resolve) => {
    console.log(4);
    setTimeout(() => {
      console.log("hi there from setTimeout");
      resolve("hi there from resolve");
    }, 2000);
    // console.log("hi there");
    // resolve("hi");
  });
}

async function main() {
  console.log(2);
  let value = await forpromise();
  console.log(3);
  console.log("habibi " + value);
  // the above code is similar to
  //   forpromise().then(function (value) {
  //     console.log(3);
  //     console.log("habibi " + value);
  //   });
}

console.log(1);
main();
for (let i = 0; i < 1000; i++) {
  if (i > 998) {
    console.log("from for");
  }
}

//await stucks the code inside the async function until the resolve is received but the code outside the async function runs normally asynchronously
//1
// 2
// 4
// from for
// hi there from setTimeout
// 3
// habibi hi there from resolve

//this is the output without the await
//1
// 2
// 4
// 3
// habibi[object Promise]
// from for
// hi there from setTimeout

//this is the output without the async and await- that is normal promise when called it goes in the callback queue
// 1
// 2
// 4
// 3
// habibi[object Promise]
// from for
// hi there from setTimeout
