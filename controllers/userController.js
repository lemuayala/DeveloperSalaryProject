// controllers/userController.js

const User = require("../models/userModel");

const createUser = async (req, res) => {
  const {
    nombre,
    apellido,
    correo,
    cargoActual,
    salarioNeto,
    actualizacionSalario,
  } = req.body;
  try {
    // Crea una instancia del modelo User con los datos recibidos
    const newUser = new User({
      nombre,
      apellido,
      correo,
      cargoActual,
      salarioNeto,
      actualizacionSalario,
    });
    // Guarda el nuevo usuario en la base de datos
    await newUser.save();
    res
      .status(201)
      .json({ message: "Usuario creado exitosamente", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};

module.exports = { createUser };
