import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';
import { Goals } from '../../api/stuff/goals.js';
import { Summary } from '../../api/stuff/summary.js';
import { AutoForm } from 'meteor/aldeed:autoform';

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
});



// Template.Budget_Page.events({
//   'click .selectable': function () {
//     FlowRouter.go('Home_Page');
//   },
// });
