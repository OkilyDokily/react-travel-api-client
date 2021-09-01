import * as a from './ActionTypes'


export function logIn(user,cookie){

    return (
        {
            type: a.LOG_IN,
            user,
            cookie
        }
    )
}

export function logOut() {

    return (
        {
            type: a.LOG_OUT,

        }
    )
}

export function details(details){
    return (
        {
            type: a.DETAILS,
            details
        }
    )
}

export function reviews(reviews) {
    return (
        {
            type: a.REVIEWS,
            reviews
        }
    )
}

