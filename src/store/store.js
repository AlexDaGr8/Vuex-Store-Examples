import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        flavor: '',
        counter: 0,
        todos: [
            {
                task: 'Code', 
                completed: true,
                id: uuid.v4()
            },
            {
                task: 'Sleep', 
                completed: false,
                id: uuid.v4()
            },
            {
                task: 'Eat', 
                completed: false,
                id: uuid.v4()
            },

        ]
    },
    mutations: {
        change(state, flavor) {
            state.flavor = flavor
        },
        increment(state) {
            state.counter++
        },
        decrement (state) {
            state.counter--
        },
        addTodo (state, payload) {
            const task = {
                task: payload,
                completed: false,
                id: uuid.v4()
            }

            state.todos.unshift(task)
        },
        toggleTodo (state, payload) {
            state.todos = state.todos.map(t => {
                if (t.id === payload) {
                    // Update the todo
                    // that matches the clicked item
                    return { task: t.task, completed: !t.completed, id: t.id }
                }
                return t;
            })
        },
        deleteTodo (state, payload) {
            const index = state.todos.findIndex(t => t.id === payload);
            state.todos.splice(index, 1);
        }
    },
    getters: {
        flavor: state => state.flavor,
        counter: state => state.counter,
        todos: state => state.todos
    }
})