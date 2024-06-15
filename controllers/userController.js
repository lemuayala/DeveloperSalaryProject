const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userController = {};

// Crear un nuevo usuario
userController.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res
      .status(201)
      .json({ message: "Usuario creado exitosamente", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear usuario", error: error.message });
  }
};

// Obtener todos los usuarios
userController.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener usuarios", error: error.message });
  }
};

// Obtener un usuario por ID
userController.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res
      .status(200)
      .json({ message: "Usuario actualizado exitosamente", datya: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un usuario
userController.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : undefined;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password: hashedPassword },
      { new: true }
    );
    res.status(200).json({
      message: "Usuario actualizado exitosamente",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un usuario
userController.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = userController;
