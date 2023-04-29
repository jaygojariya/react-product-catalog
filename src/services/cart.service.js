import { GET_CART_DATA } from "../redux/actionType";

export const loadCartData = (cartData) => {
    return async function (dispatch) {
        dispatch(saveCartData(cartData));
    };
};

const saveCartData = (data) => ({
    type: GET_CART_DATA,
    payload: data,
});
