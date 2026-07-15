import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

const loadedState = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : undefined

export const store = configureStore({
    reducer: todoReducer,
    preloadedState: loadedState
})

store.subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(store.getState()))
})