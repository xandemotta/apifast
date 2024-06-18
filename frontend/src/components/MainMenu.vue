<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/tasks/create">Criar Tarefa</router-link></li>
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
