import { Meteor } from 'meteor/meteor';
import { Stuff } from '../../../api/stuff/stuff.js';
import { Goals } from '../../../api/stuff/goals.js';
import { assert } from 'meteor/practicalmeteor:chai';

/* global describe, afterEach, beforeEach, it*/
/* eslint-env mocha */

// empty the database
function emptyDatabase(db) {
  db.find().forEach(function (item) {
    db.remove(item._id);
  });
}

// Test the Summary
describe('Summary Template', function (){
  if (Meteor.isClient) {
    import './Summary_Template.html';
    import './Summary_Template.js';
    import { sumBalance } from './Summary_Template';

    beforeEach(function () {
      emptyDatabase(Stuff);   // Empty Database before each test
      emptyDatabase(Goals);
    });

    afterEach(function () {
      emptyDatabase(Stuff);   // Empty Database after each test
      emptyDatabase(Goals);
    });

    it('The balances of the Stuff schema total up correctly', function () {
      // add items to the database
      Stuff.insert({
        name: 'test expense',
        description: 'test description',
        balance: 0.01,
      });
      Stuff.insert({
        name: 'test expense1',
        description: 'test description',
        balance: 2.99,
      });

      assert.equal(sumBalance(Stuff.find()), 3.00);

    });

    it('The balances of the Goals schema total up correctly', function () {
      // add items to the database
      Goals.insert({
        name: 'test goal',
        goal: 100,
        balance: 13.67,
      });
      Goals.insert({
        name: 'test goal',
        goal: 100,
        balance: 4123.43,
      });

      assert.equal(sumBalance(Goals.find()), 4137.10);
    });

  }
});
