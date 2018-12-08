import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Expenses } from '../../../api/stuff/expenses.js';

import './privateBudget.html';

Template.privateBudget.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
  tasks() {
    const instance = Template.instance();
    // if (instance.state.get('hideCompleted')) {
    //   // If hide completed is checked, filter tasks
    //   return Expenses.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    // }
    // Otherwise, return all of the tasks
    return Expenses.find({}, { sort: { createdAt: -1 } });
  },
  incompleteCount() {
    return Expenses.find({ checked: { $ne: true } }).count();
  },
});

Template.privateBudget.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('expenses.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('expenses.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('expenses.setPrivate', this._id, !this.private);
  },
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Meteor.call('expenses.insert', text);

    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});
