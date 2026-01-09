<script setup>
import { useTaskStore } from '@/stores/task.store';
const store = useTaskStore();
</script>

<template>
    <section class="hero">

      <h2>Organize seu foco</h2>
      <p>Escolha uma categoria para gerenciar suas tarefas</p>

    </section>

    <section class="categories">
      <h3>Categorias</h3>    
      <div class="grid">
            <router-link v-for="category in store.categories" :key="category.id" :to="`/category/${category.id}`" class="card">
              {{ category.name }}
            </router-link>
      </div>
    </section>
</template>
<style scoped>
.hero {
  padding: 3rem 1rem;
  text-align: center;
}

.hero h2 {
  font-size: 2rem;
  margin-bottom: .5rem;
}

.hero p {
  color: #475569;
}

.categories {
  margin-top: 2rem;
}

h2 {
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.card {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  text-align: center;
  text-decoration: none;
  color: #0f172a;
  font-weight: 500;
  transition: all .2s ease;  
}

.card:hover {
  background: #eef2ff;
  border-color: #c7d2fe;
}
</style>