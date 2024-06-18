<template>
  <div>
    <h1>Editar Tarefa</h1>
    <form @submit.prevent="salvarEdicao">
      <label for="title">Título:</label>
      <input
        type="text"
        id="title"
        v-model="task.title"
        maxlength="20"
        required
      />
      <label for="description">Descrição:</label>
      <textarea
        id="description"
        v-model="task.description"
        maxlength="100"
        required
      ></textarea>
      <label for="completed">Completa:</label>
      <input type="checkbox" id="completed" v-model="task.completed" />
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class TaskEdit extends Vue {
  private task: any = {};

  created() {
    this.carregarTarefa();
  }

  private carregarTarefa() {
    const taskId = this.$route.params.id;
    axios
      .get(`/api/task/${taskId}`)
      .then((response) => {
        this.task = response.data;
      })
      .catch((error) => {
        console.error("Erro ao carregar a tarefa:", error);
      });
  }

  private salvarEdicao() {
    const taskId = this.$route.params.id;
    axios
      .put(`/api/task/${taskId}`, this.task)
      .then(() => {
        this.$router.push({ name: "task-list" });
      })
      .catch((error) => {
        console.error("Erro ao salvar a edição da tarefa:", error);
      });
  }
}
</script>

<style scoped>
/* Seu estilo aqui */
</style>
