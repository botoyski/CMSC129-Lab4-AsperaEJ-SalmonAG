const request = require("supertest");
const app = require("../../server/app");

describe("Task API Integration Tests", () => {

  test("POST /tasks should create a task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Buy milk" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Buy milk");
    expect(res.body.completed).toBe(false);
  });

  test("GET /tasks should return all tasks", async () => {
    const res = await request(app).get("/tasks");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});