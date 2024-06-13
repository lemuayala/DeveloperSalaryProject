const Salary = require("../models/salaryModel");

// Crear un nuevo salario de desarrollador
exports.createSalary = async (req, res) => {
  try {
    const {
      userId,
      type,
      seniority,
      salary,
      currency,
      hasRaise,
      raiseFrequency,
    } = req.body;
    const Salary = new Salary({
      userId,
      type,
      seniority,
      salary,
      currency,
      hasRaise,
      raiseFrequency,
    });
    await Salary.save();
    res.status(201).json(Salary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los salarios de desarrolladores
exports.getSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un salario de desarrollador por ID
exports.getSalaryById = async (req, res) => {
  try {
    const salary = await Salary.findById(req.params.id);
    if (!salary) {
      return res
        .status(404)
        .json({ error: "Salario de desarrollador no encontrado" });
    }
    res.status(200).json(salary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un salario de desarrollador
exports.updateSalary = async (req, res) => {
  try {
    const { type, seniority, salary, currency, hasRaise, raiseFrequency } =
      req.body;
    const updatedSalary = await Salary.findByIdAndUpdate(
      req.params.id,
      { type, seniority, salary, currency, hasRaise, raiseFrequency },
      { new: true }
    );
    res.status(200).json(updatedSalary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un salario de desarrollador
exports.deleteSalary = async (req, res) => {
  try {
    await Salary.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
