import { Template } from 'meteor/templating';

import { Categories } from '../../api/collections/categories.js';
import { Goals } from '../../api/collections/goals.js';
import { Summary } from '../../api/collections/summary.js';

Template.Budget_Page.helpers({
  /*
   * @returns {*} All of the Categories documents.
   */
  categoryList() {
    return Categories.find();
  },
  /*
   * @returns {*} All of the Goals documents.
   */
  // goalList() {
  //   return Goals.find();
  // },
  /*
   * @returns {*} All of the Goals documents.
   */
  summaryList() {
    return Summary.find();
  },
});

Categories.allow({
  insert: function () {
    return true;
  },
});
