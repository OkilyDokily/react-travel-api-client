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
        let city = e.target.city.value;
        let option = e.target.options.value;
     
        e.preventDefault();
        fetch('http://localhost:5004/api/reviews?country=' + country + "&city=" + city + "&option=" + option, { method: "GET", mode: "cors", header: { "Content-Type": "application/json" } })
            .then(
                response => {
                    if (response.status === 200) {
                        return response.json().then(result => {
                            console.log(result);
                            setReviews(result);   
                        });
                    }
                }).catch(error => {
                    console.log(error);
                })
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