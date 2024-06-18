<template>
  <v-app>
    <MainMenu />
    <router-view></router-view>
    <TesteVue />
    <!-- Adicionando o componente TesteVue -->
  </v-app>
</template>

<script lang="ts">
import MainMenu from "./components/MainMenu.vue";
import TesteVue from "./components/TesteVue.vue";

export default {
  name: "App",
  components: {
    MainMenu,
    TesteVue, // Registrando o componente TesteVue
  },
};
</script>
