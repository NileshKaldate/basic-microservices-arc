import { useState } from "react";
import axios from "axios";
import Posts from "./Posts";
function App() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSubmit = () => {
    if (title !== "") {
      axios
        .post("http://localhost:8000/posts", {
          body: {
            title: title,
          },
        })
        .then((res) => {
          if (res.status === 201) {
          }
        });
    }
  };
  const handleOnChange = (e) => {};
  return (
    <div>
      <h1>Create a post</h1>
      <input onChange={handleOnChange} />
      <button onClick={handleSubmit}>Add</button>
      <h1>Posts</h1>
      {posts.map((post) => {
        return <Posts post={post} />;
      })}
    </div>
  );
}

export default App;
