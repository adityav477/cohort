const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/todo", (req, res) => {
  const cretatepayload = req.body;
  const parsepayload = "hello";
})
