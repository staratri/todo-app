import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        availableTasks: [{
                id: 1,
                message: 'Hello I am testing task 1'
            },
            {
                id: 2,
                message: 'Hello I am testing task 2'
            }
        ],
        trashedTasks: [{
            id: 3,
            message: 'I am deleted task'
        }],
        archivedTasks: []
    },
    mutations: {
        pushToTrash(state, payload) {
            state.trashedTasks.push(state.availableTasks.find(task => task.id === Number(payload)))
            state.availableTasks = state.availableTasks.filter(task => task.id !== Number(payload))
        },
        pushToAvailable(state, payload) {
            state.availableTasks.push(state.trashedTasks.find(task => task.id === Number(payload)))
            state.trashedTasks = state.trashedTasks.filter(task => task.id !== Number(payload))
        },
        pushTaskToAvailable(state, payload) {
            let task = {
                id: Math.floor(Date.now() / 1000),
                message: payload
            }
            state.availableTasks.push(task)
        },
        deleteTaskFromTrash(state, payload) {
            state.trashedTasks = state.trashedTasks.filter(task => task.id !== Number(payload))
        },
        pushTaskToArchives(state, payload) {
            state.archivedTasks.push(state.availableTasks.find(task => task.id === Number(payload)))
            state.availableTasks = state.availableTasks.filter(task => task.id !== Number(payload))
        },
        pushTaskBackToAvailable(state, payload) {
            state.availableTasks.push(state.archivedTasks.find(task => task.id === Number(payload)))
            state.archivedTasks = state.archivedTasks.filter(task => task.id !== Number(payload))
        }
    },
    actions: {
        deleteTask: ({ commit }, payload) => {
            commit('pushToTrash', payload)
        },
        restoreTask: ({ commit }, payload) => {
            commit('pushToAvailable', payload)
        },
        addTask: ({ commit }, payload) => {
            commit('pushTaskToAvailable', payload)
        },
        permanentDeleteTask: ({ commit }, payload) => {
            commit('deleteTaskFromTrash', payload)
        },
        completeTask: ({ commit }, payload) => {
            commit('pushTaskToArchives', payload)
        },
        unArchiveTask: ({ commit }, payload) => {
            commit('pushTaskBackToAvailable', payload)
        }
    }
})