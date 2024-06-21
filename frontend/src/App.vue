<!-- <template>
  <v-app>
    <router-view></router-view>
    <TaskList />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskList from "./components/TaskList.vue";

export default defineComponent({
  name: "App",
  components: {
    TaskList,
  },
});
</script>

<style>
/* Adicione seus estilos aqui, se necessário */
</style> -->

<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
/* Adicione seus estilos aqui, se necessário */
</style>
