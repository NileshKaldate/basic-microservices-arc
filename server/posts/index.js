const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

let posts = [];
app.get("/", (req, res) => {
  res.status(200).json(posts);
});

app.post("/", (req, res) => {
  const { title } = req.body;
  const id = "id" + Math.random().toString(16).slice(2);
  posts = [...posts, { title: title, id: id }];
  axios.post("http://localhost:8003/posts", {
    postId: id,
    title: title,
  });
  res.status(200).json({
    message: "Post added successfully",
  });
});

app.listen(8001, () => {
  console.log(`Server is running on port ${8001}`);
});
