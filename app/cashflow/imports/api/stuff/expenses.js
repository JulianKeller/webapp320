import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Stuff } from '../../api/stuff/stuff.js';

// export const Stuff = new Mongo.Collection('stuff');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish stuff that are public or belong to the current user
  Meteor.publish('stuff', function stuffPublication() {
    return Stuff.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'stuff.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a expense
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Stuff.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'stuff.remove'(expenseId) {
    check(expenseId, String);

    const expense = Stuff.findOne(expenseId);
    if (expense.private && expense.owner !== Meteor.userId()) {
      // If the expense is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Stuff.remove(expenseId);
  },
  'stuff.setChecked'(expenseId, setChecked) {
    check(expenseId, String);
    check(setChecked, Boolean);

    const expense = Stuff.findOne(expenseId);
    if (expense.private && expense.owner !== Meteor.userId()) {
      // If the expense is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Stuff.update(expenseId, { $set: { checked: setChecked } });
  },
  'stuff.setPrivate'(expenseId, setToPrivate) {
    check(expenseId, String);
    check(setToPrivate, Boolean);

    const expense = Stuff.findOne(expenseId);

    // Make sure only the expense owner can make a expense private
    if (expense.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Stuff.update(expenseId, { $set: { private: setToPrivate } });
  },
});
