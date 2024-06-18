<!-- project-root/frontend/src/components/TaskForm.vue -->

<template>
  <v-container>
    <v-form @submit.prevent="createTask">
      <v-text-field v-model="title" label="Title" required></v-text-field>
      <v-textarea
        v-model="description"
        label="Description"
        required
      ></v-textarea>
      <v-checkbox v-model="completed">Completed</v-checkbox>
      <v-btn type="submit">Create Task</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "TaskForm",
  setup() {
    const title = ref("");
    const description = ref("");
    const completed = ref(false);

    const createTask = async () => {
      try {
        await axios.post("http://localhost:8000/api/create", {
          title: title.value,
          description: description.value,
          completed: completed.value,
        });
        // Clear the form after submission
        title.value = "";
        description.value = "";
        completed.value = false;
        console.log("teste");
      } catch (error) {
        console.error(error);
      }
    };

    return { title, description, completed, createTask };
  },
});
</script>

<style scoped>
/* Seu estilo aqui */
</style>
