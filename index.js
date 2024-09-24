const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const collegeRoutes = require("./routes/CollegeRoutes");
require("dotenv").config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB(process.env.MONGODB_URI); // Assuming your connectDB function accepts a URI

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", collegeRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
