const express = require("express");
const { connectDB } = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Para parsear JSON en las peticiones

app.use("/api", userRoutes);

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`Server running on port ${port}`);
  } catch (err) {
    console.error("Failed to connect to database", err);
  }
});
