import * as actionType from "./../../actionType";

const initialState = {
    loading: false,
    notifyMsg: '',
    viewMode: 'grid'
};

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.NOTIFY_SUCCESS_MSG:
            return { ...state, notifyMsg: action.payload };
        case actionType.NOTIFY_ERROR_MSG:
            return { ...state, notifyMsg: action.payload };
        case actionType.NOTIFY_CLEAR_MSG:
            return { ...state, notifyMsg: action.payload };
        case actionType.VIEW_MODE_DETAILS:
            return { ...state, viewMode: action.payload };
        default:
            return state;
    }
}
export default commonReducer;