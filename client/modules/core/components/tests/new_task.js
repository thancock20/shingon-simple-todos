const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewTask from '../new_task';

describe('core.components.new_task', () => {
  it('should render the text input', () => {
    const el = shallow(<NewTask />);
    const input = el.find('input');
    expect(input.node.ref).to.equal('textInput');
    expect(input.props().className).to.contain('newTask');
    expect(input.props().type).to.equal('text');
    expect(input.props().placeholder).to.equal('Type to add new tasks');
  });
});
