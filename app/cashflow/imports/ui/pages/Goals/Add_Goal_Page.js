import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Goals } from '../../../api/stuff/goals.js';

/* eslint-disable object-shorthand, no-unused-vars */

// check an items input before it is inserted
export function insert(doc) {
  const regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{2})?)$/;
  if (regex.test(doc.balance) && regex.test(doc.goal)) {
    return doc;
  }
  return false;
}

/*
 * After successful addition of a new Stuff document, go to Budget page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddGoalForm: {
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


Template.Add_Goal_Page.helpers({
  goalCollection() {
    return Goals;
  },
});
