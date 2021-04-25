// day la noi xu ly - cap nhat state
import * as types from '../actions/type';

// khoi tao state mac dinh
const initialState = {
  count: 0
}

// tao reducer
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      // cap nhat state
      return {
        ...state,
        count: action.payload.val + 1
      }
    case types.DECREMENT:
      return {
        ...state,
        count: action.payload.val - 1
      }
    default:
      return state;
  }
}
