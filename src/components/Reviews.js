import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Reviews.propTypes = {

};

function Reviews(props) {

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
                    {props.reviews.map(review => {
                        return (
                            <tr key={review.reviewId} >
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