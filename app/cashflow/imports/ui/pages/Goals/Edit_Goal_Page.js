import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Goals } from '../../../api/stuff/goals.js';

/* eslint-disable object-shorthand, no-unused-vars */

export function update(doc) {
  const regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{2})?)$/;
  if (regex.test(doc.$set.balance) && regex.test(doc.$set.goal)) {
    return doc;
  }
  return false;
}

/*
 * After successful edit, go to Budget page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditGoalForm: {
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


Template.Edit_Goal_Page.helpers({
  // get the current document from the schema
  getDoc() {
    return Goals.findOne(FlowRouter.getParam('_id'));
  },
  // return the schema
  goalsCollection() {
    return Goals;
  },
});

Goals.allow({
  remove: function () {
    return true;
  },
});

Template.Edit_Goal_Page.events({
  'click button.ui.remove.button': function () {    // Remove Item from schema
    const item = Goals.findOne(FlowRouter.getParam('_id'));
    Goals.remove(item._id);
    FlowRouter.go('Budget_Page');
  },
});
