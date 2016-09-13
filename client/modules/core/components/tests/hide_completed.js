const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import HideCompleted from '../hide_completed';

describe('core.components.hide_completed', () => {
  it('should render a checkbox', () => {
    const el = shallow(<HideCompleted checked={true} toggleHideCompleted={() => {}} />);
    expect(el.find('input').props().type).to.equal('checkbox');
    expect(el.find('input').props().readOnly).to.equal(true);
  });
});
