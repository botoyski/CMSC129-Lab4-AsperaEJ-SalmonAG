# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task-ui.spec.js >> User Story 1 - Add Task >> user can add a task
- Location: tests\system\task-ui.spec.js:5:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | 
  3  | test.describe("User Story 1 - Add Task", () => {
  4  | 
  5  |   test("user can add a task", async ({ page }) => {
> 6  |     await page.goto("/");
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  7  | 
  8  |     await page.fill('input[name="task"]', "Buy milk");
  9  | 
  10 |     await page.click('button:text("Add Task")');
  11 | 
  12 |     await expect(
  13 |       page.locator("text=Buy milk")
  14 |     ).toBeVisible();
  15 |   });
  16 | 
  17 | });
  18 | 
  19 | test.describe("User Story 2 - View Tasks", () => {
  20 | 
  21 |   test("user can view all tasks", async ({ page }) => {
  22 |     await page.goto("/");
  23 | 
  24 |     await expect(
  25 |       page.locator("text=Tasks")
  26 |     ).toBeVisible();
  27 |   });
  28 | 
  29 | });
  30 | 
  31 | test.describe("User Story 3 - Delete Task", () => {
  32 | 
  33 |   test("user can delete a task", async ({ page }) => {
  34 |     await page.goto("/");
  35 | 
  36 |     await page.fill('input[name="task"]', "Study");
  37 | 
  38 |     await page.click('button:text("Add Task")');
  39 | 
  40 |     await page.click('button:text("Delete")');
  41 | 
  42 |     await expect(
  43 |       page.locator("text=Study")
  44 |     ).not.toBeVisible();
  45 |   });
  46 | 
  47 | });
```