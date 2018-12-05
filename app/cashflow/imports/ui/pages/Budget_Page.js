import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';
import { Goals } from '../../api/stuff/goals.js';
import { Summary } from '../../api/stuff/summary.js';
import { AutoForm } from 'meteor/aldeed:autoform';
// import { ReactiveVar } from 'meteor/reactive-var';

import './Budget_Page.html';

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
});
