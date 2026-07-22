const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect...");

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ Database Connection Failed");
    console.log(error);

    process.exit(1);
  }
};

module.exports = connectDB;