const {describe, it} = global;
import {expect} from 'chai';
import {render} from 'enzyme';
import Task from '../task';

describe('core.components.task', () => {
  it('should output li element with text inside', () => {
    const task = {text: 'Hello, World!'};
    const el = render(<Task task={task} />);
    expect(el.find('li').text()).to.be.match(/Hello\, World!/);
  });

  it('should have a delete button', () => {
    const task = {text: 'Hello, World!'};
    const el = render(<Task task={task} />);
    expect(el.find('button').length).to.equal(1);
    expect(el.find('button')[0].attribs.class).to.contain('delete');
  });

  it('should have a checkbox', () => {
    const task = {text: 'Hello, World!'};
    const el = render(<Task task={task} />);
    expect(el.find('input').length).to.equal(1);
    expect(el.find('input')[0].attribs.type).to.equal('checkbox');
  });
});
