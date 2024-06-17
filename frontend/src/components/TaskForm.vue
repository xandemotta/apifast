<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="task.title" label="Título" required></v-text-field>
      <v-text-field
        v-model="task.description"
        label="Descrição"
        required
      ></v-text-field>
      <v-checkbox v-model="task.completed" label="Completa"></v-checkbox>
      <v-btn type="submit" color="primary">Salvar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
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
    submitForm() {
      // Aqui você pode enviar a tarefa para o backend ou fazer outras ações necessárias
      console.log(this.task);
      this.$router.push({ name: "TaskList" });
    },
  },
};
</script>

<style>
/* Estilos opcionais */
</style>
