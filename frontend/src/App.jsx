import { useEffect, useState } from "react";
import Card from "./components/common/Card";
import EmployeeForm from "./components/employees/EmployeeForm";
import EmployeeTable from "./components/employees/EmployeeTable";
import * as employeeApi from "./api/employeeApi";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const fetchEmployees = async () => {
    try {
      const data = await employeeApi.getEmployees();
      setEmployees(data);
    } catch {}
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSave = async (employeeData) => {
    try {
      if (currentEmployee) {
        await employeeApi.updateEmployee(currentEmployee._id, employeeData);
      } else {
        await employeeApi.createEmployee(employeeData);
      }
      setCurrentEmployee(null);
      fetchEmployees();
    } catch {}
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this employee?")) return;
    try {
      await employeeApi.deleteEmployee(id);
      fetchEmployees();
    } catch {}
  };

  return (
    <Card title="Employee Management">
      <EmployeeForm
        currentEmployee={currentEmployee}
        onSave={handleSave}
        onCancel={() => setCurrentEmployee(null)}
      />
      <h2>Employees ({employees.length})</h2>
      <EmployeeTable
        employees={employees}
        onEdit={(emp) => setCurrentEmployee(emp)}
        onDelete={handleDelete}
      />
    </Card>
  );  
  hj<html 
}
export default App;
