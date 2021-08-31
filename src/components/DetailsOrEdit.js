import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './DetailsOrEdit.css';
import styled from 'styled-components';


DetailsOrEdit.propTypes = {

};

const Border = styled.div`
  border: solid 1px black;
  background-color: red;
  padding: 10px;
  margin: ${props => props.margin};
  margin-left: 40px;
`;

const Form = styled.form`
  display: block;
  border: solid 1px black;
  background-color: red;
  padding: 10px;
  margin-left: 20px;
 
`;





function DetailsOrEdit(props) {
    let [showDetails, toggleDetails] = useState(true);

    let details = useSelector(state => state.interface.details);
    let cookie = useSelector(state => state.security.cookie);
    let user = useSelector(state => state.security.user);



    function edit(e) {
        e.preventDefault();
        let body = {
            "ReviewId": details.reviewId,
            "UserName": user,
            "Country": e.target.country.value,
            "City": e.target.city.value,
            "Rating": e.target.rating.value
        };

        fetch("http://localhost:5004/api/reviews/" + details.reviewId, {
            method: "PUT", mode: "cors", headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie,
            },
            body: JSON.stringify(body)
        }).then().catch(err => console.log(err));
    }

    if (showDetails && details) {
        return (
            <Border className="showDetails">
                <div>
                    <div>ReviewId</div>
                    <div>{details.reviewId}</div>
                </div>
                <div>
                    <div>Username</div>
                    <div>{details.userName}</div>
                </div>
                <div>
                    <div>Country</div>
                    <div>{details.country}</div>
                </div>
                <div>
                    <div>City</div>
                    <div>{details.city}</div>
                </div>
                <div>
                    <div>Rating</div>
                    <div>{details.rating}</div>
                </div>
                <button onClick={() => toggleDetails(!showDetails)}>Edit Details</button>
            </Border>
        );
    }

    else if (!showDetails && details) {
        return (
            <Form onSubmit={edit} className="showDetails">
                <div>
                    <div>ReviewId</div>
                    <div>{details.reviewId}</div>
                </div>
                <div>
                    <div>Username</div>
                    <div>{details.userName}</div>
                </div>
                <div>
                    <div>Country</div>
                    <input type="text" name="country" defaultValue={details.country} />
                </div>
                <div>
                    <div>City</div>
                    <input name="city" type="text" defaultValue={details.city} />
                </div>
                <div>
                    <div>Rating</div>
                    <select name="rating" defaultValue={details.rating}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit">Edit</button>
                <button onClick={() => toggleDetails(!showDetails)}>See Details</button>
            </Form>
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