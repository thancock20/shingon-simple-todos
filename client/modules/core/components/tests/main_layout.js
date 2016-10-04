const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../main_layout';

describe('core.components.main_layout', () => {
  it('should render without exploding', () => {
    expect(shallow(<MainLayout />).length).to.equal(1);
  });
});
