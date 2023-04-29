import * as actionType from "../../actionType";

const initialState = {
    compareData: []
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.GET_COMPARE_DATA:
            return { ...state, compareData: action.payload };
        default:
            return state;
    }
}
export default productReducer;