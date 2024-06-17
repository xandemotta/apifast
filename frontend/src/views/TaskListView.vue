<!-- project-root/frontend/src/views/TaskListView.vue -->

<template>
  <TaskList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskList from "../components/TaskList.vue";

export default defineComponent({
  name: "TaskListView",
  components: {
    TaskList,
  },
});
</script>

<style scoped>
/* Seu estilo aqui */
</style>
