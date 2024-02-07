import { createSlice } from '@reduxjs/toolkit';

const tasksReducer = createSlice({
   name: 'task',
   initialState: {
      tasks: [],
   },
   reducers: {
      addTask(state, action) {
         state.tasks.push(action.payload);
      },
      removeTask(state, action) {
         state = state.tasks.filter((task) => task.id !== action.payload);
      },
      toggleCheckbox(state, action) {
         const task = state.tasks[action];
         task.checked = task.checked !== task.checked;
         return state;
      },
   },
});
