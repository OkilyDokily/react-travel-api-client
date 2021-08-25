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
        let country = e.target.country.value;
        if (country === "") country = "%00";
        let city = e.target.city.value;
        if (city === "") city = "%00";
        let option = e.target.options.value;
        if (option === "") option = "%00";
      

        console.log('http://localhost:5004/api/reviews?country=' + country + "&city=" + city + "&option=" + option);
        e.preventDefault();
        fetch('http://localhost:5004/api/reviews?country=' + country + "&city=" + city + "&option=" + option, { method: "GET", mode: "no-cors" })
            .then(
                response => response.json(result => {
                    console.log(reviews);
                    setReviews(result);
                })
            );
    }

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