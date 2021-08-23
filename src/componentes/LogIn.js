import React from 'react';
import PropTypes from 'prop-types';

LogIn.propTypes = {
    
};

function LogIn(props) {
    function handleSubmit(event) {
        event.preventDefault();
       let user = event.target.user.value;
       let password = event.target.password.value;
    }

    return (
        <form >
            <div className="form-group">
                <label htmlFor="exampleInputUser1">User</label>
                <input  className="form-control" id="exampleInputUser1"  placeholder="Enter User" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
        </form>
    );
}

export default LogIn;