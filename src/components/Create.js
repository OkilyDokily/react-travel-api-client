import React from 'react';
import PropTypes from 'prop-types';

Create.propTypes = {

};

function Create(props) {

    function create(e) {
        e.preventDefault();
        const cookie = getCookie("Bearer");

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

    function getCookie(name) {
        function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
        return match ? match[1] : null;
        //Thank you John S
        //https://stackoverflow.com/questions/10730362/get-cookie-by-name
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
            <button type="submit">Submit</button>
        </form>
    );
}

export default Create;