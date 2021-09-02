import React from 'react';
import PropTypes from 'prop-types';
import * as Cookies from './getCookieHelper.js';
import { useSelector } from 'react-redux';

Create.propTypes = {

};

function Create(props) {
    let cookie = useSelector(state => state.security.cookie);
    let user = useSelector(state => state.security.user);
    function create(e) {

        e.preventDefault();
        //const cookie = Cookies.getCookie("CookieKeyJWT");
        console.log(user)
        console.log(e.target.country.value)
        console.log(e.target.city.value)
        console.log(e.target.rating.value)
        let body = {
            "UserName": user,
            "Country": e.target.country.value,
            "City": e.target.city.value,
            "Rating": e.target.rating.value
        };
        console.log(JSON.stringify(body));
        fetch("http://localhost:5004/api/reviews", {
            method: "POST", mode:"cors" , headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie,
            },
            body: JSON.stringify(body)
        }).then().catch(err => console.log(err));

    }



    return (
        <form onSubmit={create}>
            <div className="form-group">
                <label htmlFor="title">Country</label>
                <input name="country" type="text" className="form-control" id="country" placeholder="Country" />
            </div>
            <div className="form-group">
                <label htmlFor="title">City</label>
                <input name="city" type="text" className="form-control" id="city" placeholder="City" />
            </div>
            <div className="form-group">
                <label htmlFor="title">Rating</label>
                <select name="rating">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <button type="submit">Create</button>
        </form>
    );
}

export default Create;