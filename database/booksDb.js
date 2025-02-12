const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const dbName = "booksDb";
async function connectdb() {
  await client.connect();
  const db = client.db(dbName);
  return db;
}
module.exports = connectdb;
