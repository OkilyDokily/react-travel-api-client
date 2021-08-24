import React from 'react';
import PropTypes from 'prop-types';
import Reviews from './Reviews';
import { useEffect, useState } from 'react';

Search.propTypes = {

};
//country = { country } & city={ city }& option={ option } "
function Search() {
    const [reviews, setReviews] = useState([]);

    function search(e) {

        fetch('http:localhost:5004/api/reviews?country=' + e.target.country.value + "city=" + e.target.city.value + "option=" + e.target.options.value, { method: "GET" })
            .then(
                response => response.json().then(result => {
                    console.log(reviews);
                    setReviews(result);
                })
            );
    }


    useEffect(() => {

    });


    return (
        <div>
            <form onSubmit={search}>
                <div>
                    <label>City</label>
                    <input name="city" type="text" />
                </div>
                <div>
                    <label>Country</label>
                    <input name="country" type="text" />
                </div>
                <div>
                    <label>Rating</label>
                    <select name="options">
                        <option value="">Select</option>
                        <option value="1">Rating</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <button type="submit">Search</button>
            </form>
            <Reviews reviews={reviews} />
        </div>
    );
}

export default Search;