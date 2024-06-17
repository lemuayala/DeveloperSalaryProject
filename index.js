const express = require("express");
require("./config/database");

const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/userRoutes");
const salaryRoutes = require("./routes/salaryRoutes");

// Import swagger documentation
const setupSwagger = require("./swagger");

const app = express();
const port = process.env.PORT || 3000;

// Cors definitions
const allowedOrigins = [
  "http://localhost:3000",
  "https://comforting-gnome-bc33ee.netlify.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Api endponits use the rotes files
app.use("/api/users", userRoutes);
app.use("/api/salaries", salaryRoutes);

// Swagger config
setupSwagger(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
