const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LogInButtons from '../log_in_buttons';

describe('core.components.log_in_buttons', () => {
  it('should render without exploding', () => {
    expect(shallow(<LogInButtons />).length).to.equal(1);
  });
});
