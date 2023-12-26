const express = require("express");

const app = express();
const posts = [];

app.use(express.json());

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

const handleEvents = (req, res) => {
  if (req.body.type === "postCreated") {
    const { postId, title } = req.body.data;
    posts.push({ postId, title, comments: [] });
    console.log(posts);
    res.send();
  }
  if (req.body.type === "commentCreated") {
    const { postId, content, commentId } = req.body.data;
    const post = posts.find((post) => post.postId === postId);
    post.comments.push({ content, commentId });
    console.log(posts);
    res.send();
  }

  console.log(posts);
};

app.post("/events", (req, res) => {
  handleEvents(req, res);
});

app.listen(8003, () => {
  console.log(`Server is listening on port ${8003}`);
});
