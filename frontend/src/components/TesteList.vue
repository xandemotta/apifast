<template>
  <div>
    <h1>Lista de Testes</h1>
    <ul>
      <li v-for="teste in testes" :key="teste.id">
        {{ teste.title }} - {{ teste.description }} -
        {{ teste.completed ? "Concluído" : "Pendente" }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TesteList",
  props: {
    testes: {
      type: Array as () => Array<{
        id: number;
        title: string;
        description: string;
        completed: boolean;
      }>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Seu estilo aqui */
</style>
