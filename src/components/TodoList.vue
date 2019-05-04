<template>
    <div>
        <form @submit.prevent="addTodo">
            <input type="text" v-model="task">
        </form>
        <ul>
            <li 
                v-for="todo in todos" 
                :key="todo.id"
                >
                    <listItem :todo="todo"></listItem>
                </li>
        </ul>
    </div>
</template>

<script>
import ListItem from './ListItem'

export default {
    components: { ListItem },
    props: {
        todos: Array
    },
    data () {
        return {
            task: ''
        }
    },
    methods: {
        addTodo () {
            this.$store.commit('addTodo', this.task)
            this.task = ''
        },
        toggleTodo (id) {
            this.$store.commit('toggleTodo', id)
        },
        deleteTodo (id) {
            this.$store.commit('deleteTodo', id)
        }
    },
    mounted () {
        this.todos.forEach(d => d.slide = false)
    }
}
</script>

<style lang="sass">
ul 
  list-style-type: none
  margin: auto
  padding: 0
  width: 30vw


.completed
    text-decoration: line-through 
    &:hover
        background: lighten(#BD4F6C, 10%)
</style>


