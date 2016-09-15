import React from 'react';
import Load from 'shingon-load-jss';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <form onSubmit={this.createTask.bind(this)} >
        <input
          className={classes.newTask}
          type="text"
          ref="textInput"
          placeholder="Type to add new tasks"
        />
      </form>
    );
  }

  createTask(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;
    const text = this.refs.textInput.value.trim();

    create(text);

    this.refs.textInput.value = '';
  }

}

const styles = {
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
const { classes } = Load(styles);

export default NewTask;
