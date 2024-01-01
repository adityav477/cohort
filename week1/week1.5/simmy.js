function findSum(n) {
  let ans = 0;
  console.log("entered loop");
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  console.log("out of loop");
  return ans;
}

function findSumTill100() {
  console.log("finSumTill100");
  return findSum(100);
}

setTimeout(findSumTill100, 100000);

console.log("hello world");

for (let i = 0; i < 100000; i++) {
  if (i >= 99998) {
    console.log("out of hehe");
  }
}
