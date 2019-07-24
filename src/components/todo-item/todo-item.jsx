import React from 'react';
import PropTypes from 'prop-types';
import './todo-item.css';

const TodoItem = ({ value, isCompleted, id, removeTask, completeTask }) => (
    <li key={id} className="todo-item">
        <div className="item-text">
           <i onClick={() => completeTask(id)} className={isCompleted ? "far fa-check-circle" : "far fa-circle"}></i>
           <span className={isCompleted ? "cheked text":"text"}>{value}</span>
        </div>
        <button onClick={() => removeTask(id)} className="btn-cross"><i className="fas fa-times"></i></button>
    </li>
);

TodoItem.propTypes = {
    value: PropTypes.string,
    id: PropTypes.number,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func,
    isCompleted: PropTypes.bool
}
TodoItem.defaultProps = {
    value: "",
    id: 0,
    removeTask: () => {},
    completeTask: () => {},
    isCompleted: false
}

export default TodoItem;