import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../../api/stuff/stuff.js';

/* eslint-disable object-shorthand, no-unused-vars */

// Check for valid input before updating the document
export function update(doc) {
  const regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{2})?)$/;
  if (regex.test(doc.$set.balance)) {
    return doc;
  }
  return false;
}

/*
 * After successful edit, go to Budget page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditItemForm: {
    // before accepting, run the regex to check that the input is in currency format
    before: {
      update: function (doc) {
        return update(doc);
      },
    },
    /**
     * After successful form submission, go to Budget_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('Budget_Page');
    },
  },
});


Template.Edit_Item_Page.helpers({
  // Get the current document from the database
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
