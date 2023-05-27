const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "sabana", gmail: "sabana@gmail.com" },
  { id: 1, name: "sabnoor", gmail: "sabnoor@gmail.com" },
  { id: 1, name: "sabila", gmail: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("server is running properly");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
