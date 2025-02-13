const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const routes = require("./routes/index");
const connectdb = require("./database/booksDb");
const test = require("./middleware/test");

app.set("view engine", "pug");
app.use(test);
app.use(bodyParser.json());
app.use(routes);

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
