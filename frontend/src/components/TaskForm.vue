<template>
  <v-container>
    <v-form @submit.prevent="createTask">
      <v-text-field v-model="title" label="Título" required></v-text-field>
      <v-textarea v-model="description" label="Descrição" required></v-textarea>
      <v-checkbox v-model="completed">Completada</v-checkbox>
      <div class="button-group">
        <v-btn type="submit">Criar tarefa</v-btn>
        <v-btn color="blue" @click="goToHomePage">Página inicial</v-btn>
      </div>
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
      } catch (error) {
        console.error(error);
      }
    };

    const goToHomePage = () => {
      // Redirecionar para a página inicial
      window.location.href = "http://localhost:8080/";
    };

    return { title, description, completed, createTask, goToHomePage };
  },
});
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Espaçamento superior entre os botões */
}
</style>
