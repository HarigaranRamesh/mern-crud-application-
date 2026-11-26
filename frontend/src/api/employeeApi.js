import { request } from "./apiClient";

export const getEmployees = () => {
  return request("/employees");
};

export const createEmployee = (employeeData) => {
  return request("/employees", {
    method: "POST",
    body: employeeData
  });
};

export const updateEmployee = (id, employeeData) => {
  return request(`/employees/${id}`, {
    method: "PUT",
    body: employeeData
  });
};

export const deleteEmployee = (id) => {
  return request(`/employees/${id}`, {
    method: "DELETE"
  });
};
