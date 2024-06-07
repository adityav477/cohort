import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on("erro", (error) => {
  console.log("Redis client error", error);
});

app.post("/submit", async (req, res) => {
  const { problemId, code, language } = req.body;

  try {
    await client.lPush("problems", JSON.stringify({ problemId, code, language }));
    res.status(200).send("Submissions received and stored");
  } catch (e) {
    console.log(e)
    res.status(500).send("Failed to store the data in redis");
  }
})

startServer();
async function startServer() {
  try {
    await client.connect();
    console.log("Redis Connected");

    app.listen(3000, () => {
      console.log("Backend started on port 3000");
    });

  } catch (error) {
    console.log("Redis connected Failed: ", error);
  }
}
