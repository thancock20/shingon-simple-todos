const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../tasks';

describe('core.actions.tasks', () => {
  describe('create', () => {
    it('should call Meteor.call to save the task', () => {
      const Meteor = {call: spy()};
      const LocalState = {set: spy()};

      actions.create({Meteor, LocalState}, 'Hello, World!');
      const methodArgs = Meteor.call.args[0];

      expect(methodArgs.slice(0, 2)).to.deep.equal([
        'tasks.create', {text: 'Hello, World!'}
      ]);
    });

    it('should set taskInput in localState', () => {
      const Meteor = {call: spy()};
      const LocalState = {set: spy()};

      actions.create({Meteor, LocalState}, 'Hello, World!');
      const methodArgs = LocalState.set.args[0];

      expect(methodArgs.slice(0, 2)).to.deep.equal([
        'taskInput', ''
      ]);
    });
  });

  describe('setInput', () => {
    it('should set taskInput in LocalState', () => {
      const LocalState = {set: spy()};

      actions.setInput({LocalState}, 'Hello, World!');
      const methodArgs = LocalState.set.args[0];

      expect(methodArgs.slice(0, 2)).to.deep.equal([
        'taskInput', 'Hello, World!'
      ]);
    });
  });

  describe('toggleChecked', () => {
    it('should call Meteor.call to toggle the task\s checked flag', () => {
      const Meteor = {call: spy()};

      actions.toggleChecked({Meteor}, 'abc123', true);
      const methodArgs = Meteor.call.args[0];

      expect(methodArgs.slice(0, 3)).to.deep.equal([
        'tasks.edit', 'abc123', {checked: false}
      ]);
    });
  });

  describe('togglePrivate', () => {
    it('should call Meteor.call to toggle the task\'s private flag', () => {
      const Meteor = {call: spy()};

      actions.togglePrivate({Meteor}, 'abc123', true);
      const methodArgs = Meteor.call.args[0];

      expect(methodArgs.slice(0, 3)).to.deep.equal([
        'tasks.edit', 'abc123', {private: false}
      ]);
    });
  });

  describe('deleteTask', () => {
    it('should call Meteor.call to delete the task', () => {
      const Meteor = {call: spy()};

      actions.deleteTask({Meteor}, 'abc123');
      const methodArgs = Meteor.call.args[0];

      expect(methodArgs.slice(0, 2)).to.deep.equal([
        'tasks.delete', 'abc123'
      ]);
    });
  });

  describe('toggleHideCompleted', () => {
    it('should get hideCompleted from LocalState', () => {
      const LocalState = {get: spy(), set: stub()};

      actions.toggleHideCompleted({LocalState});
      const methodArgs = LocalState.get.args[0];

      expect(methodArgs.slice(0, 1)).to.deep.equal([
        'hideCompleted'
      ]);
    });

    it('should set hideCompleted in LocalState', () => {
      const LocalState = {get: stub(), set: spy()};
      LocalState.get.returns(true);

      actions.toggleHideCompleted({LocalState});
      const methodArgs = LocalState.set.args[0];

      expect(methodArgs.slice(0, 2)).to.deep.equal([
        'hideCompleted', false
      ]);
    });
  });
});
