const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
require("./config/database");
require("./config/passport");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(
  session({
    secret: "your_session_secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Usa las rutas definidas en userRoutes.js y authRoutes.js
app.use("/api", userRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
