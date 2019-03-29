import { FETCH_TODOS, ADD_TODO, DELETE_TODO, ADD_USER } from "./types";

const { fetchToDos } = require("../graphql/queries/todoQueries");
const {
  addToDoMutation,
  deleteToDoMutation
} = require("../graphql/mutations/todoMutations");
const { insertUserMutation } = require("../graphql/mutations/userMutations");

export const getToDos = email => async dispatch => {
  const todos = await fetchToDos(email);
  dispatch({
    type: FETCH_TODOS,
    payload: { todos }
  });
};

export const addToDo = newToDo => dispatch => {
  const email = localStorage.getItem("Auth0->email");
  addToDoMutation(newToDo, email);
  dispatch({
    type: ADD_TODO,
    payload: { newToDo }
  });
};

export const deleteSingleToDo = (id, email) => dispatch => {
  deleteToDoMutation(id, email);
  dispatch({
    type: DELETE_TODO,
    payload: { id }
  });
};

export const addUser = (email, password) => dispatch => {
  insertUserMutation(email, password);
  dispatch({
    type: ADD_USER,
    payload: { email }
  });
};
