const employeeService = require("../services/employeeService");

const createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(req.params.id, req.body);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await employeeService.deleteEmployee(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
};
