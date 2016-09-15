const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Task from '../task';

const render = (task, showPrivateButton = true) => {
  return (shallow(<Task
    task={task}
    showPrivateButton={showPrivateButton}
    toggleChecked={() => {}}
    togglePrivate={() => {}}
    deleteTask={() => {}} />)
  );
};

describe('core.components.task', () => {
  it('should output li element with text inside', () => {
    const el = render({text: 'Hello, World!'});
    expect(el.find('li').text()).to.be.match(/Hello\, World!/);
  });

  it('should have a delete button', () => {
    const el = render({text: 'Hello, World!'}, false);
    expect(el.find('button').props().className).to.contain('delete');
  });

  it('should have a checkbox', () => {
    const el = render({text: 'Hello, World!'});
    expect(el.find('input').props().type).to.equal('checkbox');
    expect(el.find('input').props().readOnly).to.equal(true);
  });
});
