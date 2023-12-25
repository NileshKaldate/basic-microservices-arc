const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/posts", proxy("http://localhost:8001"));

module.exports = app;
