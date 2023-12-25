import React, { useState } from "react";
import axios from "axios";
import Comments from "./Comments";

const Posts = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "5px 10px",
      }}
    >
      <h2>{post.title}</h2>
      <Comments postId={post.id} />
    </div>
  );
};

export default Posts;
