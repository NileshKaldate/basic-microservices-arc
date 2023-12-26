const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const { type } = req.body;
  const { data } = req.body;
  axios.post("http://localhost:8003/events", {
    type: type,
    data: data,
  });
});

app.listen(8005, () => {
  console.log(`Server is listening on port ${8005}`);
});
