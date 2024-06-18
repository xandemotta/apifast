<template>
  <v-container class="task-list">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" v-for="task in tasks" :key="task.id">
        <v-card class="task-card">
          <v-card-title class="headline font-weight-bold">{{
            task.title
          }}</v-card-title>
          <v-card-text class="description-text">{{
            task.description
          }}</v-card-text>
          <v-card-actions class="d-flex justify-center align-end">
            <v-btn color="red" @click="deleteTask(task.id)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import http from "../http"; // Importe a configuração do Axios

@Component
export default class TaskList extends Vue {
  tasks: Array<{ id: number; title: string; description: string }> = [];

  async mounted() {
    this.loadTasks();
  }

  async loadTasks() {
    try {
      const response = await http.get("/tasks");
      this.tasks = response.data;
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  }

  async deleteTask(taskId: number) {
    try {
      await http.delete(`/delete/${taskId}`);
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  }
}
</script>

<style scoped>
.task-list {
  background-color: #f0f0f0;
  padding: 20px;
}

.task-card {
  margin-bottom: 10px;
  width: 100%;
  height: 150px;
  padding: 10px;
  box-sizing: border-box;
}

.description-text {
  color: #333;
}
</style>
