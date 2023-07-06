import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import blogReducer from './reducers/blog'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
  },
})