
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import PropTypes from 'prop-types';


Popular.propTypes = {

};

function Popular(props) {

    let popular = useSelector(state => state.interface.popular);
    let dispatch = useDispatch();
    
    function closePopular() {
        dispatch(actions.popular(popular));
    }
    if (popular === null) return null;
    else
    return (
        <div>
            <ul onClick={closePopular}>{popular.map((x, index) => { return (<li key={index}>{x}</li>) })}</ul>
        </div>
    );
}

export default Popular;



