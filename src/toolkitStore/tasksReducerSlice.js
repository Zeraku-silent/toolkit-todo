import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksReducer = createSlice({
   name: 'task',
   initialState: {
      tasks: [],
   },
   reducers: {
      addTask(state, action) {
         const date = new Date().toLocaleString();
         const id = nanoid();
         const newTask = { id, text: action.payload, checked: false, date };
         state.tasks = [...state.tasks, newTask];
      },
      removeTask(state, action) {
         state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      },
      toggleCheckbox(state, action) {
         const task = state.tasks[action.payload.id];
         task.checked = task.checked !== task.checked;
         return state;
      },
      edditTask(state, action) {
         const task = state.tasks[action.payload.id];
         task.text = action.payload.text;
      },
      loadStorage(state, action) {
         state.tasks = action.payload;
      },
   },
});

export default tasksReducer.reducer;
export const { addTask, removeTask, toggleCheckbox, edditTask, loadStorage } =
   tasksReducer.actions;
