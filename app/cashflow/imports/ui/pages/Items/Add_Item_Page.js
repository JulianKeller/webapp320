import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../../api/stuff/stuff.js';

/* eslint-disable object-shorthand, no-unused-vars */

// Check for valid input before updating the document
export function insert(doc) {
  const regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{2})?)$/;
  if (regex.test(doc.balance)) {
    return doc;
  }
  return false;
}

/*
 * After successful addition of a new Stuff document, go to Budget page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddStuffForm: {
    // before accepting, run the regex to check that the input is in currency format
    before: {
      insert: function (doc) {
        return insert(doc);
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

Template.Add_Item_Page.helpers({
  stuffCollection() {
    return Stuff;
  },
});
