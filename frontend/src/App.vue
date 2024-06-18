<!-- src/App.vue -->
<template>
  <v-app>
    <MainMenu />
    <router-view></router-view>
    <TaskList />
  </v-app>
</template>

<script lang="ts">
import MainMenu from "./components/MainMenu.vue";
import TaskList from "./components/TaskList.vue"; // Importando o componente TaskList

export default {
  name: "App",
  components: {
    MainMenu,
    TaskList, // Registrando o componente TaskList
  },
};
</script>

<style>
/* Adicione seus estilos aqui, se necessário */
</style>
