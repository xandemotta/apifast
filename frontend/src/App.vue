<template>
  <v-app>
    <MainMenu />
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import MainMenu from "./components/MainMenu.vue";
import axios from "axios";
import TesteList from "./components/TesteList.vue";

export default {
  name: "App",
  components: {
    MainMenu,
  },
};
</script>
