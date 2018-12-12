import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Stuff } from '../../../api/stuff/stuff';
import { Goals } from '../../../api/stuff/goals';
import { Meteor } from 'meteor/meteor';
import './Summary_Template.html';

// sum up the balances from a document Array
export function sumBalance(docArray) {
  let result = 0;
  const balances = docArray.map(function (doc) {   // get an array of the users balances
    return doc.balance;
  });

  balances.forEach(function (element) {
    result += Number(element);
  });
  return result;
}


// create some locally global variables the helper functions can access
Template.Summary_Template.onCreated(function totalOnCreated() {
  // total starts at 0
  this.total = new ReactiveVar(0);
});


Template.Summary_Template.helpers({

  // returns the total of all the item balances
  total() {
    const instance = Template.instance();   // get the local variable
    // get current users item and goal balances from the database
    const expenses = Stuff.find({ owner: Meteor.userId() }).fetch();
    const goals = Goals.find({ owner: Meteor.userId() }).fetch();
    instance.total.set(sumBalance(expenses) + sumBalance(goals));     // update the reactive variable
    return instance.total.get();
  },

  // check if the current user is the owner of the budget data
  isOwner(user) {
    return user.hash.user === Meteor.userId();
  },
});

/*
If this app is developed into the future...
This function allows the user to enter an amount to add to their budget
*/

// Template.Summary_Template.events({
//   // get the balance to add to the budget from the user
//   'submit .account-balance'(event) {
//     // Prevent default browser form submit
//     event.preventDefault();
//
//     // Get value from form element
//     const target = event.target;
//     const add = target.add.value;
//     const instance = Template.instance();
//
//     // Set the value
//     instance.available.set(add);
//
//     // Clear form
//     target.add.value = '';
//   },
// });
