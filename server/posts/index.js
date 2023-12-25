const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let posts = [];
app.get("/", (req, res) => {
  res.status(200).json(posts);
});

app.post("/", (req, res) => {
  const post = req.body;
  const id = "id" + Math.random().toString(16).slice(2);
  posts = [...posts, { ...post, id: id }];
  res.status(200).json({
    message: "Post added successfully",
  });
});

app.listen(8001, () => {
  console.log(`Server is running on port ${8001}`);
});
