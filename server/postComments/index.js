const express = require("express");

const app = express();
const posts = [];

app.use(express.json());

app.post("/posts", (req, res) => {
  const { postId, title } = req.body;
  posts.push({ postId, title, comments: [] });
  res.send();
});

app.post("/comments", (req, res) => {
  const { postId, content, commentId } = req.body;
  const post = posts.find((post) => post.postId === postId);
  post.comments.push({ content, commentId });
  res.send();
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.listen(8003, () => {
  console.log(`Server is listening on port ${8003}`);
});
