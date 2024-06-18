<template>
  <v-container class="home-container">
    <v-row>
      <v-col cols="12">
        <h1 class="display-2 text-center">Bem-vindo KNN Idiomas</h1>
        <p class="text-center">Aplicativo de tarefas</p>
        <v-btn class="mx-auto mt-5 mr-2" color="primary" @click="goToTaskList">
          Ir para Lista de Tarefas
        </v-btn>
        <v-btn class="mt-5" color="primary" @click="goToCreateTask">
          Criar Nova Tarefa
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToTaskList() {
      this.$router.push({ name: "TaskList" });
    },
    goToCreateTask() {
      window.location.href = "http://localhost:8080/tasks/create";
    },
  },
};
</script>

<style scoped>
.home-container {
  padding-top: 100px;
  text-align: center; /* Centraliza o conteúdo */
}

/* Efeito de hover nos botões */
.v-btn:hover {
  background-color: #1976d2 !important; /* Cor de fundo ao passar o mouse */
}
</style>
