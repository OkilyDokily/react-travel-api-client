import * as a from './ActionTypes'
import * as cookies from '../components/getCookieHelper.js'

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

export function popular(popular) {
    return (
        {
            type: a.POPULAR,
            popular
        }
    )
}

export function random(random) {
    return (
        {
            type: a.RANDOM,
            random
        }
    )
}

export const popularAction = (option) => {
   return function (dispatch) {
       fetch('http://localhost:5004/api/reviews/popular?option=' + option, { method: "GET", mode: "cors", header: { "Content-Type": "application/json" } })
           .then(
               response => {
                   if (response.status === 200) {
                       return response.json().then(result => {
                           console.log(result);
                           dispatch(popular(result));
                           dispatch(details(null));
                       });
                   }
               }).catch(error => {
                   console.log(error);
               })


   }
}

export const searchAction = (country, city, option) => {
    return function (dispatch) {
        fetch('http://localhost:5004/api/reviews?country=' + country + "&city=" + city + "&option=" + option, { method: "GET", mode: "cors", header: { "Content-Type": "application/json" } })
            .then(
                response => {
                    if (response.status === 200) {
                        return response.json().then(result => {
                            console.log(result);
                            dispatch(reviews(result))
                        });
                    }
                }).catch(error => {
                    console.log(error);
                })
    }
}

export const randomAction = () => {
    return function (dispatch) {
        fetch('http://localhost:5004/api/reviews/random', { method: "GET", mode: "cors", headers: { "Content-Type": "text/plain" } })
            .then(
                response => {
                    if (response.status === 200) {
                        return response.text().then(function (data) {
                            dispatch(random(data));
                        })
                    };

                }
            ).catch(error => {
                console.log(error);
            })
    }
}

export const createAction = (body,cookie) => {
    return function (dispatch) {
        fetch("http://localhost:5004/api/reviews", {
            method: "POST", mode:"cors" , headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie,
            },
            body: JSON.stringify(body)
        }).then(
            {
              
            }
        ).catch(err => console.log(err));
    }
}

export const detailsAction = (details,body,cookie) => {
    return function (dispatch) {
        fetch("http://localhost:5004/api/reviews/" + details.reviewId, {
            method: "PUT", mode: "cors", headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie,
            },
            body: JSON.stringify(body)
        }).then().catch(err => console.log(err));
    }
}

export const deleteAction = (details, cookie) => {
    return function (dispatch) {
        fetch("http://localhost:5004/api/reviews/" + details.reviewId, {
            method: "DELETE", mode: "cors", headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie,
            }
        }).then().catch(err => console.log(err));
    }
}

export const logInAction = (body) => {
    return function (dispatch) {
        fetch("http://localhost:5004/api/security/login", {
            method: "POST", headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(response => response.json().then(result => {
            document.cookie = "CookieKeyJWT=Bearer " + result.token
            dispatch(logIn(cookies.getPayLoad(result.token).aud, "Bearer " + result.token))
        }))
            .catch(error => console.error(error));
    }
}

export const registerAction = (body) => {
    return function (dispatch) {
        fetch("http://localhost:5004/api/security/register", {
            method: "POST", headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(response => response.json(result => {
            document.cookie = "CookieKeyJWT=" + result + ";"
            console.log(result)
        })).catch(error => console.log(error));
        

    }
}






