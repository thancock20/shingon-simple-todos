const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import HideCompleted from '../hide_completed';

describe('core.components.hide_completed', () => {
  it('should render without exploding', () => {
    expect(shallow(<HideCompleted />).length).to.equal(1);
  });
});
