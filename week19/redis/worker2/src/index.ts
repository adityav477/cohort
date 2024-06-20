import { createClient } from "redis";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const client = createClient();
client.on("error", (error) => {
  console.log("error while connecting to redis client ", error);
})

async function processSubmissions({ submissions }: { submissions: string }) {
  const { problemId, code, language } = JSON.parse(submissions);

  console.log(`Processing submission for problemId w2 ${problemId}...`);
  console.log(`Code: ${code} w2`);
  console.log(`Language: ${language} w2`);

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Finished processing submission for problemId from worker 2${problemId}.`);
}

startRedis();

async function startRedis() {
  try {
    await client.connect();
    console.log("Connected to redis in worker2");

    while (1) {
      try {
        const submissions = await client.bl
      } catch (error) {

      }
    }
  } catch (e) {
    console.log("Error while connecting to redis in worker2", e);
  }

}

