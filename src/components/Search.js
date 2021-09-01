import React from 'react';
import PropTypes from 'prop-types';
import Reviews from './Reviews';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../Actions/index'

Search.propTypes = {

};

function Search() {

    let dispatch = useDispatch();
    let reviews = useSelector(state => state.interface.reviews);
    useEffect(() => {
        search("", "", "");
    }, []);

    function search(country, city, option) {
        fetch('http://localhost:5004/api/reviews?country=' + country + "&city=" + city + "&option=" + option, { method: "GET", mode: "cors", header: { "Content-Type": "application/json" } })
            .then(
                response => {
                    if (response.status === 200) {
                        return response.json().then(result => {
                            console.log(result);
                            dispatch(actions.reviews(result))
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

    function getRandom() {
        fetch('http://localhost:5004/api/reviews/random', { method: "GET", mode: "cors", headers: { "Content-Type": "text/plain" } })
            .then(
                response => {
                    if (response.status === 200) {
                        return response.text().then(function (data) {
                            console.log(data, "random");
                            dispatch(actions.details(response.data))
                        })
                    };

                }
            ).catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <form onSubmit={searchClick}>
                <div>
                    <label>Country</label>
                    <input name="country" type="text" />
                </div>
                <div>
                    <label>City</label>
                    <input name="city" type="text" />
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
            <button onClick={getRandom}>Get Random Destination</button>
            {(reviews === null) ? <div>Loading...</div> : <Reviews />}


        </div>
    );
}

export default Search;