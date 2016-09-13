const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { setComposerStub } from 'react-komposer';
import TaskList from '../task_list';

describe('core.components.task_list', () => {

  it('should display the correct header', () => {
    const el = shallow(<TaskList tasks={[]} />);
    expect(el.find('h1').text()).to.be.match(/Todo List/);
  });

  it('should display a checkbox for hiding completed tasks', () => {
    const el = shallow(<TaskList tasks={[]} />);
    expect(el.find('UseDeps(Container(HideCompleted))').length).to.equal(1);
  });

  it('should display a New Task input', () => {
    const el = shallow(<TaskList tasks={[]} />);
    expect(el.find('UseDeps(Container(NewTask))').length).to.equal(1);
  });

  it('should display a list of Tasks', () => {
    const tasks = [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' }
    ];

    const el = shallow(<TaskList tasks={tasks} />);
    expect(el.find('UseDeps(Container(Task))').length).to.equal(3);
  });
});
