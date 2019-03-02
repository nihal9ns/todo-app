// const reducer = (state = {}, action) => {
//     switch (action.type) {
//        case 'HELLO_WORLD':
//           return { ...state };
//        default:
//           return state;
//      }
//   };

//   export default reducer;

import { combineReducers } from 'redux';
import testReducer from './testReducer';
import todoReducer from './todoReducer';

export default combineReducers({
   test: testReducer,
   todo: todoReducer,
});