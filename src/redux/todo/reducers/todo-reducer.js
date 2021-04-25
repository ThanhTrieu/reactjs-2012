import * as types from '../actions/type';

const initialState = {
  idTodo: 1,
  listWorks: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_WORK:
      return {
        ...state,
        ...{
          idTodo: action.payload.id + 1,
          listWorks: [...state.listWorks, {
            id: state.idTodo,
            title: action.payload.name,
            done: false
          }]
        }
      }
    default:
      return state;
  }
}