import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LogIn from './LogIn';
import Register from './Register';

Security.propTypes = {
    
};


function Security(props) {
    let [state,toggleState]  = useState(true);

    function toggle(){
        toggleState(!state);
    }

    if(state){
    return (
        <div>
            <p>Log In</p>
            <LogIn/>
            <button onClick={toggle}>Register instead</button>
        </div> 
    );
    }
    else{
        return(
            <div>
                <p>Register</p>
                <Register />
                <button onClick={toggle}>Go to Login</button>
            </div>
        );
    }
}

export default Security;