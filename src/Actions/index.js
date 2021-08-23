import * as a from './ActionTypes'


export function logIn(user,password){
    return (
        {
            type: a.LOG_IN,
            user,
            password
        }
    )
}