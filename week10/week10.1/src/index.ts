import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://adityav477:ipUY6BxzQd7P@ep-solitary-salad-a5a9f82g.us-east-2.aws.neon.tech/neondb?sslmode=require"
})

// async function createUserTable() {
//   await client.connect();
//   const result = await client.query(`
//     CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50),
//     email VARCHAR(225) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// )
// `)
//   console.log(result);
//   console.log("hi");
// }
//
// createUserTable();

//to insert data
// async function inserData() {
//   try {
//     await client.connect();
//     const inserQuery = "INSERT INTO users (username,email, password) VALUES ('username','user @gmail.com','password')";
//     const result = await client.query(inserQuery);
//     console.log(result);
//
//   } catch (err) {
//     console.log("error occured while inserting data");
//   } finally {
//     await client.end();
//   }
// }
//
// inserData();

//Preventing SQL injection
async function insertData1() {
  try {
    await client.connect();
    const insertQuery = "INSERT INTO users (username,email, password) VALUES ($1, $2, $3)";
    const values = ["username2", "email2", "password2"];
    const result = await client.query(insertQuery, values);
    console.log(result);

  } catch (error) {
    console.log("error occured while inserting data " + error);
  }
}

insertData1();
