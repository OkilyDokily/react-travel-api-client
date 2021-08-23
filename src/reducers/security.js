import * as a from "../Actions/ActionTypes.js";

let start = {
    loggedIn: false,
    user: ""
};

function reducer(state = start, action) {
    switch (action.type) {
        case a.LOG_IN:
            return {
                loggedIn: true,user: action.user
            };
        default:
            return state;
    }
}

export default reducer;