import { SET_PRODUCT, SET_PRODUCTS } from "../actionTypes";

const initialState = {
	products: [],
	product: {},
};

function productReducer(state = initialState, action) {
	if (action.type === SET_PRODUCTS) {
		return { ...state, products: action.payload };
	} else if (action.type === SET_PRODUCT) {
		return { ...state, product: action.payload };
	}
	return state;
}

export default productReducer;