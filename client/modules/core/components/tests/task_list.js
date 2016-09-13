const {describe, it} = global;
import {expect} from 'chai';
import {render} from 'enzyme';
import { setStubbingMode, setComposerStub } from 'react-komposer';
import TaskList from '../task_list';
import NewTask from '../../containers/new_task';
import Task from '../../containers/task.js';

describe('core.components.task_list', () => {

  it('should display a task list', () => {
    setStubbingMode(true);

    setComposerStub(NewTask, (props) => {
      const data = {
        ...props,
        create: () => {}
      };

      return data;
    });

    setComposerStub(Task, (props) => {
      const data = {
        ...props,
        toggleChecked: () => {},
        deleteTask: () => {}
      };

      return data;
    });

    const tasks = [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' }
    ];
    const el = render(<TaskList tasks={tasks} />);
    console.log(el.text());
    expect(el.find('Task')).to.have.length(3);
    expect(el.text()).to.contain('This is task 1');
    expect(el.text()).to.contain('This is task 2');
    expect(el.text()).to.contain('This is task 3');
  });
});
