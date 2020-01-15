
export function toggleNewDairyModal(trueOrFalse) {
	return (dispatch) => {
		dispatch ({type: 'TOGGLE_NEW_DAIRY_MODAL', payload: trueOrFalse});
	}
}

export function toggleNewReminderModal(trueOrFalse) {
	return(dispatch) => {
		dispatch ({type: 'TOGGLE_NEW_REMINDER_MODAL', payload: trueOrFalse});
	}
}