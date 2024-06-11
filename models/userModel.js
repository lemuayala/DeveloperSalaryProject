const mongoose = require("mongoose");

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  cargoActual: {
    type: String,
    required: true,
  },
  salarioNeto: {
    type: Number,
    required: true,
  },
  actualizacionSalario: {
    type: Boolean,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now,
  },
});

// Crea el modelo User basado en el esquema
const User = mongoose.model("User", userSchema);

module.exports = User;
