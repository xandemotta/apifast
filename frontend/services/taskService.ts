// src/services/taskService.ts

import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export async function createTask(task: any): Promise<any> {
  try {
    const response = await apiClient.post("/create", task);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create task: ${error}`);
  }
}
