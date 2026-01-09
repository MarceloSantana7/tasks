import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskItem from './TaskItem.vue'

describe("TaskItem", () => {

    const task = {
        id: '1',
        title: 'Testar componente',
        done: false
    }

    it('renderiza o titulo da tarefa', () => {
        const wrapper = mount(TaskItem, {
            props: {task}
        })

        expect(wrapper.text()).toContain("Testar componente")
    })

    it('marca a tarefa como concluída ao clicar no checkbox', async() => {
        const wrapper = mount(TaskItem, {
            props: {
                task: {...task}
            }
        })

        const checkbox = wrapper.find('input[type="checkbox"]')

        await checkbox.setChecked(true)

        expect(wrapper.props().task.done).toBe(true)
    })

    it('emite evento de remoção ao clicar no botão', async() => {
        const wrapper = mount(TaskItem, {
            props: { task }
        })

        await wrapper.find('button').trigger('click')

        expect(wrapper.emitted()).toHaveProperty('remove')
        expect(wrapper.emitted('remove')[0]).toEqual(['1'])
    })
})