const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import Task from '../task';

describe('core.components.task', () => {
  it('should render without exploding', () => {
    const task = {isOwner: () => true};
    expect(shallow(<Task task={task} />).length).to.equal(1);
  });

  it('should call toggleChecked when checkbox clicked', () => {
    const toggleChecked = spy();
    const task = {_id: 'abc123', checked: true, isOwner: () => true};
    const el = shallow(<Task task={task} toggleChecked={toggleChecked} />);

    el.find('input').simulate('click');
    const methodArgs = toggleChecked.args[0];

    expect(methodArgs.slice(0, 2)).to.deep.equal([
      'abc123', true
    ]);
  });

  it('should call togglePrivate when private button clicked', () => {
    const togglePrivate = spy();
    const task = {_id: 'abc123', private: true, isOwner: () => true};
    const el = shallow(<Task task={task} togglePrivate={togglePrivate} />);

    el.find('button').last().simulate('click');
    const methodArgs = togglePrivate.args[0];

    expect(methodArgs.slice(0, 2)).to.deep.equal([
      'abc123', true
    ]);
  });

  it('should call deleteTask when delete button clicked', () => {
    const deleteTask = spy();
    const task = {_id: 'abc123', isOwner: () => true};
    const el = shallow(<Task task={task} deleteTask={deleteTask} />);

    el.find('button').first().simulate('click');
    const methodArgs = deleteTask.args[0];

    expect(methodArgs.slice(0, 1)).to.deep.equal([
      'abc123'
    ]);
  });
});
