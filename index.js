const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// this middleware will fix req.body = undefined problem
app.use(express.json());

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
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
