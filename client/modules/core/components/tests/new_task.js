const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewTask from '../new_task';

describe('core.components.new_task', () => {
  it('should render without exploding', () => {
    expect(shallow(<NewTask />).length).to.equal(1);
  });

  it('should render the text input', () => {
    const el = shallow(<NewTask />);
    const input = el.find('input');
    expect(input.node.ref).to.equal('textInput');
    expect(input.prop('className')).to.contain('newTask');
    expect(input.prop('type')).to.equal('text');
    expect(input.prop('placeholder')).to.equal('Type to add new tasks');
  });
});
