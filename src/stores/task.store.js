import { defineStore } from 'pinia'
import { ref, computed, watch} from 'vue'

const STORAGE_KEY = 'focuboard:tasks'

function loadTasks(){
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : []
}

function saveTasks(tasks){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export const useTaskStore = defineStore('tasks', () => {
    const categories = ref([
        {id:'work', name: 'Trabalho'},
        {id:'study', name: 'Estudo'},
        {id:'personal', name: 'Pessoal'}
    ])

    const tasks = ref(loadTasks())

    watch(
        tasks,
        (newTasks) => {
            saveTasks(newTasks)
        },
        {deep: true}
    )

    const tasksByCategory = (categoryId) => 
        computed(() => tasks.value.filter(task => task.categoryId === categoryId))

    const completedTasks = computed(() => tasks.value.filter(task => task.done))

    function addTask(categoryId, title){
        tasks.value.push({
            id: crypto.randomUUID(),
            title,
            categoryId,
            done: false,
        })
    }

    function toggleTask(taskId){
        const task = tasks.value.find( t => t.id === taskId)
        if (task) task.done = !task.done
    }

    function removeTask(taskId){
        tasks.value = tasks.value.filter( t => t.id !== taskId)
    }

    return {
        categories,
        tasks,
        tasksByCategory,
        completedTasks,
        addTask,
        toggleTask,
        removeTask,
    }
})