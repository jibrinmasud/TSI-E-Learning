const connectdb = require("../database/booksDb");
exports.index = async (req, res) => {
  const db = await connectdb();
  const books = await db.collection("books").find().toArray();
  res.json(books);
};

exports.create = async (req, res) => {
  const db = await connectdb();
  await db.collection("books").insertOne(req.body);
  res.status(201).json({ data: "Book added" });
};

exports.show = async (req, res) => {
  const _id = new ObjectId(req.params.id);
  const db = await connectdb();
  const book = await db.collection("books").find({ _id }).toArray();
  res.json(book);
};

exports.update = async (req, res) => {
  const _id = new ObjectId(req.params.id);
  const db = await connectdb();
  await db.collection("books").updateOne({ _id }, { $set: req.body });
  res.json({ data: "Book updated" });
};

exports.delete = async (req, res) => {
  const _id = new ObjectId(req.params.id);
  const db = await connectdb();
  await db.collection("books").deleteOne({ _id });
  res.status(204).json();
};
