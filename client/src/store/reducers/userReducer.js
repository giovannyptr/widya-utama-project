import { SET_USERS } from "../actionTypes";

const initialState = {
	users: [],
};

function userReducer(state = initialState, action) {
	if (action.type === SET_USERS) {
		return { ...state, users: action.payload };
	}
	return state;
}

export default userReducer;
