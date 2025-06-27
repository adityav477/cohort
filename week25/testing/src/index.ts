import express from "express";
import { prismaClient } from "./db";

const app = express();
app.use(express.json());


app.post("/sum", async (req, res) => {
  const { a, b } = req.body;

  if (a > 1000000 || b > 1000000) {
    return res.status(411).json({
      message: "Huge Number not supported "
    })
  }

  const result = a + b;

  const request = await prismaClient.request.create({
    data: {
      a: a,
      b: b,
      answer: result,
      type: "ADD"
    }
  })

  res.status(200).json({ answer: result, id: request.id });
})

export default app;
