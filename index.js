const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

require("./config/database");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Developer Salary",
      version: "1.0.0",
      description: "API para gestionar salarios de desarrolladores",
    },
  },
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Usa las rutas definidas en userRoutes.js
app.use("/api", userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
