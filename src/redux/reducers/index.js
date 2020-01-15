import {combineReducers} from 'redux'; 

import {
	newDairyModalReduce,
	newReminderModalReduce
} from './PostReducer';


const rootReducer = combineReducers({
	newDairyModal: newDairyModalReduce, 
	newReminderModal: newReminderModalReduce,
})

export default rootReducer;