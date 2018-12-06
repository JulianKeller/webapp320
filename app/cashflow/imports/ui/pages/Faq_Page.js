import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Question } from '../../api/stuff/question.js';

AutoForm.hooks({
  AddQuestionForm: {
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('SubmitQ_Page');
    },
  },
});

Template.Faq_Page.onRendered(function () {
  $('.menu .item').tab({});
  $('.ui .accordion').accordion();
});

Template.Faq_Page.helpers({
  questionCollection() {
    return Question;
  },
});
