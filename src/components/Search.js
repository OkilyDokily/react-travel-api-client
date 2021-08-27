import React from 'react';
import PropTypes from 'prop-types';
import Reviews from './Reviews';
import { useEffect, useState } from 'react';

Search.propTypes = {

};

function Search() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        search("","","");
    }, []);

    function search(country, city, option) {
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

    function searchClick(e) {
        e.preventDefault();
        let country = e.target.country.value;
        let city = e.target.city.value;
        let option = e.target.options.value;
        search(country, city, option);
         
    }

    return (
        <div>
            <form onSubmit={searchClick}>
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
                        <option value="rating">Rating</option>
                        <option value="number">Number</option>
                    </select>
                </div>
                <button type="submit">Search</button>
            </form>
            <Reviews reviews={reviews} />
        </div>
    );
}

export default Search;