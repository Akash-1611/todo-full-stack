require("dotenv").config();
const cors = require('cors');


const express = require("express");
const dbconnect= require("./config/db"); // Import DB connection
const authRoutes = require("./routes/auth"); // Import auth routes

const app = express();

// Connect to MongoDB
dbconnect();
// app.use(cors());

app.use(cors({
  origin: 'http://127.0.0.1:5500',
}));

// Middleware to parse JSON
app.use(express.json());

// Define Routes
app.use("/api/auth", authRoutes); // Use auth routes

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Authentication API!");
});



// Start the Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
