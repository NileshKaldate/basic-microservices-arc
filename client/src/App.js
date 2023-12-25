import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
function App() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSubmit = () => {
    if (title !== "") {
      axios
        .post("http://localhost:8000/posts", {
          title: title,
        })
        .then((res) => {
          if (res.status === 200) {
            fetchData();
          }
        });
    }
  };
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const fetchData = () => {
    axios.get("http://localhost:8000/posts").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Create a post</h1>
      <input onChange={handleOnChange} />
      <button onClick={handleSubmit}>Add</button>
      <h1>Posts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "20px",
        }}
      >
        {posts.map((post) => {
          return <Posts post={post} />;
        })}
      </div>
    </div>
  );
}

export default App;
