<template>
  <div class="container" style="text-align: left">
    <h2>Todos List:</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <p>
          {{todo.id}} :
          <strong>{{todo.title}}</strong>
        </p>
      </li>
    </ul>
    <h2>Add new todo:</h2>
    <add-todo></add-todo>
  </div>
</template>
<script>
import axios from 'axios'
import AddTodo from './AddTodo'
export default {
  data () {
    return {
      todos: []
    }
  },
  created () {
    axios.get('http://127.0.0.1:3000/todos').then(response => {
      this.todos = response.data
    })
  },
  components: {
    AddTodo
  }
}
</script>
