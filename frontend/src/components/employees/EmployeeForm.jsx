import { useEffect, useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const formFields = [
  { name: "name", placeholder: "Name", type: "text", required: true },
  { name: "email", placeholder: "Email", type: "email", required: true },
  { name: "position", placeholder: "Position", type: "text", required: true },
  { name: "salary", placeholder: "Salary", type: "number", required: true }
];

const initialFormState = { name: "", email: "", position: "", salary: "" };

function EmployeeForm({ currentEmployee, onSave, onCancel }) {
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    if (currentEmployee) {
      setForm(currentEmployee);
    } else {
      setForm(initialFormState);
    }
  }, [currentEmployee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, salary: Number(form.salary) });
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={form[field.name]}
          onChange={handleChange}
          required={field.required}
        />
      ))}

      <div className="btn-group">
        <Button type="submit" variant="primary">
          {currentEmployee ? "Update Employee" : "Add Employee"}
        </Button>
        {currentEmployee && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;
