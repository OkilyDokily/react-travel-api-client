import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

DetailsOrEdit.propTypes = {

};


function DetailsOrEdit(props) {
    let [showDetails, toggleDetails] = useState(true);

    let details = useSelector(state => state.details);

    function edit(){

        fetch('http:localhost:5504/api/reviews/' + details.id,{method:"PUT"}).then();
    }


    if (showDetails) {
        return (
            <div>
                <div>
                    <label></label>
                    <label></label>
                </div>
                <div>
                    <label></label>
                    <label></label>
                </div>
                <div>
                    <label></label>
                    <label></label>
                </div>
                <div>
                    <label></label>
                    <label></label>
                </div>
                <button onClick={() => !toggleDetails}>Edit Details</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <div>
                    <label></label>
                    <input type="text" />
                </div>
                <div>
                    <label></label>
                    <input type="text" />
                </div>
                <div>
                    <label></label>
                    <input type="text" />
                </div>
                <div>
                    <label></label>
                    <input type="text" />
                </div>
                <button onClick={edit}>Edit</button>
                <button onClick={() => !toggleDetails}>See Details</button>
            </div>
        )
    }

}

export default DetailsOrEdit;