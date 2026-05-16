function validateTaskName(name) {
  return typeof name === 'string' && name.trim().length > 0;
}

function generateTaskId() {
  return Math.random().toString(36).substring(2, 9);
}

function filterCompletedTasks(tasks) {
  if (!Array.isArray(tasks)) return [];
  return tasks.filter((task) => !task.completed);
}

module.exports = {
  validateTaskName,
  generateTaskId,
  filterCompletedTasks,
};