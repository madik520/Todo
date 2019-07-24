import React from 'react';
import PropTypes from 'prop-types';
import './todo-input.css';

const Input = ({ onChange, onKeyPress, value }) => (
    <div className="input-block">
        <input type="text" onChange={onChange} onKeyPress={onKeyPress} value={value} placeholder="Add Task" />
    </div>
);

Input.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string
}
Input.defaultProps = {
    onChange: ()=>{},
    onKeyPress: ()=>{},
    value: ""
}

export default Input;
