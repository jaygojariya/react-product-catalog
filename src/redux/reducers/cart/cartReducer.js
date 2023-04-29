import * as actionType from "./../../actionType";

const initialState = {
    cartData: []
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_CART_DATA:
            return { ...state, cartData: action.payload };
        default:
            return state;
    }
}
export default cartReducer;