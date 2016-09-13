import React from 'react';
import ReactDOM from 'react-dom';
// import useSheet from 'react-jss';
// import jss from 'jss';
import Load from 'shingon-load-jss';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { newTask } = this.props.sheet.classes;
    // const { classes } = jss.createStyleSheet(styles).attach();
    const { classes } = Load(styles);

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
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    create(text);

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
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

// export default useSheet(NewTask, styles);
export default NewTask;