import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditItemForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('Budget_Page');
    },
  },
});

Template.Edit_Item_Page.helpers({
  getDoc() {
    return Stuff.findOne(FlowRouter.getParam('_id'));
  },
  stuffCollection() {
    return Stuff;
  },
});

Stuff.allow({
  remove: function () {
    return true;
  },
});


Template.Edit_Item_Page.events({
  'click button.ui.remove.button': function () {    // Remove Item from schema
    const item = Stuff.findOne(FlowRouter.getParam('_id'));
    Stuff.remove(item._id);
  },
});

