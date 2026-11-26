const Employee = require("../models/Employee");

const createEmployee = async (data) => {
  return await Employee.create(data);
};

const getAllEmployees = async () => {
  return await Employee.find();
};

const updateEmployee = async (id, data) => {
  return await Employee.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

const deleteEmployee = async (id) => {
  return await Employee.findByIdAndDelete(id);
};

module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee
};
