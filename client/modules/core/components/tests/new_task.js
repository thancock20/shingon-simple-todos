const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import NewTask from '../new_task';

describe('core.components.new_task', () => {
  it('should render without exploding', () => {
    expect(shallow(<NewTask />).length).to.equal(1);
  });

  it('should call setInput when value changes', () => {
    const setInput = spy();
    const el = shallow(<NewTask setInput={setInput} />);
    el.find('input').simulate('change', {target: {value: 'Hello, World!'}});
    expect(setInput.called).to.equal(true);
  });

  it('should call create  when form submitted', () => {
    const create = spy();
    const el = shallow(<NewTask create={create} />);
    el.find('form').simulate('submit');
    expect(create.called).to.equal(true);
  });
});
