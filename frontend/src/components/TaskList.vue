<template>
  <div>
    <h1>Tarefas</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class TaskList extends Vue {
  tasks: { id: number; title: string }[] = [];

  async mounted() {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      this.tasks = response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }
}
</script>
