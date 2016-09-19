const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../task';

describe('core.containers.task', () => {
  describe('composer', () => {

//    const Tracker = {nonreactive: cb => cb()};
//    const getCollections = (post) => {
//      const Collections = {
//        Posts: {findOne: stub()}
//      };
//      Collections.Posts.findOne.returns(post);
//      return Collections;
//    };

    it('should call onData with no data', () => {
      const Meteor = {};
      const Collections = {};

      const context = () => ({Meteor, Collections});
      const onData = spy();

      composer({context}, onData);
      expect(onData.args[0]).to.deep.equal([ null, {} ]);
    });
  });

  describe('depsMapper', () => {
    describe('actions', () => {
      it('should map toggleChecked to actions', () => {
        const actions = {
          tasks: {
            toggleChecked: spy(),
            togglePrivate: spy(),
            deleteTask: spy()
          }
        };

        const deps = depsMapper({}, actions);

        expect(deps.toggleChecked).to.equal(actions.tasks.toggleChecked);
      });

      it('should map togglePrivate to actions', () => {
        const actions = {
          tasks: {
            toggleChecked: spy(),
            togglePrivate: spy(),
            deleteTask: spy()
          }
        };

        const deps = depsMapper({}, actions);

        expect(deps.togglePrivate).to.equal(actions.tasks.togglePrivate);
      });

      it('should map deleteTask to actions', () => {
        const actions = {
          tasks: {
            toggleChecked: spy(),
            togglePrivate: spy(),
            deleteTask: spy()
          }
        };

        const deps = depsMapper({}, actions);

        expect(deps.deleteTask).to.equal(actions.tasks.deleteTask);
      });
    });
  });
});
