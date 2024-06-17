<template>
  <TaskForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskForm from "../components/TaskForm.vue";

export default defineComponent({
  name: "TaskFormView",
  components: {
    TaskForm,
  },
});
</script>

<style scoped>
/* Seu estilo aqui */
</style>
