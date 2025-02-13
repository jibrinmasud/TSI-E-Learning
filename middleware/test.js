const { models } = require("mongoose");

const test = (req, res, next) => {
  console.log("Testing MiddleWare");
  next();
};
module.exports = test;
