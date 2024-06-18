<template>
  <v-container>
    <h1>Lista de Tarefas</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.description }} -
        {{ task.completed ? "Concluída" : "Pendente" }}
      </li>
    </ul>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: "TaskListView",
  setup() {
    const tasks = ref([]);

    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/tasks");
        tasks.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchTasks);

    return { tasks };
  },
});
</script>

<style scoped>
/* Seu estilo aqui */
</style>
