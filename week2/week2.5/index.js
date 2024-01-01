const express = require("express");

const app = express();

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const number = req.query.n;
  const sum1 = sum(number);
  res.send("hi your answer is " + sum1);
});

app.listen(3000, () => {
  console.log("server is running at 3000");
});
 