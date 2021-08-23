import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Security from './Security';
import Reviews from './Reviews';

Controller.propTypes = {
    
};

function Controller() {
    const loggedIn = useSelector((state) => state.security.loggedIn);
    if(!loggedIn){
        return (
            <LogIn/>
            <Reviews/>
        );
    }
    else{

    }
}

export default Controller;