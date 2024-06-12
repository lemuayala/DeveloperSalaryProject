const Usuario = require("../models/userModel");

const crearUsuario = async (req, res) => {
  const {
    nombre,
    apellido,
    correo,
    cargoActual,
    salarioNeto,
    actualizacionSalario,
    porcentajeAumento,
    frecuenciaAumento,
  } = req.body;

  const nuevoUsuario = new Usuario({
    nombre,
    apellido,
    correo,
    cargoActual,
    salarioNeto,
    actualizacionSalario,
    porcentajeAumento,
    frecuenciaAumento,
  });

  try {
    const resultado = await nuevoUsuario.save();
    res
      .status(201)
      .json({ message: "Usuario creado exitosamente", data: resultado });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear usuario", error: error.message });
  }
};

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res
      .status(200)
      .json({ message: "Usuarios obtenidos exitosamente", data: usuarios });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al obtener usuarios", error: error.message });
  }
};

module.exports = { crearUsuario, obtenerUsuarios };
