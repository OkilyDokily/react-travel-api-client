import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import Create from './Create';

LoginOrCreate.propTypes = {
    
};

function LoginOrCreate(props) {
    const loggedIn = useSelector(state => state.loggedIn);
  
        if(loggedIn) {
            return <LogIn />;
        } else {
            return <Create />;
        } 
}

export default LoginOrCreate;