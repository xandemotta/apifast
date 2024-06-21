<template>
  <v-container class="task-list">
    <!-- Botão para adicionar tarefa -->
    <v-btn color="primary" class="add-task-button" @click="goToCreateTask">
      Adicionar Tarefa
    </v-btn>

    <!-- Lista de tarefas -->
    <v-row justify="center">
      <v-col
        v-for="task in tasks"
        :key="task.id"
        :cols="getColSize(tasks.length)"
      >
        <v-card class="task-card">
          <v-card-title class="headline font-weight-bold">{{
            task.title
          }}</v-card-title>
          <v-card-text class="description-text">{{
            task.description
          }}</v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="blue" @click="editTask(task)">Editar</v-btn>
            <v-btn color="red" @click="deleteTask(task.id)">Deletar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Botão para voltar para a página inicial -->
    <router-link to="/" class="back-button"
      >Voltar para a página inicial</router-link
    >

    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>Edit Task</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedTask.title" label="Title"></v-text-field>
          <v-text-field
            v-model="editedTask.description"
            label="Description"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" @click="saveEdit">Salvar</v-btn>
          <v-btn color="red" @click="cancelEdit">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import http from "../http"; // Importe a configuração do Axios

@Component
export default class TaskList extends Vue {
  tasks: Array<{ id: number; title: string; description: string }> = [];
  editedTask: { id: number; title: string; description: string } = {
    id: 0,
    title: "",
    description: "",
  };
  editDialog = false;

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

  editTask(task: { id: number; title: string; description: string }) {
    this.editedTask = { ...task };
    this.editDialog = true;
  }

  async saveEdit() {
    try {
      await http.put(`/update/${this.editedTask.id}`, this.editedTask);
      const index = this.tasks.findIndex(
        (task) => task.id === this.editedTask.id
      );
      if (index !== -1) {
        this.$set(this.tasks, index, this.editedTask);
      }
      this.editDialog = false;
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  }

  cancelEdit() {
    this.editDialog = false;
  }

  // Retorna o número de colunas para o v-col baseado no número de tarefas
  getColSize(numTasks: number): number {
    if (numTasks === 1) {
      return 12; // Uma única tarefa ocupa 100% da largura
    } else if (numTasks <= 2) {
      return 6; // Até duas tarefas ocupam 50% da largura
    } else {
      return 4; // Mais de duas tarefas ocupam 33.33% da largura
    }
  }

  // Redireciona para a página de criação de tarefa
  goToCreateTask() {
    this.$router.push({ name: "createTask" });
  }
}
</script>

<style scoped>
.task-list {
  background-color: #f0f0f0;
  padding: 20px;
  min-height: 100vh; /* Garante altura mínima da viewport */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
}

.task-card {
  width: 100%;
  height: 100%; /* Torna todos os cartões do mesmo tamanho */
  margin-bottom: 20px;
  box-sizing: border-box;
}

.v-card__actions {
  justify-content: center; /* Centraliza os botões editar e excluir */
}

.back-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-decoration: none; /* Remove sublinhado do link */
  margin-top: 20px;
  display: inline-block;
}

.back-button:hover {
  background-color: #0056b3;
}

.add-task-button {
  margin-top: 20px;
}
</style>
