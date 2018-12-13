import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Question } from '../../../api/stuff/question.js';
import { Support } from '../../../api/stuff/support.js';

AutoForm.hooks({
  AddQuestionForm: {
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('SubmitQ_Page');
    },
  },
  AddSupportForm: {
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('SubmitQ_Page');
    },
  },
});

// Javascript for Semantic UI elements
Template.Faq_Page.onRendered(function () {
  $('.menu .item')
    .tab({});
  $('.ui .accordion')
    .accordion();
});

Template.Faq_Page.helpers({
  options() {
    return {
      no_display: 'My budget(s) are not displaying correctly.',
      no_add: 'I cannot add a new item/goal.',
      no_update_bal: 'My balance is not updating correctly.',
      no_update_info: 'I\'m having trouble updating my information.',
      delete_acct: 'I\'d like to delete my account.',
      other: 'Other (Please describe below)',
    };
  },

  questionCollection() {
    return Question;
  },

  supportCollection() {
    return Support;
  },
});
