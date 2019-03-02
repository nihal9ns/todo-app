import { TEST_THUNK } from '../actions/types';

const initialState = {
	test: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case TEST_THUNK:
		 return{
		 	...state,		 	
		 	test: action.payload
		 }
		default:
			return state;
	}
}