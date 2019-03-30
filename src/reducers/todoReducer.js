import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from "../actions/types";

const R = require("ramda");

const initialState = {
  todos: [],
  todo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: action.payload.newToDo,
        todos: [...state.todos, action.payload.newToDo]
      };

    case FETCH_TODOS:
      return {
        ...state,
        todos: R.concat(state.todos, action.payload.todos)
      };

    case DELETE_TODO: {
      const index = state.todos.findIndex(x => x.id === action.payload.id);
      state.todos.splice(index, 1);
      return {
        ...state,
        todos: [...state.todos]
      };
    }

    default:
      return state;
  }
}
