// we use app.use(desired-function) - to use it as middleware function for every other upcoming get,put,post etc calls

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

app.use(usernamemiddleware, express.json());
//used for req.body for post request cause post only takes inputs through body and not query

app.get("/health", kidneyMiddleware, (req, res) => {
  //do some logic to check the health

  res.send("your health is fine");
});

app.get("/heart", (req, res) => {
  //do some logic to check the heart

  res.send("your heart is fine");
});

app.listen(3000, () => {
  console.log("middleware2 is up");
});
