<!-- project-root/frontend/src/components/TaskList.vue -->

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { Task } from "../types"; // Importe o tipo Task conforme definido no seu projeto

export default defineComponent({
  name: "TaskList",
  setup() {
    const tasks = ref<Array<Task>>([]);

    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/tasks");
        tasks.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    const toggleTask = async (task: Task) => {
      try {
        await axios.put(`http://localhost:8000/update/${task.id}`, {
          ...task,
          completed: !task.completed,
        });
        fetchTasks();
      } catch (error) {
        console.error(error);
      }
    };

    const deleteTask = async (id: number) => {
      try {
        await axios.delete(`http://localhost:8000/delete/${id}`);
        fetchTasks();
      } catch (error) {
        console.error(error);
      }
    };

    const editTask = (task: Task) => {
      // Handle task editing logic here
    };

    onMounted(fetchTasks);

    return { tasks, toggleTask, deleteTask, editTask };
  },
});
</script>
