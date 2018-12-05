import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Summary } from '../../api/stuff/summary.js';
import { Stuff } from '../../api/stuff/stuff';

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
    instance.total.set(sum);
    return sum;
  },

  values(sum) {
    const x = sum;
    return {
      class: 'total',
      value: x,
    };
  },


  availabe() {
    const instance = Template.instance();
    return instance.total.get();
  },
});

Template.Summary_Template.events({
  // TODO edit this to work for taking amount and doing stuff
  // TODO change text from white
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    console.log(text);
    console.log(target);

    // Clear form
    target.text.value = '';
  },
});
