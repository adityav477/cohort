import { createClient } from "redis";
const client = createClient();

async function processSubmissions(submissions: string) {
  const { problemId, code, language } = JSON.parse(submissions);

  console.log(`Processing submission for problemId ${problemId}... w`);
  console.log(`Code: ${code} w`);
  console.log(`Language: ${language} w`);

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Finished processing submission for problemId in worker ${problemId}.`);

}
startRedis();
async function startRedis() {
  try {
    await client.connect();
    console.log("worker connected to client");

    while (1) {
      try {
        const submissions = await client.brPop("problems", 0);
        // @ts-ignore
        await processSubmissions(submissions.element);
      } catch (error) {
        console.log("error while doing submissions in worker", error);
      }
    }

  } catch (error) {
    console.log("Error in starting redis worker");
  }
}

