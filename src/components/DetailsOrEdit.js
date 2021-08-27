import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

DetailsOrEdit.propTypes = {

};


function DetailsOrEdit(props) {
    let [showDetails, toggleDetails] = useState(true);

    let details = useSelector(state => state.interface.details);

    function edit() {

        fetch('http:localhost:5504/api/reviews/' + details.id, { method: "PUT" }).then();
    }


    if (showDetails && details) {
        return (
            <div>
                <div>
                    <label>ReviewId</label>
                    <label>{details.ReviewId}</label>
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
            <form>
                <input type="hidden" value={details.ReviewId}></input>
                <div>
                    <label>Username</label>
                    <input type="text" value={details.userName} />
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" value={details.country} />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" value={details.rating} />
                </div>
                <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={edit}>Edit</button>
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