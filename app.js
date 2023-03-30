require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db_connect = require("./db_connect");
const app = express();

const PORT = process.env.PORT || 8000;

db_connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
