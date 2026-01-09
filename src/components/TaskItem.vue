<script setup>
defineProps({
    task: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['remove'])
</script>

<template>
    <li class="task">
        <label class="task-main">
            <input class="inputadd" type="checkbox" v-model="task.done"/>
            <span :class="{done: task.done}">
                {{ task.title }}
            </span>
        </label>
        <button class="delete" @click="emit('remove', task.id)">x</button>
    </li>
</template>

<style scoped>

    .inputadd:hover {
        cursor: pointer;
    }
    .task {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .6rem .75rem;
        border-radius: 6px;
        background: white;
        border: 1px solid #e2e8f0;
        margin-bottom: .5rem;
    }

    .task-main {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .task-main span {
        font-size: .95rem;
    }

    .task-main span.done{
        text-decoration: line-through;
        color: #94a3b8;
    }

    .delete {
        border: none;
        background-color: transparent;
        color: #ef4444;
        cursor: pointer;
        font-size: 1rem;
    }

    .delete:hover {
        color: #dc2626;
    }
</style>