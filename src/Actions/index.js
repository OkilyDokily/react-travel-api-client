import * as a from './ActionTypes'


export function logIn(user){
    return (
        {
            type: a.LOG_IN,
            user,
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