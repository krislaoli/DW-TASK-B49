const express = require("express");
const app = express();

app.get("/Hello World", (req, res) => {
  res.send("Hello World");
});

app.get("/Cinta", (req, res) => {
  res.send({
    id: 1,
    name: "Kris",
  });
});

app.get("/Love", (req, res) => {
  res.send("testing");
});

app.get("/Do You Love Me", (req, res) => {
  res.send("Do");
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000");
});
