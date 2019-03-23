import { FETCH_TODOS, ADD_TODO, DELETE_TODO, ADD_USER, DELETE_USER, FETCH_USER, ALREADY_REGISTERED, NOT_REGISTERED } from '../actions/types';
const R = require("rambda");

const initialState = {
    todos: [
        {
            title: "A",
            todo_description: "todo A",
            todo_date: "now"
        },
        {
            title: "B",
            todo_description: "todo B",
            todo_date: "now"
        },
        {
            title: "C",
            todo_description: "todo C",
            todo_date: "now"
        },
        {
            title: "D",
            todo_description: "todo D",
            todo_date: "now"
        }
    ],
    todo: {},    
    user: {},
    isLoggedIn: false,
    isRegistered: false
};

export default function(state = initialState, action){        
	switch(action.type){
        case ADD_TODO:        
		 return{             
		 	...state,		 	
             todo: action.payload.newToDo,
             todos: [...state.todos, action.payload.newToDo],                                
         };         
         
         case FETCH_TODOS:        
		 return{             
             ...state,		 	            
             todos: R.concat(state.todos, action.payload.todos),            
             isLoggedIn: true,
             isRegistered: true
         };

         case DELETE_TODO:                 
         const index = state.todos.findIndex(x => x.title === action.payload.title);         
         state.todos.splice(index, 1);         
		 return{             
		 	...state,		 	            
             todos: [...state.todos],            
         };

         case ADD_USER:        
		 return{             
		 	...state,		 	
             user: action.payload,
             isLoggedIn: true,
             isRegistered: true                         
         };         
         
         case FETCH_USER:        
		 return{             
             ...state,
             user: action.payload,             
             isLoggedIn: true,
             isRegistered: true
         };

         case DELETE_USER:        
		 return{             
		 	...state,		 	
             user: action.payload,
             isLoggedIn: true,
             isRegistered: true
         };

         case ALREADY_REGISTERED:        
		 return{             
             ...state,     
             user: {},
             isLoggedIn: false,        
             isRegistered: true
         };

         case NOT_REGISTERED:        
		 return{             
             ...state,           
             user: {},
             isLoggedIn: false,  
             isRegistered: false
         };
         
		default:
			return state;
	}
}