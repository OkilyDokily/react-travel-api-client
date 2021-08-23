import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Reviews.propTypes = {

};

function Reviews(props) {
    let reviews = [];
    useEffect(() => {
        fetch('http:localhost:5004/api/reviews').then(
            response => response.json().then(result => {
                reviews = result;
            })
        );
    });


    return (
        <div>

        </div>
    );
}

export default Reviews;