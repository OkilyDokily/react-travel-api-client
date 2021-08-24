import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Reviews.propTypes = {

};

function Reviews(props) {


    return (
        <div>
            {
                props.reviews.map(review => (
                    <div key={review.id}>
                        <h3>{review.name}</h3>
                        <p>{review.comment}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Reviews;