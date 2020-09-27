import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/add_todos',
      name: 'AddTodos',
      component: AddTodo
    }
  ]
})
