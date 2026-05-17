/**
 * Express Application - Main entry point
 * Sets up middleware and mounts route handlers
 */

const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(express.json());

// Mount routes
app.use(taskRoutes);

module.exports = app;