import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Categories } from '../../api/collections/categories.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddItemForm: {
    /**
     * After successful form submission, go to Budget_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function (formType, result) {
      FlowRouter.go('Budget_Page');
    },
    onError: function (formType, error) {
      FlowRouter.go('Home_Page');
    },
  },
});

Template.Add_Item_Page.helpers({
  categoriesCollection() {
    return Categories;
  },
});

Categories.allow({
  insert: function () {
    return true;
  },
});
