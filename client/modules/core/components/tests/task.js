const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Task from '../task';

describe('core.components.task', () => {
  it('should output li element with text inside', () => {
    const task = {text: 'Hello, World!'};
    const el = shallow(<Task task={task} />);
    expect(el.find('li').text()).to.be.match(/Hello\, World!/);
  });

  it('should have a delete button', () => {
    const task = {text: 'Hello, World!'};
    const el = shallow(<Task task={task} />);
    expect(el.find('button').props().className).to.contain('delete');
  });

  it('should have a checkbox', () => {
    const task = {text: 'Hello, World!'};
    const el = shallow(<Task task={task} />);
    expect(el.find('input').props().type).to.equal('checkbox');
    expect(el.find('input').props().readOnly).to.equal(true);
  });
});
