<template>
  <div>
    <h2>Formulário de Tarefa</h2>
    <form @submit.prevent="submitForm">
      <label for="title">Título:</label>
      <input type="text" id="title" v-model="task.title" required />
      <label for="description">Descrição:</label>
      <input type="text" id="description" v-model="task.description" required />
      <label for="completed">Completa:</label>
      <input type="checkbox" id="completed" v-model="task.completed" />
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
        completed: false,
      },
    };
  },
  methods: {
    async submitForm() {
      if (this.task.id) {
        await api.updateTask(this.task.id, this.task);
      } else {
        await api.createTask(this.task);
      }
      this.$router.push({ name: "TaskList" });
    },
  },
  async created() {
    const taskId = this.$route.params.id;
    if (taskId) {
      const response = await api.getTask(taskId);
      this.task = response.data;
    }
  },
};
</script>
