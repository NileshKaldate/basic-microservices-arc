import React, { useState } from "react";
import axios from "axios";

const Posts = ({ post }) => {
  const [content, setContent] = useState("");

  const handleClick = () => {
    axios.post("http://localhost:8000/comment", {
      content: content,
    });
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "5px 10px",
      }}
    >
      <h2>{post.title}</h2>
      <input onChange={handleChange} />
      <button onClick={handleClick}>comment</button>
    </div>
  );
};

export default Posts;
