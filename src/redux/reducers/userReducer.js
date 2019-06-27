const initialState = {
	username: '',
	first_name: '',
	balance: null,
};
const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';
const UPDATE_NAME = 'UPDATE_NAME'

export function updateUser(user) {
	return {
		type: UPDATE_USER,
		payload: user,
	};
}
export function clearUser() {
	return {
		type: CLEAR_USER,
	};
}
export function updateFirstName(name) {
	console.log(name)
	return {
		type: UPDATE_NAME,
		payload: name
	}
}
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_USER:
			const { username, first_name, balance } = action.payload;
			return { username, first_name, balance };
		case CLEAR_USER:
			return { ...initialState };
		case UPDATE_NAME:
			return {...state, first_name: action.payload}
		default:
			return state;
	}
}
