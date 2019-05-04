<template>
  <div id="app" class="container">
    <div class="item">
      <h2>Ice Cream Flavor</h2>
      <Form/>
      <Display/>
    </div>
    <div class="item">
      <h2>Counter</h2>
      <Counter/>
    </div>
    <div class="item">
      <h2>Todo List</h2>
      <todo-list :todos="$store.getters.todos"></todo-list>
    </div>
  </div>
</template>

<script>
import Form from './components/Form'
import Display from './components/Display'
import Counter from './components/Counter'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: { Form, Display, Counter, TodoList },
  computed: {
    todos: function () {
      return this.$store.getters.todos
    }
  }
}
</script>

<style lang="sass">
body 
  font-family: 'Courier', sans-sarif
.container 
  width: 60%
  margin: 10px auto
  text-align: center
input[type="text"]
  display: block
  margin: 10px auto
  padding: 5px 7px
  border: 1px solid seagreen
  border-radius: 5px
  width: 30vw
.item
  padding: 10px
  border: 2px solid #ddd
  border-radius: 2px
  margin: 10px
  box-shadow: 5px 5px 5px #aaa
</style>
