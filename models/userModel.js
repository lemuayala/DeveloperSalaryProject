const mongoose = require("../config/database"); // Importa la conexión de Mongoose

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  cargoActual: { type: String, required: true },
  salarioNeto: { type: Number, required: true },
  actualizacionSalario: { type: Boolean, required: true },
  porcentajeAumento: { type: Number },
  frecuenciaAumento: { type: Number },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
