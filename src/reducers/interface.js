import * as a from "../Actions/ActionTypes.js";

let start = {
    details: null
};

function reducer(state = start, action) {
    switch (action.type) {
        case a.DETAILS:
            return (
                {details:action.details}
            );
        default:
            return state;
    }
}

export default reducer;