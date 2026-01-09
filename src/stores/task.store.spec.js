import {describe, it, expect, beforeEach } from "vitest"
import {setActivePinia, createPinia } from "pinia"
import { useTaskStore } from "./task.store"

describe('Task Store', () => {
    beforeEach( () => {
        localStorage.clear(),
        setActivePinia(createPinia())
    })

    it('adiciona uma tarefa', () => {
        const store = useTaskStore()
        store.addTask('work', 'Estudar Vue')

        expect(store.tasks.length).toBe(1)
        expect(store.tasks[0].title).toBe('Estudar Vue')
        expect(store.tasks[0].done).toBe(false)
    })

    it('marca uma tarefa como concluída', () => {
        const store = useTaskStore()

        store.addTask('work', 'Testar Pinia')
        const taskId = store.tasks[0].id

        store.toggleTask(taskId)
        expect(store.tasks[0].done).toBe(true)
    })

    it('remove uma tarefa', () => {
        const store = useTaskStore()

        store.addTask('work', 'Remover uma tarefa')
        const taskId = store.tasks[0].id
        
        store.removeTask(taskId)
        console.log(store.tasks)
        expect(store.tasks.length).toBe(0)
    })
})

