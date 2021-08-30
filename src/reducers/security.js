import * as a from "../Actions/ActionTypes.js";

let start = {
    loggedIn: false,
    user: "",
    cookie: ""
};

function reducer(state = start, action) {
    switch (action.type) {
        case a.LOG_IN:
            return {
                loggedIn: true, user: action.user, cookie: action.cookie
            };
        case a.LOG_OUT:
            return {
                loggedIn: false,
                user: "",
                cookie: ""
            };
        default:
            return state;
    }
}

export default reducer;