const {
  validateTaskName,
  generateTaskId,
  filterCompletedTasks,
} = require('../../src/utils/taskLogic');
test('empty task name returns false', () => {
  expect(validateTaskName('')).toBe(false);
});

test('generateTaskId returns unique string', () => {
  const id1 = generateTaskId();
  const id2 = generateTaskId();
  expect(typeof id1).toBe('string');
  expect(id1).not.toBe(id2);
});

test('filterCompletedTasks filters out completed tasks', () => {
  const tasks = [
    { id: '1', completed: true },
    { id: '2', completed: false },
  ];
  expect(filterCompletedTasks(tasks)).toEqual([
    { id: '2', completed: false },
  ]);
});
