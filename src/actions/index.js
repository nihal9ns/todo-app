import { TEST_THUNK } from "./types";

// SAGA
// export const sayHello = () => ({
//     type: 'HELLO_WORLD',
// });

export const  test = () => dispatch => {
    // return { type: TEST, payload }
    dispatch({
        type: TEST_THUNK,
        payload: { test: "HELLO REDUX-THUNK"}
    });
}