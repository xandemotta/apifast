<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/tasks">Ver Tarefas</router-link></li>
      <li><router-link to="/about">Sobre</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>

<style>
/* Estilos do menu */
</style>
