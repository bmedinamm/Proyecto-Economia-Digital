function navigation(state = {}, action) {
	switch (action.type) {
		case 'SEACH_BAR_ODONTOLOGOS': {
		  //alert(JSON.stringify(action));
		  return {...state, ...action.payload.mostrarBarra}
		}
		default:
		  return state
	}
}

export default navigation;