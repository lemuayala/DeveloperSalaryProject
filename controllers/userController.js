const { client } = require("../config/database");

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
    const database = client.db("DeveloperSalaryBD");
    const usuariosCollection = database.collection("usuarios");
    const usuario = {
      nombre,
      apellido,
      correo,
      cargoActual,
      salarioNeto,
      actualizacionSalario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    };
    const result = await usuariosCollection.insertOne(usuario);
    res.status(201).json({ message: "Usuario creado", id: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: "Error al crear usuario", error: err });
  }
};

module.exports = { createUser };
