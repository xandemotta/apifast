<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.description }} -
        {{ task.completed ? "Concluído" : "Pendente" }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default defineComponent({
  name: "TesteVue",
  setup() {
    const tasks = ref<Task[]>([]);

    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>(
          "http://localhost:8000/api/tasks"
        );
        tasks.value = response.data;
      } catch (error) {
        console.error("Erro ao buscar as tarefas:", error);
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
