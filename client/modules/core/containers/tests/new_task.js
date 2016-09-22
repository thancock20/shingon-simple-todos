const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../new_task';

describe('core.containers.new_task', () => {
  describe('composer', () => {
    it('should call onData with taskInput from LocalState', () => {
      const Meteor = {};
      const Collections = {};
      const LocalState = {get: stub()};
      LocalState.get.returns('Hello, World!');
      const context = () => ({Meteor, LocalState, Collections});

      const onData = spy();

      composer({context}, onData);

      expect(onData.args[0]).to.deep.equal([ null, {taskInput: 'Hello, World!'} ]);
    });
  });

  describe('depsMapper', () => {
    describe('actions', () => {
      it('should map tasks.create', () => {
        const actions = {tasks: {create: spy()}};

        const deps = depsMapper({}, actions);

        expect(deps.create).to.be.equal(actions.tasks.create);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        const actions = {tasks: {create: spy()}};
        const context = stub();

        const deps = depsMapper(context, actions);

        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
