import React from 'react';
import PropTypes from 'prop-types';

Register.propTypes = {

};

function Register(props) {
    function handleSubmit(e) {
        e.preventDefault();

        let body = {
            "name": e.target.user.value,
            "password": e.target.password.value,
            "confirmPassword": e.target.confirmPassword.value
        };
        console.log(body);
        fetch("http://localhost:5004/api/security/register", {
            method: "POST", headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(response => response.json(result => {
            document.cookie = "CookieKeyJWT=" + result + ";"
            console.log(result)
        })).catch(error => console.log(error));
        props.toggle();

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputUser1">User</label>
                <input style={{ width: "100px" }}  name="user" className="form-control" id="exampleInputUser1" placeholder="Enter User" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input style={{ width: "100px" }} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm</label>
                <input style={{ width: "100px" }} name="confirmPassword" type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <button onClick={props.toggle}>Go to Login</button>
        </form>
    );
}

export default Register;