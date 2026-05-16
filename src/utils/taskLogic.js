// Helper: check that a value is a non-empty string
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateTaskName(name) {
  return isNonEmptyString(name);
}

// Helper: generate a short random base36 string
function randomBase36(length = 7) {
  return Math.random().toString(36).substring(2, 2 + length);
}

function generateTaskId() {
  return randomBase36(7);
}

function ensureArray(input) {
  return Array.isArray(input) ? input : [];
}

function filterCompletedTasks(tasks) {
  return ensureArray(tasks).filter((task) => !task.completed);
}

module.exports = {
  validateTaskName,
  generateTaskId,
  filterCompletedTasks,
};