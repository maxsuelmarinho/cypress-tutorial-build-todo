import axios from 'axios'

export const saveTodo = (todo) =>
  axios.post(`${process.env.API_URL}/api/todos`, todo)

export const loadTodos = () =>
  axios.get(`${process.env.API_URL}/api/todos`)

export const destroyTodo = (id) =>
  axios.delete(`${process.env.API_URL}/api/todos/${id}`)

export const updateTodo = (todo) =>
  axios.put(`${process.env.API_URL}/api/todos/${todo.id}`, todo)
