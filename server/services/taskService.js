/**
 * Task Service - Contains business logic for task operations
 * Does NOT handle HTTP concerns (no req/res)
 */

const store = require("../store");

function generateTaskId() {
  return Math.random().toString(36).substring(2, 9);
}

function validateTaskTitle(title) {
  return typeof title === "string" && title.trim().length > 0;
}

const taskService = {
  /**
   * Create a new task
   * @param {string} title - The task title
   * @returns {Object|null} The created task or null if validation fails
   */
  createTask: function (title) {
    if (!validateTaskTitle(title)) {
      return null;
    }

    const task = {
      id: generateTaskId(),
      title: title.trim(),
      completed: false,
    };

    return store.add(task);
  },

  /**
   * Get all tasks
   * @returns {Array} Array of all tasks
   */
  getAllTasks: function () {
    return store.getAll();
  },
};

module.exports = taskService;
