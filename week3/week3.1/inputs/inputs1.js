const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-chekup", (req, res) => {
  const kidneys = req.body.kidneys;
  //   console.log(kidneys);
  const kidneyLength = kidneys.length;

  res.send("your kidney count is " + kidneyLength);
});

//error-handling or global catches - if anything wrong happens instead of showing what wet happen wrong.it helps to
//beautyfy error
//for example if we sent kidneys: 11332 i,e a number instead of an array the contorl will reach directly to the global 
//function instead of showing the actual array to the user who sent the body for post request

app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "Someting went wrong",
  });
});

app.listen(3000, () => {
  console.log("input1 is up");
});
