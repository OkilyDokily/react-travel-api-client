import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import './DetailsOrEdit.css';
import * as actions from '../Actions/index.js';
import styled from 'styled-components';


DetailsOrEdit.propTypes = {

};


const Border = styled.div`
  border: solid 1px black;
  background-color: #ba9757;
  padding: 10px;
  margin: ${props => props.margin};
  margin-left: 40px;
  align-self: center;
`;

const Form = styled.form`
  display: block;
  border: solid 1px black;
  background-color: #ba9757;
  padding: 10px;
  margin-left: 20px;
  align-self: center;
`;


function DetailsOrEdit(props) {

    let [showDetails, toggleDetails] = useState(true);

    let details = useSelector(state => state.interface.details);
    let popular = useSelector(state => state.interface.popular);
    let reviews = useSelector(state => state.interface.reviews);
    let cookie = useSelector(state => state.security.cookie);
    let user = useSelector(state => state.security.user);
    let dispatch = useDispatch();

    useEffect(() => {
        toggleDetails(true);
    }, [details])


    function edit(e) {
        e.preventDefault();
        let body = {
            "ReviewId": details.reviewId,
            "UserName": user,
            "Country": e.target.country.value,
            "City": e.target.city.value,
            "Rating": e.target.rating.value
        };

        let detail = {
            "reviewId": details.reviewId,
            "userName": user,
            "country": e.target.country.value,
            "city": e.target.city.value,
            "rating": e.target.rating.value
        }
        dispatch(actions.details(detail));

        let newReviews = reviews.map(review => {
            if (review.reviewId === details.reviewId) {
                review = detail;
            }
            return review;
        });

        dispatch(actions.reviews(newReviews));


        fetch("http://localhost:5004/api/reviews/" + details.reviewId, {
            method: "PUT", mode: "cors", headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie,
            },
            body: JSON.stringify(body)
        }).then().catch(err => console.log(err));
    }

    function deleteReview(e) {
        e.preventDefault();
        fetch("http://localhost:5004/api/reviews/" + details.reviewId, {
            method: "DELETE", mode: "cors", headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie,
            }
        }).then().catch(err => console.log(err));
        let newReviews = reviews.filter(review => review.reviewId !== details.reviewId);
        dispatch(actions.details(null));
        dispatch(actions.reviews(newReviews));
    }

    function closePopular() {
        dispatch(actions.popular(null));
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

                {(user === details.userName) ? <button onClick={() => toggleDetails(!showDetails)}>Edit Details</button> : null}
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
                    <input key={Math.random()} type="text" name="country" defaultValue={details.country} />
                </div>
                <div>
                    <div>City</div>
                    <input key={Math.random()} name="city" type="text" defaultValue={details.city} />
                </div>
                <div>
                    <div>Rating</div>
                    <select key={Math.random()} name="rating" defaultValue={details.rating}>
                        <option value="ZERO">0</option>
                        <option value="ONE">1</option>
                        <option value="TWO">2</option>
                        <option value="THREE">3</option>
                        <option value="FOUR">4</option>
                        <option value="FIVE">5</option>
                    </select>
                </div>
                <button type="submit">Submit edit</button>
                <button type="button" onClick={deleteReview}>Delete</button>
                <button onClick={() => toggleDetails(!showDetails)}>Cancel</button>
            </Form>
        )
    }
    else if (popular) {
        return (
            <Border class="showDetails">
                <ul id="popularlist" onClick={closePopular}>{popular.map((x, index) => { return (<li key={index}>{x}</li>) })}</ul>
            </Border>
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