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
            <LogIn toggle={toggle}/>
            
        </div> 
    );
    }
    else{
        return(
            <div>
                <Register toggle={toggle} />
                
            </div>
        );
    }
}

export default Security;