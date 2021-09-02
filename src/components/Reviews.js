import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../Actions/index';

Reviews.propTypes = {

};

function Reviews(props) {

    let dispatch = useDispatch();
    let reviews = useSelector(state => state.interface.reviews);
    function selectDetails(review) {
        dispatch(actions.details(review));
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ReviewId</th>
                        <th>Username</th>
                        <th>Rating</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {(reviews === null) ? <div>... Loading </div> : reviews.map(review => {
                        return (
                            <tr title="click to show details or edit" key={review.reviewId} onClick={() => selectDetails(review)} style={{"cursor":"pointer"}}>
                                <td>{review.reviewId}</td>
                                <td>{review.userName}</td>
                                <td>{review.rating}</td>
                                <td>{review.city}</td>
                                <td>{review.country}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Reviews;