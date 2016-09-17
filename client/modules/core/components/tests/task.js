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
  it('should render without exploding', () => {
    expect(render({}).length).to.equal(1);
  });

  it('should render li element with text inside', () => {
    const el = render({text: 'Hello, World!'});
    expect(el.find('li').text()).to.be.match(/Hello\, World!/);
  });

  it('should render a delete button', () => {
    const el = render({text: 'Hello, World!'} );
    expect(el.find('button').first().prop('className')).to.contain('delete');
  });

  it('should render a public button normally', () => {
    const el = render({text: 'Hello, World!'});
    expect(el.find('button').last().prop('className')).to.contain('togglePrivate');
    expect(el.find('button').last().prop('children')).to.equal('Public');
  });

  it('should render a private button when private is true', () => {
    const el = render({text: 'Hello, World!', private: true});
    expect(el.find('button').last().prop('className')).to.contain('togglePrivate');
    expect(el.find('button').last().prop('children')).to.equal('Private');
  });

  it('should render a checkbox', () => {
    const el = render({text: 'Hello, World!'});
    expect(el.find('input').prop('type')).to.equal('checkbox');
    expect(el.find('input').prop('readOnly')).to.equal(true);
  });
});
