const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {depsMapper} from '../new_task';

describe('core.containers.new_task', () => {
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
