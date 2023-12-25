const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.use("/posts", proxy("http://localhost:8001"));

module.exports = app;
