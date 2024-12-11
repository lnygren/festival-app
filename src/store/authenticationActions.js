
import {SET_AUTHENTICATED} from "./actionTypes";

export const setAuthenticated = (task) => {
    return {
        type: SET_AUTHENTICATED,
        payload: task,
    };
};
