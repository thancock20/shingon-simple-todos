const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../task_list';

describe('core.containers.task_list', () => {
  describe('composer', () => {

    // const Tracker = {nonreactive: cb => cb()};
    // const getCollections = (task) => {
    //   const Collections = {
    //     Tasks: {find: stub()}
    //   };
    //   Collections.Tasks.find.returns(task);
    //   return Collections;
    // };

    it('should subscribe to tasks', () => {
      const Meteor = {subscribe: stub(), user: stub()};
      Meteor.subscribe.returns({ready: () => false});
      Meteor.user.returns('Bob');
      const LocalState = {get: stub()};
      LocalState.get.returns(true);

      const tasks = [ {_id: 'abc123'} ];
      const Collections = {Task: {find: stub()}};
      Collections.Task.find.returns({fetch: () => tasks, count: () => 1});

      const context = () => ({Meteor, LocalState, Collections});
      const onData = spy();

      composer({context}, onData);
      const args = Meteor.subscribe.args[0];
      expect(args.slice(0, 1)).to.deep.equal([
        'tasks'
      ]);
    });

    it('should pass data on to onData', () => {
      const Meteor = {subscribe: stub(), user: stub()};
      Meteor.subscribe.returns({ready: () => true});
      Meteor.user.returns('Bob');
      const LocalState = {get: stub()};
      LocalState.get.returns(true);

      const tasks = [ {_id: 'abc123'} ];
      const Collections = {Task: {find: stub()}};
      Collections.Task.find.returns({fetch: () => tasks, count: () => 1});

      const context = () => ({Meteor, LocalState, Collections});
      const onData = spy();

      const incompleteCount = 1;
      const currentUser = 'Bob';
      const hideCompleted = true;

      composer({context}, onData);
      const args = onData.args[0];
      expect(args).to.deep.equal([
        null, {tasks, incompleteCount, currentUser, hideCompleted}
      ]);
    });
  });

  describe('depsMapper', () => {
    it('should map the whole context as a function', () => {
      const actions = {};
      const context = stub();

      const deps = depsMapper(context, actions);

      expect(deps.context()).to.be.equal(context);
    });
  });
});
