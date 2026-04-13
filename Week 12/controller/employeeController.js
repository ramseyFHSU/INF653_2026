const Employee = require("../model/Employee");

// Get All Employees
const GetAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "No employees found!" });
    }
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create New Employee
const CreateNewEmployee = async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    return res
      .status(400)
      .json({ message: "First and Last Names are required!" });
  }
  try {
    const result = await Employee.create({ firstName, lastName });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Employee
const UpdateEmployee = async (req, res) => {
  const { id, firstName, lastName } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Employee ID is required!" });
  }
  try {
    const employee = await Employee.findById(id).exec();
    if (!employee) {
      return res.status(404).json({ message: `No employee matches ID ${id}` });
    }
    if (firstName) employee.firstName = firstName;
    if (lastName) employee.lastName = lastName;
    const result = await employee.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Employee
const DeleteEmployee = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Employee ID is required!" });
  }
  try {
    const employee = await Employee.findById(id).exec();
    if (!employee) {
      return res.status(404).json({ message: `No employee matches ID ${id}` });
    }
    const result = await Employee.deleteOne({ _id: id });
    res.json({ message: "Employee deleted", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get One Employee
const GetEmployee = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Employee ID is required!" });
  }
  try {
    const employee = await Employee.findById(id).exec();
    if (!employee) {
      return res.status(404).json({ message: `No employee matches ID ${id}` });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  GetAllEmployees,
  CreateNewEmployee,
  UpdateEmployee,
  DeleteEmployee,
  GetEmployee,
};
