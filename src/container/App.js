import React, { Component } from 'react';
import './App.css';
import Title from "../components/todo-title/todo-title";
import Input from "../components/todo-input/todo-input";
import TodoList from "../components/todo-list/todo-list";
import { connect } from 'react-redux';
import { addTask, removeTask, completeTask } from '../actions/actionCreaters';


class App extends Component{
  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  addTask = ({ key }) => {
    const { text } = this.state;
    if(text.length > 3 && key === "Enter"){
      const { addTask } = this.props;
      addTask((new Date()).getTime(), text, false);

      this.setState({
        text: '',
      })
    }
  }

  render(){
    const { text } = this.state;
    const { tasks, removeTask, completeTask } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
  return(
    <>
    <Title value="Todo" />
    <div className="wrapper">
      <Input onKeyPress={this.addTask} onChange={this.handleChange} value={text} />
      { isTasksExist && <TodoList completeTask={completeTask} removeTask={removeTask} taskList={tasks} /> }
    </div>
    </>
  )
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), { addTask, removeTask, completeTask })(App);
