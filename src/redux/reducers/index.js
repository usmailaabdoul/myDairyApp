import {combineReducers} from 'redux'; 

import {
	newDairyModalReduce,
} from './PostReducer';


const rootReducer = combineReducers({
	newDairyModal: newDairyModalReduce, 
})

export default rootReducer;