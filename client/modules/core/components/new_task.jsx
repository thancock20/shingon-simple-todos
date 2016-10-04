import React from 'react';
import Load from '/lib/load_jss';

const NewTask = ({taskInput, create, setInput}) => {
  const handleSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    create(taskInput);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit} >
      <input
        onChange={handleChange}
        className={classes.newTask}
        type="text"
        value={taskInput}
        placeholder="Type to add new tasks"
      />
    </form>
  );
};

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
