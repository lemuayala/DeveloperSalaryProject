const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuración de Swagger
const swaggerDefinition = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API for Argentine Developer Salaries",
      version: "1.0.0",
      description:
        "API para gestionar salarios de desarrolladores en Argentina",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      schemas: {
        Salary: {
          type: "object",
          required: [
            "userId",
            "type",
            "seniority",
            "salary",
            "currency",
            "hasRaise",
          ],
          properties: {
            userId: {
              type: "string",
              description: "ID del usuario",
            },
            type: {
              type: "string",
              enum: ["Backend", "Fullstack"],
              description: "Tipo de desarrollador",
            },
            seniority: {
              type: "string",
              enum: [
                "Trainee",
                "Junior",
                "Semi-Senior",
                "Senior",
                "Tech Leader",
              ],
              description: "Nivel de seniority",
            },
            salary: {
              type: "number",
              description: "Salario del desarrollador",
            },
            currency: {
              type: "string",
              enum: ["ARS", "USD"],
              description: "Moneda del salario",
            },
            hasRaise: {
              type: "boolean",
              description: "Si el salario tiene aumentos",
            },
            raiseFrequency: {
              type: "string",
              description: "Frecuencia del aumento salarial",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Fecha de creación",
            },
            modifiedAt: {
              type: "string",
              format: "date-time",
              description: "Fecha de modificación",
            },
          },
        },
      },
    },
  },
};

// Paths to files containing OpenAPI definitions
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
