<script setup>
import { ref, TransitionGroup } from "vue"
import { useTaskStore } from "@/stores/task.store";
import TaskItem from "@/components/TaskItem.vue";


const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const store = useTaskStore()
const newTask = ref("")

const tasks = store.tasksByCategory(props.id)

function add() {
  if (!newTask.value) return
  store.addTask(props.id, newTask.value)
  newTask.value = ''

  console.log(store.tasks);
}

function remove(taskId) {
  store.removeTask(taskId)
}
</script>

<template>
  <section class="category">
    <header class="category-header">
      <h2>Categoria {{ id }}</h2>
      <p>Gerencie suas tarefas dessa categoria</p>
    </header>

    <form @submit.prevent="add" class="task-form">
      <input v-model="newTask" placeholder="Digite uma nova tarefa" />
      <button type="submit">Adicionar</button>
    </form>

    <TransitionGroup name="task" tag="ul" class="task-list">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" @remove="remove" />
    </TransitionGroup>

  </section>
</template>
<style scoped>
  .task-enter-from {
    opacity: 0;
    transform: translateY(-6px);
  }

  .task-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .task-enter-active {
    transition: all .25s ease;
  }

  .task-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  .task-leave-to {
    opacity: 0;
    transform: translateY(6px);
  }

  .task-leave-active {
    transition: all .2s ease;
    position: absolute;
  }

  .task-move {
    transition: transform .25s ease;
  }

  .category {
    max-width: 640px;
  }

  .category-header {
    margin-bottom: 1.5rem;
  }

  .category-header h2 {
    font-size: 1.75rem;
    margin-bottom: .25rem;
  }

  .category-header p {
    color: #475569;
  }

  .task-form {
    display: flex;
    gap: .5rem;
    margin-bottom: 1.5rem;
  }

  .task-form input {
    flex: 1;
    padding: .6rem .75rem;
    border-radius: 6px;
    border: 1px solid #cbd5f5;
    font-size: .95rem;
  }

  .task-form input:focus {
    outline: none;
    border-color: #6366f1;
  }

  .task-form button {
    padding: .6rem 1rem;
    border-radius: 6px;
    border: none;
    background-color: #6366f1;
    color: white;
    cursor: pointer;
    font-weight: 500;
  }

  .task-form button:hover {
    background-color: #4f46e5;
  }

  .task-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>