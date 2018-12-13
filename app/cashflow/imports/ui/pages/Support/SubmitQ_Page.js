import { Template } from 'meteor/templating';
import './SubmitQ_Page.html';

/* global document */     // gets rid of eslint error for 'document'

Template.SubmitQ_Page.onRendered(function () {
  document.getElementById('message').innerHTML = 'Your question has been ' +
    'submitted! Please allow up to two business days for your question to be ' +
    'answered.';
});
