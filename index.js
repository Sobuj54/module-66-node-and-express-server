const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const users = [
  { id: 1, name: "sabana", gmail: "sabana@gmail.com" },
  { id: 2, name: "sabnoor", gmail: "sabnoor@gmail.com" },
  { id: 3, name: "sabila", gmail: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("server is running properly");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("users hitting");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
