const { default: mongoose } = require("mongoose");

async function connectdb() {
  await mongoose.connect("mongodb://localhost:27017/booksDb");
  return mongoose.connection;
}

module.exports = connectdb;
