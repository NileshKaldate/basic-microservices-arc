const express = require("express");

const app = express();
app.use(express.json({ limit: "10kb" }));

let comments = {};

app.get("/", (req, res) => {
  const { postId } = req.query;
  res.status(200).json(comments[postId] || []);
});

app.post("/", (req, res) => {
  const { content } = req.body;
  const { postId } = req.query;
  const commentId = "id" + Math.random().toString(16).slice(2);
  const data = { commentId: commentId, postId: postId, content: content };
  if (!comments[postId]) {
    comments[postId] = [];
  }
  comments[postId].push(data);
  res.status(200).json({ message: "comment added successfully" });
});

app.listen(8002, () => {
  console.log("Server is running on port 8002");
});
