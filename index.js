const express = require("express");
const bodyParser = require("body-parser");
const { crearUsuario } = require("./controllers/userController");
require("./config/database");
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Definicion de rutas
app.post("/usuarios", crearUsuario);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
