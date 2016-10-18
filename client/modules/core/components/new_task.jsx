import React from 'react';
import Load from 'shingon-load-jss';

class NewTask extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      taskInput: ''
    };
  }

  handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    this.props.create(this.state.taskInput);
    this.setState({
      taskInput: ''
    });
  }

  handleChange(event) {
    this.setState({
      taskInput: event.target.value
    });
  }

  render() {
    return (
      <form className={classes.form} onSubmit={this.handleSubmit} >
        <input
          onChange={this.handleChange}
          className={classes.newTask}
          type="text"
          value={this.state.taskInput}
          placeholder="Type to add new tasks"
        />
      </form>
    );
  }
}

const styles = {
  form: {
    marginTop: 10,
    marginBottom: -10,
    position: 'relative'
  },

  newTask: {
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
const classes = Load(styles);

export default NewTask;
