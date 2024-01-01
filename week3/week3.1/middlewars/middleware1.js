const express = require("express");

const app = express();

function usernamemiddleware(req, res, next) {
  if (req.headers.username != "Aditya" || req.headers.password != "pass") {
    res.status(404).json({
      msg: "User not found",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  if (req.query.kidneyId != "1" && req.query.kidneyId != "2") {
    res.status(404).json({
      msg: "Kidney ID not found",
    });
  } else {
    next();
  }
}

app.get("/health", usernamemiddleware, kidneyMiddleware, (req, res) => {
  //do some logic to check the health

  res.send("your health is fine");
});

app.get("/heart", usernamemiddleware, (req, res) => {
  //do some logic to check the heart

  res.send("your heart is fine");
});
app.listen(3000, () => {
  console.log("server is up and running");
});
