import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';
import { Summary } from '../../api/stuff/summary.js';
import { Mongo } from 'meteor/mongo';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddStuffForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    // onSuccess: function onSuccess(formType, result) {
    //   FlowRouter.go('Budget_Page');
    // },
    onSuccess: function onSuccess(formType, result) {
      // // add an item to the summary schema if the database is empty
      // if (Summary.find().count() === 0) {
      //   Summary.insert({ total: 0, available: 0, addBalance: 0 });
      // }
      // // sum up the stuff balance data
      // const values = Stuff.find().map(function (doc) {
      //   return doc.balance;
      // });
      // let sum = 0;
      // values.forEach(function (element) {
      //   sum += Number(element);
      // });
      // // update the summary schema here
      FlowRouter.go('Budget_Page');
    },
  },
});

Template.Add_Item_Page.helpers({
  stuffCollection() {
    return Stuff;
  },
});
