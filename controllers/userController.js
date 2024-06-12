const Usuario = require("../models/userModel");

const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res
        .status(400)
        .json({ message: "Correo o contraseña incorrectos" });
    }

    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Correo o contraseña incorrectos" });
    }

    const token = generateToken(usuario);
    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al iniciar sesión", error: error.message });
  }
};

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

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
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

  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      {
        nombre,
        apellido,
        correo,
        cargoActual,
        salarioNeto,
        actualizacionSalario,
        porcentajeAumento,
        frecuenciaAumento,
        fechaActualizacion: Date.now(),
      },
      { new: true }
    );

    if (!usuarioActualizado) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({
      message: "Usuario actualizado exitosamente",
      data: usuarioActualizado,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al actualizar usuario", error: error.message });
  }
};

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al eliminar usuario", error: error.message });
  }
};

module.exports = {
  login,
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
};
