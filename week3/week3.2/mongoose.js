const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://adityavish126:oaoiXcfdrR9RRWpV@cluster0.zbaizjv.mongodb.net/user1"
);

//to layout the bluprint of the json object to be stored in the file
const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const existsUser = await User.findOne({ username: username });
  if (existsUser) {
    return res.status(403).json({
      msg: "User already exists",
    });
  }

  const user = new User({
    username: username,
    password: password,
    email: email,
  });

  user.save();
  res.send("User created");
});

app.listen(3000, () => {
  console.log("mongoose is up");
});
