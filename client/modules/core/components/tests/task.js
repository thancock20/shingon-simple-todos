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
});
