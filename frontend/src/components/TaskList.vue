<!-- project-root/frontend/src/components/TaskList.vue -->
<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.description }} -
        {{ task.completed ? "Concluída" : "Pendente" }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
