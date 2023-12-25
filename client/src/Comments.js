import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddComment = () => {
    const options = {
      method: "POST",
      params: {
        postId: postId,
      },
      data: {
        content: content,
      },
    };
    axios.request("http://localhost:8000/comments", options).then((res) => {
      if (res.status === 200) {
        fetchData();
      }
    });
  };

  const fetchData = () => {
    axios
      .get("http://localhost:8000/comments", {
        params: {
          postId: postId,
        },
      })
      .then((res) => {
        setComments(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ paddingLeft: "5px" }}>
      {comments.map((comment) => {
        return <p key={comment.commentId}>{comment.content}</p>;
      })}
      <input onChange={handleChange} />
      <button onClick={handleAddComment} type={"submit"}>
        comment
      </button>
    </div>
  );
};

export default Comments;
