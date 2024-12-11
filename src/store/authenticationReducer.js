import {SET_AUTHENTICATED} from "./actionTypes";

const initialState = {
    authenticated: false
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
           state.authenticated = action.payload
        default:
            return state;
    }
};

export default authenticationReducer;