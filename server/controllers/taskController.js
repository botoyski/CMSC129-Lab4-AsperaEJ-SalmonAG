/**
 * Task Controller - Handles HTTP request/response
 * Delegates business logic to service layer
 */

const taskService = require("../services/taskService");

const taskController = {
  /**
   * POST /tasks handler
   * Creates a new task from request body
   */
  createTask: function (req, res) {
    const { title } = req.body ?? {};

    const task = taskService.createTask(title);

    if (!task) {
      return res.status(400).json({ error: "Task title is required" });
    }

    return res.status(201).json(task);
  },

  /**
   * GET /tasks handler
   * Returns all tasks
   */
  getAllTasks: function (req, res) {
    const tasks = taskService.getAllTasks();
    return res.status(200).json(tasks);
  },
};

module.exports = taskController;
