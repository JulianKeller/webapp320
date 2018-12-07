import { Template } from 'meteor/templating';


Template.SubmitQ_Page.onRendered(function() {
  document.getElementById('message').innerHTML = "Your question has been " +
      "submitted! Please allow up to two business days for your question to be " +
      "answered.";
});
