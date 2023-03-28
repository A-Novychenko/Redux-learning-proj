const { nanoid } = require('nanoid');

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};
export const deleteAll = () => {
  return {
    type: 'tasks/deleteAll',
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
