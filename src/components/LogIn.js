import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../Actions/index.js';
import * as cookies from './getCookieHelper';

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
        dispatch(actions.logInAction(body));
    }

    return (
        <div>
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
                <button onClick={props.toggle}>Register instead</button>
            </form>
        </div>
       
    );
}

export default LogIn;