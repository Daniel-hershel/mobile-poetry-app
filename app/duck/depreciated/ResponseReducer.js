import {combineReducers} from 'redux';
import types from "./types";


const INITIAL_STATE = {
      allResponses:[],
    };


const responseReducer = (state = INITIAL_STATE, action) =>{
	switch(action.type){

		case types.ADD_RESPONSE:
		  const{
		  	allResponses,
		  } = state;


		const addedResponse = action.payload
		// const addedResponse = localResponses.splice(action.payload,1)

		allResponses.push(addedResponse)
		console.log(allResponses)

		const newState = {allResponses}
		return newState


		default:
		  return state
	}
};

const reducer - combineReducers({
	responsesReducer:responseReducer,
});

export default reducer