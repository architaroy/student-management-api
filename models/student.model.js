const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },

    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
    },

    course: {
      type: String,
      required: [true, "Course is required"],
    },

    department: {
      type: String,
      required: [true, "Department is required"],
    },

    semester: {
      type: String,
      required: [true, "Semester is required"],
    },

    address: {
      type: String,
      required: [true, "Address is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);