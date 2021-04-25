import * as types from './type';

export const addTodo = (name, id) => ({
  type: types.ADD_WORK,
  payload: { name, id }
});