# Task Manager App

A simple Task Manager web application built using Test-Driven Development (TDD) for CMSC 129 Laboratory Assignment 4. The application allows users to create, view, and delete tasks in order to manage daily activities efficiently. The project focuses on applying the Red-Green-Refactor workflow through unit, integration, and system testing with automated CI support.

---
## Live Deployment
https://cmsc129-lab4-asperaej-salmonag-v2.vercel.app/

## User Stories

1. As a user, I want to add a task so that I can keep track of things I need to do.

2. As a user, I want to view all tasks so that I can see my pending activities.

3. As a user, I want to delete a task so that I can remove completed or unnecessary tasks.

---

## Tech Stack

### Frontend
- React

### Backend
- Node.js
- Express.js

### Testing Tools
- Jest
- React Testing Library
- Supertest
- Playwright

### CI/CD
- GitHub Actions

### Data Storage
- In-memory array storage (no database)

---

## Testing Strategy

### Unit Testing
Unit tests will focus on isolated business logic functions such as task validation and task data handling. These tests will not involve HTTP requests, browsers, or external services.

Planned unit test targets:
- Task title validation
- Empty task checking
- Task object formatting

### Integration Testing
Integration tests will verify that backend components work correctly together through real HTTP request-response cycles using Express routes and handlers.

Planned integration test targets:
- Creating a task through API requests
- Retrieving task lists through API requests

### System Testing
System tests will simulate real user interaction in a browser using Playwright. These tests will validate complete user workflows based on the defined user stories.

Planned system test targets:
- Adding a task from the UI
- Viewing created tasks
- Deleting a task from the UI

---

## Setup Instructions

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

### Run Unit and Integration Tests

```bash
npm test
```

### Run System Tests

```bash
npx playwright test
```

---

## Test Results

### Unit Testing
![alt text](images/unit_test.png)

### Integration Testing
![alt text](images/integration_test.png)

### System Testing
![alt text](images/system_test.png)

---

## CI/CD Setup

GitHub Actions will be used to automatically run tests on every push to the main branch. The CI pipeline will serve as evidence of the TDD process by showing failing runs during the Red phase and passing runs during the Green phase.

Pipeline behavior:
- RED commits → failing CI
- GREEN commits → passing CI

## Live Depl

## Reflection

What I found most difficult about writing tests before code was figuring out the expected behavior without already having an implementation in mind. At first, I kept wanting to write the function or the API first because it felt more natural, and only then think about what the test should check. Writing tests first forced me to think more strictly about inputs, outputs, and edge cases before anything existed. It was also challenging to design meaningful tests for integration and system levels because I had to imagine how the routes and UI would behave without actually building them yet.

Writing tests first definitely changed the way I designed my code. Instead of building everything in one file or writing logic directly inside routes, I was pushed to separate concerns more clearly. For example, I ended up splitting business logic, route handling, and data storage so that each test level could target a specific part of the system. It also made me focus on simplicity during implementation, since the goal was only to pass the tests rather than over-engineer features. Overall, it made the development process more structured and intentional, even though it felt slower at the beginning.

