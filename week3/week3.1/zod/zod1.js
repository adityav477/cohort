const express = require("express");
//zod
const zod = require("zod");
const app = express();

const mySchema = zod.array(zod.number()); //the schema should be  array of number

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  //   console.log("from /health-checkup");
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  const response = mySchema.safeParse(kidneys);

  if (!response.success) {
    res.status(404).json({
      msg: "Wrong input format",
    });
  } else {
    res.send("your kidney lenght is " + kidneyLength);
  }
});

app.listen(3000, () => {
  console.log("zod is up");
});

/* 
various zod methods are 
const schema = zod.object({
    email: zod.string(),
    password:zod.string(),
    countyr: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})
mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
mySchema.safeParse(12); // => { success: false; error: ZodError }
*/
