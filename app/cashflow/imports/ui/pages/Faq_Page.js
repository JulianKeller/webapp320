import {Template} from 'meteor/templating';

Template.Faq_Page.onRendered(function(){
  $('.menu .item').tab({});
});
