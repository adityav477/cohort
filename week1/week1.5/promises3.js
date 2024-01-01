function forpromise() {
  return new Promise((resolve) => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
      resolve("how is it going");
      console.log(3);
    }, 2000);
  });
}

const value = forpromise();
value.then(function (data) {
  console.log(4);
  console.log("hi there");
  console.log(data);
  console.log(5);
});

for (let i = 0; i < 1000; i++) {
  if (i > 998) {
    console.log("from for");
  }
}

// 1
// from for
// 2
// 3
// 4
// hi there
// how is it going
// 5
