src/App.vue
<template>
  <v-app>
    <router-view></router-view>
    <TaskList />
  </v-app>
</template>

<script lang="ts">
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskList,
  },
};
</script>

<style>
/* Adicione seus estilos aqui, se necessário */
</style>
