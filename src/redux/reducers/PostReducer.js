
// Tuggle modal for New dairy
const newDairyModalReduce = (state = {data: false}, action) => {
	let tState = Object.assign({}, state);
	switch(action.type){
		case 'TOGGLE_NEW_DAIRY_MODAL':
			tState.data = action.payload;
			return tState; 

		default: 
			return state; 
	}
}


// Tuggle modal for Reminder
const newReminderModalReduce = (state = {data: false}, action) => {
	let tState = Object.assign({}, state);
	switch(action.type){
		case 'TOGGLE_NEW_REMINDER_MODAL':
			tState.data = action.payload;
			return tState; 

		default: 
			return state; 
	}
}

export {
	newDairyModalReduce, 
	newReminderModalReduce,	
}