import React from 'react';
import PropTypes from 'prop-types';

//Functional Component - stateless - dont have their own states, 
//and are responsible usually just for the presentation of the app
const SingleInput = (props) => (
        <div>
            <label>{props.title}</label>
            <input className={props.class}
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.controlFunc}
                value={props.content} />
        </div>

);


SingleInput.propTypes = {
    type: PropTypes.oneOf(['text', 'number']).isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default SingleInput;