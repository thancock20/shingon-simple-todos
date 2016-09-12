const {describe, it} = global;
import {expect} from 'chai';
import {render} from 'enzyme';
import TaskList from '../task_list';

describe('core.components.task_list', () => {
  it('should display a task list', () => {
    const tasks = [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' }
    ];
    const el = render(<TaskList tasks={tasks} />);
    expect(el.text()).to.contain('This is task 1');
    expect(el.text()).to.contain('This is task 2');
    expect(el.text()).to.contain('This is task 3');
  });
});
