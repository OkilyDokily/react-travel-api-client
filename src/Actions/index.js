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

export function details(details){
    return (
        {
            type: a.DETAILS,
            details
        }
    )
}