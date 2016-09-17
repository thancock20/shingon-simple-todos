const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { setComposerStub } from 'react-komposer';
import TaskList from '../task_list';

describe('core.components.task_list', () => {
  it('should render without exploding', () => {
    expect(shallow(<TaskList tasks={[]} />).length).to.equal(1);
  });

  it('should display the correct header', () => {
    const el = shallow(<TaskList tasks={[]} />);
    expect(el.find('h1').text()).to.be.match(/Todo List/);
  });
});
