import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';
import { Goals } from '../../api/stuff/goals.js';
import { Summary } from '../../api/stuff/summary.js';
// import { AutoForm } from 'meteor/aldeed:autoform';
import { ReactiveVar } from 'meteor/reactive-var';

import './Budget_Page.html';

// create some locally global variables the helper functions can access
Template.Budget_Page.onCreated(function diffOnCreated() {
  // total starts at 0
  this.diff = new ReactiveVar(0);
});

// Display the Schema data on the page
Template.Budget_Page.helpers({
  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
  /**
   * @returns {*} All of the Stuff documents.
   */
  goalList() {
    return Goals.find();
  },
  /**
   * @returns {*} All of the Stuff documents.
   */
  summaryList() {
    return Summary.find();
  },

  // return the difference between the goal and the saved
  difference(item) {
    const diff = item.hash.goal - item.hash.saved;
    return diff;
  },
});
