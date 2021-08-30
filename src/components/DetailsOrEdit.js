import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

DetailsOrEdit.propTypes = {

};


function DetailsOrEdit(props) {
    let [showDetails, toggleDetails] = useState(true);

    let details = useSelector(state => state.interface.details);
    let cookie = useSelector(state => state.security.cookie);
    //let user = useSelector(state => state.security.user);
    function edit(e) {
        e.preventDefault();
        let body = {
            "ReviewId": e.target.reviewId.value,
            "UserName": e.target.userName.value,
            "Country": e.target.country.value,
            "City": e.target.city.value,
            "Rating": e.target.rating.value
        };
        console.log(e.target.reviewId.value + "dsafsdafasdfasd");
        fetch("http://localhost:5004/api/reviews/" + e.target.reviewId.value, {
            method: "PUT", mode: "cors", headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie,
            },
            body: JSON.stringify(body)
        }).then().catch(err => console.log(err));
    }


    if (showDetails && details) {
        return (
            <div>
                <div>
                    <label>ReviewId</label>
                    <label>{details.reviewId}</label>
                </div>
                <div>
                    <label>Username</label>
                    <label>{details.userName}</label>
                </div>
                <div>
                    <label>Country</label>
                    <label>{details.country}</label>
                </div>
                <div>
                    <label>City</label>
                    <label>{details.city}</label>
                </div>
                <div>
                    <label>Rating</label>
                    <label>{details.rating}</label>
                </div>
                <button onClick={() => toggleDetails(!showDetails)}>Edit Details</button>
            </div>
        );
    }

    else if (!showDetails && details) {
        return (
            <form onSubmit={edit}>
                <div>
                    <label>ReviewId</label>
                    <label>{details.ReviewId}</label>
                    <input type="hidden" name="reviewId" value={details.reviewId} />
                </div>
                <div>
                    <label>Username</label>
                    <label>{details.userName}</label>
                    <input type="hidden" name="userName" value={details.userName} />
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" name="country" defaultValue={details.country} />
                </div>
                <div>
                    <label>City</label>
                    <input name="city" type="text" defaultValue={details.city} />
                </div>
                <select name="rating" defaultValue={details.rating}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">Edit</button>
                <button onClick={() => toggleDetails(!showDetails)}>See Details</button>
            </form>
        )
    }
    else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

}

export default DetailsOrEdit;