const express = require("express");
const cors = require("cors");

const app = express();

const port = 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`);
});
