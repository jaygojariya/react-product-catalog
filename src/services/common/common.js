import { NOTIFY_ERROR_MSG, NOTIFY_SUCCESS_MSG, VIEW_MODE_DETAILS } from "../../redux/actionType"

// notify success for api response is success
export const notifySuccess = (data) => {
    data.status = true;
    return {
        type: NOTIFY_SUCCESS_MSG,
        payload: data
    }
}

// notify error for api response is error
export const notifyError = (data) => {
    data.status = false;
    return {
        type: NOTIFY_ERROR_MSG,
        payload: data
    }
}

// notify message clear
export const notifyClear = (data) => {
    data.status = false;
    return {
        type: NOTIFY_ERROR_MSG,
        payload: ''
    }
}
// view  toggle mode
export const viewToggleMode = (data) => {
    return {
        type: VIEW_MODE_DETAILS,
        payload: data
    }
}