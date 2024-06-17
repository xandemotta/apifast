import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/", // URL base do backend
});

export const getTasks = () => api.get("tasks");
export const getTask = (id) => api.get(`tasks/${id}`);
export const createTask = (task) => api.post("tasks", task);
export const updateTask = (id, task) => api.put(`tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`tasks/${id}`);

const apis = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

export default apis;
