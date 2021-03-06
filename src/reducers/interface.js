import * as a from "../Actions/ActionTypes.js";


let start = {
    details: null,
    reviews: null,
    popular: null,
    random: null
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
        case a.POPULAR:
            return (
                { ...state, popular: action.popular }
            )
        case a.RANDOM:
            return (
                { ...state, random: action.random }
            )
        default:
            return state;
    }
}

export default reducer;