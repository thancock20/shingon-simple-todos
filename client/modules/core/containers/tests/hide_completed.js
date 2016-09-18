const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../hide_completed';

describe('core.containers.hide_completed', () => {
  describe('composer', () => {

//    const Tracker = {nonreactive: cb => cb()};
//    const getCollections = (post) => {
//      const Collections = {
//        Posts: {findOne: stub()}
//      };
//      Collections.Posts.findOne.returns(post);
//      return Collections;
//    };

    it('should get hideCompleted from LocalState', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});
      const onData = stub();

      composer({context}, onData);
      const args = LocalState.get.args[0];

      expect(args.slice(0, 1)).to.deep.equal([
        'hideCompleted'
      ]);
    });

    it('should call onData with hideCompleted from LocalState', () => {
      const LocalState = {get: stub()};
      LocalState.get.returns(true);
      const context = () => ({LocalState});

      const onData = (err, data) => {
        expect(data.hideCompleted).to.be.equal(true);
      };

      composer({context}, onData);
    });
  });

  describe('depsMapper', () => {
    describe('actions', () => {
      it('should map tasks.toggleHideCompleted', () => {
        const actions = {tasks: {toggleHideCompleted: spy()}};

        const deps = depsMapper({}, actions);

        expect(deps.toggleHideCompleted).to.be.equal(actions.tasks.toggleHideCompleted);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        const actions = {tasks: {toggleHideCompleted: spy()}};
        const context = stub();

        const deps = depsMapper(context, actions);

        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
