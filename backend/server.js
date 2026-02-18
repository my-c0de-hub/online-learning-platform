import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

// Middleware - These help our server handle requests properly
app.use(cors()); // Allows frontend to communicate with backend
app.use(express.json()); // Allows server to read JSON data

// Routes - These define what happens when someone visits different URLs

// Home route - simple welcome message
app.get("/", (req, res) => {
  res.send("Welcome to Online Learning Platform API!");
});

// API route - example endpoint
app.get("/api/", (req, res) => {
  res.json({ message: "API is working!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
