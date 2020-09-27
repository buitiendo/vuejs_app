<template>
  <div id="todo">
    <div class="container">
      <div class="content-container">
        <form v-on:submit.prevent="createTodo">
          <label for="title">Title</label>
          <input v-model="title" type="text" />
          <input v-model="created_by" type="text" />
          <button type="submit" class="login">submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddTodo',
  data () {
    return {
      title: '',
      created_by: ''
    }
  },
  methods: {
    createTodo: function () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/todos',
        data: {
          title: this.title,
          created_by: this.created_by
        }
      }).then(response => {
        this.$router.push('/todos')
      })
    }
  }
}
</script>
