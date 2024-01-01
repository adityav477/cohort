const express = require("express");
const app = express();

var users = [
  {
    name: "John",
    kidneys: [
      {
        health: false,
      },
      {
        health: true,
      },
      {
        health: true,
      },
      {
        health: true,
      },
    ],
  },
];

//to make the req.body.isHealthy work in post request
app.use(express.json());

app.get("/", (req, res) => {
  const johnsKidneys = users[0].kidneys;
  const numberOfKidneys = johnsKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnsKidneys[i].health) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

//for post request we send data thorugh body in postman
app.post("/", (req, res) => {
  const ishealthy = req.body.isHealthy;
  users[0].kidneys.push({
    health: ishealthy,
  });
  res.json({
    msg: "from post",
  });
});

app.put("/", (req, res) => {
  if (unhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].health = true;
    }
    res.json({
      msg: "from put",
    });
  } else {
    res.status(411).json({
      msg: "from put: you have no bad kidneys",
    });
  }
});

app.delete("/", (req, res) => {
  if (unhealthyKidney()) {
    let newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].health) {
        newKidneys.push({
          health: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "from delete",
    });
  } else {
    res.status(411).json({
      msg: "from delete: you have no bad kidneys",
    });
  }
});

//to detect if any unhealthy kidney is present or not
function unhealthyKidney() {
  let hasunhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].health) {
      hasunhealthyKidney = true;
    }
  }
  return hasunhealthyKidney;
}

app.listen(3000, () => {
  console.log("Server is up");
});
