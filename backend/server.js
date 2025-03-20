const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const cors = require("cors"); 
const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;
app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  //   console.log(req.params.id);

  const id = req.params.id;
  const singleChat = chats.find((c) => c._id === id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}.`);
});
