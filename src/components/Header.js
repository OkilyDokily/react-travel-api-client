import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../Actions/index';

Header.propTypes = {

};

function Header(props) {
    let loggedIn = useSelector(state => state.security.loggedIn);
    let user = useSelector(state => state.security.user);
    let dispatch = useDispatch();
    function logOut(e) {
        e.preventDefault();
        document.cookie = "CookieKeyJWT=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        dispatch(actions.logOut());
    }

    if (loggedIn) {
        return (
            <div className="header">
                <div>{"You are logged in as " + user} <button onClick={logOut}>Log out</button></div>
                
            </div>
        );
    }
    else {
        return (
            <div className="header">
                <p>Log in or register to to submit your own reviews</p>
            </div>
        );
    }
}

export default Header;