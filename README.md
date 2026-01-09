# FocusBoard 🧠📋

FocusBoard é uma aplicação **SPA** para organização de tarefas por categoria, desenvolvida com **Vue 3**, **Pinia** e **Vue Router**, focada em boas práticas de arquitetura, UX e testabilidade.

👉 Projeto criado com fins educacionais, simulando um app frontend moderno de produção.

---

## 🚀 Demo

🔗 **Aplicação em produção:**  
https://focusboard-nine.vercel.app/

---

## ✨ Funcionalidades

- 📂 Organização de tarefas por categoria
- ➕ Adição e remoção de tarefas
- ✅ Marcar tarefas como concluídas
- 💾 Persistência de dados com `localStorage`
- 🧭 Navegação SPA com Vue Router
- 🎨 Layout responsivo e UX refinada
- 🎞️ Animações suaves em listas
- 🧪 Testes automatizados (store e componentes)

---

## 🛠️ Tecnologias utilizadas

- **Vue 3** (Composition API + `<script setup>`)
- **Vite** (build e dev server)
- **Pinia** (gerenciamento de estado)
- **Vue Router** (rotas SPA)
- **Vitest** + **@vue/test-utils** (testes)
- **CSS puro** (sem frameworks)

---

## 🧠 Conceitos aplicados

- Arquitetura SPA
- Comunicação entre componentes via eventos (`emit`)
- Gerenciamento de estado global
- Persistência de estado no frontend
- Isolamento de testes
- Animações com `TransitionGroup`
- Deploy com rewrite para SPA

---

## 📂 Estrutura do projeto

```txt
src/
 ├─ assets/
 ├─ components/
 │   └─ TaskItem.vue
 ├─ views/
 │   ├─ HomeView.vue
 │   ├─ CategoryView.vue
 │   └─ AboutView.vue
 ├─ stores/
 │   └─ task.store.js
 ├─ router/
 │   └─ index.js
 ├─ App.vue
 └─ main.js
