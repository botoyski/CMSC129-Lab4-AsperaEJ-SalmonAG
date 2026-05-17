/**
 * Task Routes - Defines all task-related endpoints
 */

const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

/**
 * POST /tasks - Create a new task
 */
router.post("/tasks", (req, res) => {
  taskController.createTask(req, res);
});

/**
 * GET /tasks - Get all tasks
 */
router.get("/tasks", (req, res) => {
  taskController.getAllTasks(req, res);
});

module.exports = router;
