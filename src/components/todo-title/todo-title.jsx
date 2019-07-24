import React from 'react';
import PropTypes from 'prop-types';
import './todo-title.css';

const Title = ({ value }) => (
    <h1 className="title">{value}</h1>
);

Title.propTypes = {
    value: PropTypes.string.isRequired
}

Title.defaultProps = {
    value: ""
}

export default Title;