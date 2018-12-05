import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Summary } from '../../api/stuff/summary.js';
import { Stuff } from '../../api/stuff/stuff';

// import './main.html';

Template.Summary_Template.onCreated(function helloOnCreated() {
  // total starts at 0
  this.total = new ReactiveVar(0);
});

Template.Summary_Template.helpers({
  total() {
    return Template.instance().total.get();
  },
});

// Get the total of the budget
Template.Summary_Template.events({
  'click button'(event, instance) {
    // increment the total when button is clicked
    // instance.total.set(instance.total.get() + 1);

    // add an item to the summary schema if the database is empty
    if (Summary.find().count() === 0) {
      Summary.insert({ total: 0, available: 0, addBalance: 0 });
    }
    // sum up the stuff balance data
    const values = Stuff.find().map(function (doc) {
      return doc.balance;
    });
    let sum = 0;
    values.forEach(function (element) {
      sum += Number(element);
    });
    // update the summary schema here
    instance.total.set(sum);
  },
});

