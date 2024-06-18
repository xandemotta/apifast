<template>
  <nav class="nav-bar">
    <router-link to="/" class="nav-link">Início</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.nav-link {
  color: white;
  text-decoration: none;
  border-radius: 25px;
  padding: 10px 20px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #333;
}
</style>
