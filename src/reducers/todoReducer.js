import { FETCH_TODOS, ADD_TODO, DELETE_TODO, CHECK_IF_USER_IS_LOGGED_IN } from '../actions/types';

const initialState = {
    todos: [],
    todo: {},    
    user: {},
    isLoggedIn: false,
    isRegistered: false
}

export default function(state = initialState, action){
	switch(action.type){
        case ADD_TODO:        
		 return{             
		 	...state,		 	
             todo: action.payload,
             isLoggedIn: true,
             isRegistered: true                         
         };         
         
         case FETCH_TODOS:        
		 return{             
		 	...state,		 	
             todos: action.payload,
             isLoggedIn: true,
             isRegistered: true
         };

         case DELETE_TODO:        
		 return{             
		 	...state,		 	
             todos: action.payload,
             isLoggedIn: true,
             isRegistered: true
         };
         
		default:
			return state;
	}
}