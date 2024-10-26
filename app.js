const express = require("express");
const connectDB = require("./config");
const triageRoutes = require("./routes/triage");
const errorHandler = require("./middleware/errorHandler");

const app = express();
connectDB();

app.use(express.json());
app.use("/api/triage", triageRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
