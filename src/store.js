import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './libs/todoSlice';

export default configureStore({
  reducer: {
    todos: TodoSlice,
  },
});