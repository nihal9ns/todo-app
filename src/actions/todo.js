import Auth from "../components/Auth";
import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from "./types";

const { fetchToDos } = require("../graphql/queries/todoQueries");
const {
  addToDoMutation,
  deleteToDoMutation
} = require("../graphql/mutations/todoMutations");

const auth = new Auth();

export const getToDos = email => async dispatch => {
  // fetch todos from database
  const todos = await fetchToDos(email);
  dispatch({
    type: FETCH_TODOS,
    payload: { todos }
  });
};

export const addToDo = newToDo => async dispatch => {
  const email = localStorage.getItem("Auth0->email");
  // add todo to database
  await addToDoMutation(newToDo, email);
  dispatch({
    type: ADD_TODO,
    payload: { newToDo }
  });
};

export const deleteSingleToDo = (id, email) => async dispatch => {
  // delete todo from database
  await deleteToDoMutation(id, email);
  dispatch({
    type: DELETE_TODO,
    payload: { id }
  });
};

export const authCall = () => async => {
  // handle Auth0 API integration
  auth.handleAuth();
};
