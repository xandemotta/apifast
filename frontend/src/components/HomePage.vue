<template>
  <v-container class="home-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="display-2 text-center">Bem-vindo à KNN Idiomas</h1>
        <p class="text-center">
          Aprenda um novo idioma e expanda seus horizontes!
        </p>
        <v-btn class="mx-auto mt-5" color="primary" @click="goToTaskList"
          >Ir para Lista de Tarefas</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToTaskList() {
      this.$router.push({ path: "/tasks" });
    },
  },
};
</script>

<style scoped>
.home-container {
  padding-top: 100px;
}
</style>
