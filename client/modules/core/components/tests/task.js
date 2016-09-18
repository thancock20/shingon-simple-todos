const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import Task from '../task';

const render = (task, showPrivateButton = true) => {
  return (shallow(<Task
    task={task}
    showPrivateButton={showPrivateButton}
    // toggleChecked={() => {}}
    // togglePrivate={() => {}}
    // deleteTask={() => {}}
    />)
  );
};

describe('core.components.task', () => {
  it('should render without exploding', () => {
    const task = {};
    expect(shallow(<Task task={task} />).length).to.equal(1);
  });

  it('should render li element with text inside', () => {
    const task = {text: 'Hello, World!'};
    const el = shallow(<Task task={task} />);
    expect(el.find('li').text()).to.be.match(/Hello\, World!/);
  });

  it('should render a delete button', () => {
    const task = {text: 'Hello, World!'};
    const el = shallow(<Task task={task} />);
    expect(el.find('button').first().prop('className')).to.contain('delete');
  });

  it('should render a public button normally', () => {
    const task = {text: 'Hello, World!'};
    const el = shallow(<Task task={task} showPrivateButton={true} />);
    expect(el.find('button').last().prop('className')).to.contain('togglePrivate');
    expect(el.find('button').last().prop('children')).to.equal('Public');
  });

  it('should render a private button when private is true', () => {
    const task = {text: 'Hello, World!', private: true};
    const el = shallow(<Task task={task} showPrivateButton={true} />);
    expect(el.find('button').last().prop('className')).to.contain('togglePrivate');
    expect(el.find('button').last().prop('children')).to.equal('Private');
  });

  it('should render a checkbox', () => {
    const task = {text: 'Hello, World!'};
    const el = shallow(<Task task={task} />);
    expect(el.find('input').prop('type')).to.equal('checkbox');
    expect(el.find('input').prop('readOnly')).to.equal(true);
  });

  it('should call toggleChecked when checkbox clicked', () => {
    const toggleChecked = spy();
    const task = {_id: 'abc123', checked: true};
    const el = shallow(<Task task={task} toggleChecked={toggleChecked} />);

    el.find('input').simulate('click');
    const methodArgs = toggleChecked.args[0];

    expect(methodArgs.slice(0, 2)).to.deep.equal([
      'abc123', true
    ]);
  });

  it('should call togglePrivate when private button clicked', () => {
    const togglePrivate = spy();
    const task = {_id: 'abc123', private: true};
    const el = shallow(<Task task={task} togglePrivate={togglePrivate} showPrivateButton={true} />);

    el.find('button').last().simulate('click');
    const methodArgs = togglePrivate.args[0];

    expect(methodArgs.slice(0, 2)).to.deep.equal([
      'abc123', true
    ]);
  });

  it('should call deleteTask when delete button clicked', () => {
    const deleteTask = spy();
    const task = {_id: 'abc123'};
    const el = shallow(<Task task={task} deleteTask={deleteTask} />);

    el.find('button').first().simulate('click');
    const methodArgs = deleteTask.args[0];

    expect(methodArgs.slice(0, 1)).to.deep.equal([
      'abc123'
    ]);
  });
});
