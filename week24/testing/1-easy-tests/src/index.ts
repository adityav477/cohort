import express from "express";

const app = express();
app.use(express.json());


app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.status(200).json({ answer: result });
})

export default app;
