import { GET_COMPARE_DATA } from "../redux/actionType";

export const loadCompareProductData = (compareData) => {
    return async function (dispatch) {
        dispatch(saveCompareProductData(compareData));
    };
};

const saveCompareProductData = (data) => ({
    type: GET_COMPARE_DATA,
    payload: data,
});
