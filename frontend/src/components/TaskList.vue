<template>
  <div>
    <h2>Lista de Tarefas</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span
          :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
        >
          {{ task.title }} - {{ task.description }}
        </span>
        <button @click="toggleComplete(task)">
          {{
            task.completed ? "Marcar como Incompleto" : "Marcar como Completo"
          }}
        </button>
        <button @click="editTask(task)">Editar</button>
        <button @click="deleteTask(task.id)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  props: {
    tasks: Array,
  },
  methods: {
    async toggleComplete(task) {
      task.completed = !task.completed;
      await api.updateTask(task.id, task);
    },
    editTask(task) {
      this.$router.push({ name: "TaskForm", params: { id: task.id } });
    },
    async deleteTask(taskId) {
      await api.deleteTask(taskId);
      this.$emit("update-tasks");
    },
  },
};
</script>
