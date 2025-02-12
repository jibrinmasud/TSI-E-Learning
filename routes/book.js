const express = require("express");
const bookRouter = express.Router();
const connectdb = require("../database/booksDb");

bookRouter
  .route("/")
  .get(async (req, res) => {
    const db = await connectdb();
    const books = await db.collection("books").find().toArray();
    res.json(books);
  })
  .post(async (req, res) => {
    const db = await connectdb();
    await db.collection("books").insertOne(req.body);
    res.json({ data: "Book added" });
  });

bookRouter
  .route("/:id")
  .get((req, res) => {
    
    res.send(`Book with ID ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`Book with ID ${req.params.id} to update`);
  })
  .delete((req, res) => {
    res.send(`Book with ID ${req.params.id} to delete`);
  });

module.exports = bookRouter;
