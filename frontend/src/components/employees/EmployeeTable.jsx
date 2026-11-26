import Button from "../common/Button";

function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="5" className="empty">No employees found</td>
          </tr>
        ) : (
          employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.position}</td>
              <td>${Number(emp.salary).toLocaleString()}</td>
              <td>
                <div className="actions">
                  <Button variant="info" onClick={() => onEdit(emp)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => onDelete(emp._id)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
