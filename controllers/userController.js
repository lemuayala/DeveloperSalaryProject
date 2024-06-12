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

module.exports = { crearUsuario };
