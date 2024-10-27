const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");
const formRoutes = require("./routes/formRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/forms", formRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the NAS Backend API");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Example of error handling middleware
