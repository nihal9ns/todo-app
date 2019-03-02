import { FETCH_TODOS, ADD_TODO, DELETE_TODO, CHECK_IF_USER_IS_LOGGED_IN } from "./types";
const {addToDoMutation, deleteToDoMutation} = require('../graphql/mutations/todoMutations');

export const  fetchToDos = () => dispatch => {
    // return { type: TEST, payload }
    dispatch({
        type: FETCH_TODOS,
        payload: { test: "HELLO REDUX-THUNK"}
    });
}

export const  addToDo = (newToDo) => dispatch => {    
    // return { type: TEST, payload }
    addToDoMutation(newToDo);
    dispatch({
        type: ADD_TODO,
        payload: { newToDo }
    });
}

export const  deleteToDo = (id) => dispatch => {
    // return { type: TEST, payload }
    deleteToDoMutation(id);
    dispatch({
        type: DELETE_TODO,
        payload: { id }
    });
}

export const  checkIfUserIsLoggedIn = () => dispatch => {
    // return { type: TEST, payload }
    dispatch({
        type: CHECK_IF_USER_IS_LOGGED_IN,
        payload: { }
    });
}