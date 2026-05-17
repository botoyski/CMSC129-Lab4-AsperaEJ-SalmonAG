const { test, expect } = require("@playwright/test");

test.describe("User Story 1 - Add Task", () => {

  test("user can add a task", async ({ page }) => {
    await page.goto("/");

    await page.fill('input[name="task"]', "Buy milk");

    await page.click('button:text("Add Task")');

    await expect(
      page.locator("text=Buy milk")
    ).toBeVisible();
  });

});

test.describe("User Story 2 - View Tasks", () => {

  test("user can view all tasks", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.locator("text=Tasks")
    ).toBeVisible();
  });

});

test.describe("User Story 3 - Delete Task", () => {

  test("user can delete a task", async ({ page }) => {
    await page.goto("/");

    await page.fill('input[name="task"]', "Study");

    await page.click('button:text("Add Task")');

    await page.click('button:text("Delete")');

    await expect(
      page.locator("text=Study")
    ).not.toBeVisible();
  });

});