import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

Header.propTypes = {

};

function Header(props) {
    let loggedIn = useSelector(state => state.security.loggedIn);
    let user = useSelector(state => state.security.user);

    function logOut(e) {
        e.preventDefault();

    }

    if (loggedIn) {
        return (
            <div className="header">
                <p>{"You are logged in as " + user}</p>
                <button onClick={logOut}>Log out</button>
            </div>
        );
    }
    else {
        return(
        <div className="header">
            <p>Log in or register to to submit your own reviews</p>
        </div>
        );
    }
}

export default Header;