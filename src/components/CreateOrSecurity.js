import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import Create from './Create';
import Security from './Security';

CreateOrSecurity.propTypes = {

};

function CreateOrSecurity(props) {
    const loggedIn = useSelector(state => state.security.loggedIn);

    if (loggedIn) {
        return <Create />;

    } else {
        return <Security />;
    }
}

export default CreateOrSecurity;