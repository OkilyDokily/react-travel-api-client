import { logDOM } from "@testing-library/react";
import * as a from "../Actions/ActionTypes.js";


let start = {
    details: null,
    reviews: null
};

function reducer(state = start, action) {
    switch (action.type) {
        case a.DETAILS:
            return (
                { ...state, details: action.details }
            );
        case a.REVIEWS:
            return (
                { ...state, reviews: action.reviews }
            )
        default:
            return state;
    }
}

export default reducer;