import React from 'react';
import PropTypes from 'prop-types';
import Reviews from './Reviews';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../Actions/index'
import Popular from './Popular';

Search.propTypes = {

};

function Search() {

    let dispatch = useDispatch();
    let reviews = useSelector(state => state.interface.reviews);
    let [random, setRandom] = useState("");
    useEffect(() => {
        search("", "", "");
    }, []);

    let [resultType, setResultType] = useState("");

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

        if (country !== "" && city == "") {
            setResultType("country");
        } else if (country !== "" && city !== "") {
            setResultType("country and city");
        }
        else if (city !== "" && country == "") {
            setResultType("all");
        }
        else {
            setResultType("all");
        }
        if (option !== "") {
            setResultType(option);
        }

    }

    function getPopular(e) {
        e.preventDefault();
        let option = document.getElementById("opt").value
        console.log(option, " dfsao option");
        fetch('http://localhost:5004/api/reviews/popular?option=' + option, { method: "GET", mode: "cors", header: { "Content-Type": "application/json" } })
            .then(
                response => {
                    if (response.status === 200) {
                        return response.json().then(result => {
                            console.log(result);
                            setPopular(result);
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

    function closeRandom() {
        setRandom("");
    }

  

    function getRandom() {
        fetch('http://localhost:5004/api/reviews/random', { method: "GET", mode: "cors", headers: { "Content-Type": "text/plain" } })
            .then(
                response => {
                    if (response.status === 200) {
                        return response.text().then(function (data) {
                            setRandom(data);
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
                    <input placeholder="Country" style={{ width: "95px" }} name="country" type="text" />
                </div>
                <div>
                    <label>City</label>
                    <input placeholder="City" style={{ width: "95px" }} name="city" type="text" />
                </div>

                <div>
                    <label>Rating</label>
                    <select name="options" id="opt">
                        <option value="">Select</option>
                        <option value="rating">Rating</option>
                        <option value="number">Number</option>
                    </select>
                </div>
                <button type="submit" >Search</button>
                <button type="button" onClick={getPopular} >Search rating by order of popularity</button>
                <button type="button" onClick={getRandom} style={{ "width": "100px" }}>Get Random Destination</button>
            </form>
          
            {(random !== "") ? <div title="click to close" onClick={closeRandom} style={{ "cursor": "pointer" }}>{random}<div onClick={closeRandom} style={{ "float": "right", "fontSize": "15px", "cursor": "pointer" }}>x</div></div> : null}
            {(resultType) ? <div>{"The results below are sorted by " + resultType + "."}</div> : null}
            {(reviews === null) ? <div>Loading...</div> : <Reviews />}


        </div>
    );

}


export default Search;