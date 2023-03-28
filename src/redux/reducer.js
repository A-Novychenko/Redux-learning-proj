import { statusFilters } from './constants';
import {
  addTask,
  deleteTask,
  toggleCompleted,
  deleteAll,
  setStatusFilter,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  // [addTask]: (state, action) => [...state, action.payload],
  [addTask]: (state, action) => {
    state.push(action.payload);
  },
  // [deleteTask]: (state, action) =>
  //   state.filter(task => task.id !== action.payload),
  [deleteTask]: (state, action) => {
    const ind = state.findIndex(task => task.id === action.payload);
    state.splice(ind, 1);
  },
  // [toggleCompleted]: (state, action) =>
  //   state.map(task => {
  //     if (task.id !== action.payload) {
  //       return task;
  //     }
  //     return {
  //       ...task,
  //       completed: !task.completed,
  //     };
  //   }),
  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
  [deleteAll]: () => [],
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});
