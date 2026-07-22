const express = require("express");

const router = express.Router();

const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
   deleteStudent,
} = require("../controllers/student.controller");

// Create Student
router.post("/students", createStudent);

// Get All Students
router.get("/students", getAllStudents);

// Get Student By ID
router.get("/students/:id", getStudentById);

// Update Student
router.put("/students/:id", updateStudent);

// Delete Student
router.delete("/students/:id", deleteStudent);


module.exports = router;