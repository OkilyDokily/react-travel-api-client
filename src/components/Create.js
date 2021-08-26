import React from 'react';
import PropTypes from 'prop-types';
import * as Cookies from './getCookieHelper.js';

Create.propTypes = {

};

function Create(props) {

    function create(e) {
        e.preventDefault();
        const cookie = Cookies.getCookie("CookieKeyJWT");

        let body = {
            "country": e.target.country.value,
            "city": e.target.city.value,
            "rating": e.target.rating.value
        };

        fetch("http://localhost:5004/api/reviews", {
            method: "POST", headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + cookie,
            },
            body:body}).then();

    }

    

    return (
        <form onSubmit={create}>
            <div className="form-group">
                <label htmlFor="title">Country</label>
                <input name="country" type="text" className="form-control" id="country" placeholder="Country" />
            </div>
            <div className="form-group">
                <label htmlFor="title">City</label>
                <input name="city" type="text" className="form-control" id="city" placeholder="Country" />
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