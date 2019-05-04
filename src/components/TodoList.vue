<template>
    <div>
        <form @submit.prevent="addTodo">
            <input type="text" v-model="task">
        </form>
        <ul>
            <li 
                v-for="todo in todos" 
                :key="todo.id"
                :class="{completed: todo.completed}"
                @click="toggleTodo(todo.id)"
                @dblclick="deleteTodo(todo.id)"
                >
                    <div class="main-item">{{todo.task}}</div>
                    <div class="toggle action-item">R</div>
                    <div class="delete action-item">X</div>
                </li>
        </ul>
    </div>
</template>

<script>
export default {
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
    }
}
</script>

<style lang="sass">
ul 
  list-style-type: none
  margin: auto
  padding: 0
  width: 30vw
  & li 
    & div
        display: inline-block
        background: #F3F3F3
        border-top: 1px solid #F6F6F6
        border-bottom: 1px solid #F6F6F6
        border-radius: 5px
        margin: 3px 0
        padding: 10px 15px
        color: darken(#00c6ff, 15)
        cursor: pointer
    & .main-item
        width: 80%
        &:before 
            content: '> '
            color: #00c6ff
        &:hover 
            background: lighten(#84E296, 10%)
    & .action-item


.completed
    text-decoration: line-through 
    &:hover
        background: lighten(#BD4F6C, 10%)
</style>


