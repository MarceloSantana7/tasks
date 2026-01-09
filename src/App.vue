<script setup>
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="header-inner">
        <h1>FocusBoard</h1>
        <nav>
          <router-link to="/" class="link">Home</router-link>
          <router-link to="/about" class="link">Sobre</router-link>
        </nav>
      </div>
    </header>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8fafc, #eef2ff);
}

/* HEADER FULL WIDTH */
.header {
  width: 100%;
  background: #0f172a;
  color: white;
}

/* CONTEÚDO DO HEADER CENTRALIZADO */
.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 1rem;
}

.link {
  color: #cbd5f5;
  text-decoration: none;
}

.link.router-link-active {
  color: white;
  text-decoration: underline;
}

/* CONTEÚDO CENTRAL */
.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
}
</style>