const express = require("express");
const bookRouter = express.Router();
const { ObjectId } = require("mongodb");
const BookController = require("../controllers/BookController");

bookRouter.route("/").get(BookController.index).post(BookController.create);

bookRouter
  .route("/:id")
  .get(BookController.show)
  .patch(BookController.update)
  .delete(BookController.delete);

module.exports = bookRouter;
