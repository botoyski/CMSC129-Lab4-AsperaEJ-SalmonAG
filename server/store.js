/**
 * In-memory task storage
 * Provides a simple interface to add and retrieve tasks
 */

let tasks = [];

const store = {
  /**
   * Add a task to storage
   * @param {Object} task - The task object with id, title, completed
   */
  add: function (task) {
    tasks.push(task);
    return task;
  },

  /**
   * Get all tasks
   * @returns {Array} Array of all tasks
   */
  getAll: function () {
    return tasks;
  },

  /**
   * Clear all tasks (useful for testing)
   */
  clear: function () {
    tasks = [];
  },
};

module.exports = store;
