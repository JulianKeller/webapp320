import { Template } from 'meteor/templating';
import { Categories } from '../../api/collections/categories.js';
import { Goals } from '../../api/collections/goals.js';

Template.Budget_Page.helpers({

  /*
   * @returns {*} All of the Categories documents.
   */
  categoryList() {
    return Categories.find();
  },
  /*
   * @returns {*} All of the Categories documents.
   */
  goalList() {
    return Goals.find();
  },
});
