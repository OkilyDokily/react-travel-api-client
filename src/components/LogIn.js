import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../Actions/index.js';

LogIn.propTypes = {

};

function LogIn(props) {
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
       
        let body = {
            "name": e.target.user.value,
            "password": e.target.password.value,
        };

        fetch("http://localhost:5004/api/security/login", {
            method: "POST", headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(response => response.json().then(result => {
            document.cookie = "CookieKeyJWT=Bearer " + result.token 
            dispatch(actions.logIn("karl", "Bearer " + result.token))
        }))
        .catch(error => console.error(error));

    }

    return (
        <div>
            <p>Log in to create your own reviews.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputUser1">User</label>
                    <input name="user" className="form-control" id="exampleInputUser1" placeholder="Enter User" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
       
    );
}

export default LogIn;