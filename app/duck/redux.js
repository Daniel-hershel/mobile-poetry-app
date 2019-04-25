import {combineReducers} from 'redux';
import { createStore } from 'redux';


// Actions
export const addResponse = responseIndex => ({
	type: 'ADD_RESPONSE',
	payload: responseIndex
	
  
  });

//   Reducers
const INITIAL_STATE = {
      allResponses:[],
    };


export const responseReducer = (state = INITIAL_STATE, action) =>{
	switch(action.type){

		case 'ADD_RESPONSE':
		  const{
		  	allResponses,
		  } = state;


		const addedResponse = action.payload
		console.log(action.payload)
		// const addedResponse = localResponses.splice(action.payload,1)
		console.log(allResponses)
		allResponses.push(addedResponse)
		console.log(allResponses)

		const newState = {allResponses}
		return newState


		default:
		  return state
	}
};

export const reducers = combineReducers({
	responsesReducer:responseReducer,
});

// store.js
export function configureStore(initialState = {}) {
	const store = createStore(reducers, initialState);
	return store;
  }
  
  export const store = configureStore();
