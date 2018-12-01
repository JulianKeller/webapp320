import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';
import { Goals } from '../../api/stuff/goals.js';

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

