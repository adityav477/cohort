import { createClient } from "redis";
const client = createClient();

async function processSubmissions(submissions: string) {
  const { problemId, code, language } = JSON.parse(submissions);

  console.log(`Processing submission for problemId ${problemId}...`);
  console.log(`Code: ${code}`);
  console.log(`Language: ${language}`);

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Finished processing submission for problemId ${problemId}.`);

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
        processSubmissions(submissions.element);
      } catch (error) {
        console.log("error while doing submissions", error);
      }
    }
  } catch (error) {
    console.log("Error in starting redis");
  }
}

