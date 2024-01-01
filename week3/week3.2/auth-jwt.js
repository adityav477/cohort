const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

//to check if the user is in the our database
function userExists(username, password) {
  let count = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      count = true;
    }
  }
  return count;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exists",
    });
  }

  var token = jwt.sign({ username: "username" }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);

    //decoded = { username: 'username', iat: 1703276791 }

    const username = decoded.username;

    // return a list of users other than this username
    res.json({
      users: ALL_USERS.filter((value) => {
        if (value.username === username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("auth-jwt is up");
});

/* 
const jwt = require("jsonwebtoken");
jwtPassword - for using to send in jwt.sign
cosnt token = jwt.sign({username: username }, jwtPassword);

-> when jwt.verify fails it gives error "invalid token" and not runs the code further does to avoid this we use try and catch method
->
*/
