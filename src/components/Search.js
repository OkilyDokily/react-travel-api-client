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
    let random = useSelector(state => state.interface.random);
    useEffect(() => {
        search("", "", "");
    }, []);

    let [resultType, setResultType] = useState("");

    function search(country, city, option) {
        dispatch(actions.searchAction(country, city, option));
        if (country !== "" && city === "") {
            setResultType("country");
        } else if (country !== "" && city !== "") {
            setResultType("country and city");
        }
        else if (city !== "" && country === "") {
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
        let option = document.getElementById("opt").value;
        if (option === "") {
            dispatch(actions.random("Select either rating or number."));
            return;
        }
        dispatch(actions.popularAction(option));
    }


    function searchClick(e) {
        e.preventDefault();
        let country = e.target.country.value;
        let city = e.target.city.value;
        let option = e.target.options.value;
        search(country, city, option);
    }

    function closeRandom() {
        dispatch(actions.random(""));
    }


    function getRandom() {
        dispatch(actions.randomAction());
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
                <button style={{width:"65px"}} type="submit" >Search</button>
                <div style={{ borderRight: "1px solid black" }}></div>
                <button style={{ width: "76px" }} type="button" onClick={getPopular} >Order cities by popularity</button>
                <button type="button" onClick={getRandom} style={{ "width": "100px" }}>Get a Random Destination</button>
            </form>

            {(random !== "") ? <div title="click to close" onClick={closeRandom} style={{ "cursor": "pointer" }}>{random}<div onClick={closeRandom} style={{ "float": "right", "fontSize": "15px", "cursor": "pointer" }}>x</div></div> : null}
            {(resultType) ? <div>{"The results below are sorted by " + resultType + "."}</div> : null}
            {(reviews === null) ? <div>Loading...</div> : <Reviews />}


        </div>
    );

}


export default Search;