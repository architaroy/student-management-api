const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const studentRoutes = require("./routes/student.route.js");

// Middleware
const logger = require("./middleware/logger.middleware");
const errorHandler = require("./middleware/error.middleware");
const notFound = require("./middleware/notFound.middleware");


const app = express();

// Database Connect
connectDB();

// Built-in Middleware
app.use(express.json());

// Custom Logger Middleware
app.use(logger);

// Routes
app.use("/api", studentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running...");

});

app.use(notFound);

// Error Handling Middleware 
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});