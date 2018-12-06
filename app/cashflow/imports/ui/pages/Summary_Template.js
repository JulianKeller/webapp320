import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Summary } from '../../api/stuff/summary.js';
import { Stuff } from '../../api/stuff/stuff';
import { Goals } from '../../api/stuff/goals';

// create some locally global variables the helper functions can access
Template.Summary_Template.onCreated(function totalOnCreated() {
  // total starts at 0
  this.total = new ReactiveVar(0);
  this.available = new ReactiveVar(0);
});

Template.Summary_Template.helpers({
  // returns the total of all the item balances
  total() {
    const instance = Template.instance();   // get the local variable
    // add an item to the summary schema if the database is empty
    // if (Summary.find().count() === 0) {
    //   Summary.insert({ total: 0, available: 0, addBalance: 0 });
    // }
    // sum up the stuff balance data
    const values = Stuff.find().map(function (doc) {
      return doc.balance;
    });
    let sum = 0;
    values.forEach(function (element) {
      sum += Number(element);
    });

    // sum up the stuff balance data
    const goalValues = Goals.find().map(function (doc) {
      return doc.saved;
    });
    let goalSum = 0;
    goalValues.forEach(function (element) {
      goalSum += Number(element);
    });

    instance.total.set(sum + goalSum);
    return instance.total.get();
  },


  available() {
    const instance = Template.instance();
    return instance.available.get();
  },
});

Template.Summary_Template.events({
  // get the balance to add to the budget from the user
  'submit .account-balance'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const add = target.add.value;
    const instance = Template.instance();

    // Set the value
    instance.available.set(add);

    // Clear form
    target.add.value = '';
  },
});
