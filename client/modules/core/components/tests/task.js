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
    const el = render({text: 'Hello, World!'} );
    expect(el.find('button').nodes[0].props.className).to.contain('delete');
  });

  it('should have a public button normally', () => {
    const el = render({text: 'Hello, World!'});
    expect(el.find('button').nodes[1].props.className).to.contain('togglePrivate');
    expect(el.find('button').nodes[1].props.children).to.equal('Public');
  });

  it('should have a private button when private is true', () => {
    const el = render({text: 'Hello, World!', private: true});
    expect(el.find('button').nodes[1].props.className).to.contain('togglePrivate');
    expect(el.find('button').nodes[1].props.children).to.equal('Private');
  });

  it('should have a checkbox', () => {
    const el = render({text: 'Hello, World!'});
    expect(el.find('input').props().type).to.equal('checkbox');
    expect(el.find('input').props().readOnly).to.equal(true);
  });
});
