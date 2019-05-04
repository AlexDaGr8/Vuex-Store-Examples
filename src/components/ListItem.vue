<template>
    <div
        class="li-div"
        :class="{slide: slide}"
        >
        <div class="main-item" @click="slide = !slide">{{todo.task}}</div>
        <div class="toggle action-item" @click="toggleTodo(todo.id)"><i class="fas fa-times"></i></div>
        <div class="delete action-item" @dblclick="deleteTodo(todo.id)"><i class="far fa-trash-alt"></i></div>
    </div>
</template>

<script>
export default {
    props: {
        todo: Object
    },
    data () {
        return {
            slide: false
        }
    },
    methods: {
        toggleTodo (id) {
            this.$store.commit('toggleTodo', id)
        },
        deleteTodo (id) {
            this.$store.commit('deleteTodo', id)
        }
    },
}
</script>

<style lang="sass">
.li-div
    & [class*="item"]
        display: inline-block
        background: #F3F3F3
        border-top: 1px solid #F6F6F6
        border-bottom: 1px solid #F6F6F6
        border-radius: 5px
        margin: 3px 1px
        padding: 10px 15px
        color: darken(#00c6ff, 15)
        cursor: pointer
        width: 100%
        position: relative
    & .main-item
        width: 90%
        &:before 
            content: '> '
            color: #00c6ff
        &:hover 
            background: lighten(#84E296, 10%)
    & .action-item
        display: none
    &.slide
        & .main-item
            width: 64%
        & .action-item
            display: inline-block
            width: 4%
        
</style>
