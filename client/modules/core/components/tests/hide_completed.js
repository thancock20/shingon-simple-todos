const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import HideCompleted from '../hide_completed';

describe('core.components.hide_completed', () => {
  it('should render without exploding', () => {
    expect(shallow(<HideCompleted />).length).to.equal(1);
  });

  it('should call toggleHideCompleted when checkbox clicked', () => {
    const toggleHideCompleted = spy();
    const el = shallow(<HideCompleted toggleHideCompleted={toggleHideCompleted} />);
    el.find('input').simulate('click');
    expect(toggleHideCompleted.called).to.equal(true);
  });
});
