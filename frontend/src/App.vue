<template>
  <v-app>
    <MainMenu />
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import MainMenu from "./components/MainMenu.vue";

export default {
  name: "App",
  components: {
    MainMenu,
  },
};
</script>
