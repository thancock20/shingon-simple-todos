import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default function () {
  return {
    Meteor,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    Blaze
  };
}
