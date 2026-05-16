const express = require("express");

const app = express();
app.use(express.json());

let tasks = [];

function generateTaskId() {
  return Math.random().toString(36).substring(2, 9);
}

function validateTaskTitle(title) {
  return typeof title === "string" && title.trim().length > 0;
}

app.post("/tasks", (req, res) => {
  const { title } = req.body ?? {};

  if (!validateTaskTitle(title)) {
    return res.status(400).json({ error: "Task title is required" });
  }

  const task = {
    id: generateTaskId(),
    title: title.trim(),
    completed: false,
  };

  tasks.push(task);

  return res.status(201).json(task);
});

app.get("/tasks", (req, res) => {
  return res.status(200).json(tasks);
});

module.exports = app;