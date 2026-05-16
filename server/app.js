const express = require("express");

const app = express();
app.use(express.json());

let tasks = [];

app.post("/tasks", (req, res) => {
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };

  tasks.push(task);

  res.status(201).json(task);
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

module.exports = app;