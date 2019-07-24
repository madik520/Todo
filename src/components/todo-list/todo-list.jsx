import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';

const TodoList = ({ taskList, removeTask, completeTask }) => (
    <ul className="todo-list">
        { taskList.map(({ id, isCompleted, text }) => {
            return <TodoItem completeTask={completeTask} isCompleted={isCompleted} removeTask={removeTask} id={id} key={id}  value={text} />
        }) 
        }
    </ul>
);

TodoList.propTypes = {
    taskList: PropTypes.array,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func
}
TodoList.defaultProps = {
    taskList: [],
    removeTask: () => {},
    completeTask: () => {}
}

export default TodoList;