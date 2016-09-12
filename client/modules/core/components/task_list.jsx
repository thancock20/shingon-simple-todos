import React from 'react';
import ReactDOM from 'react-dom';
import useSheet from 'react-jss';

import Task from './task.jsx';

// const TaskList = ({ sheet, tasks }) => {
class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { container } = this.props.sheet.classes;
    const { tasks } = this.props;

    return (
      <div className={container}>
        <header>
          <h1>Todo List</h1>

          <form className="new-task" onSubmit={this.createTask.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
        </header>

        <ul>
          {
            tasks.map((task) => (
              <Task key={task._id} task={task} />
            ))
          }
        </ul>
      </div>
    );
  }

  createTask(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    create(text);

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
}

const styles = {
  container: {
    maxWidth: 600,
    margin: '0 auto',
    minHeight: '100%',
    background: 'white',
  },
  'new-task input': {
    boxSizing: 'border-box',
    padding: '10px 0',
    background: 'transparent',
    border: 'none',
    width: '100%',
    paddingRight: 80,
    fontSize: '1em',
    '&:focus': {
      outline: 0
    }
  }
};

export default useSheet(TaskList, styles);
