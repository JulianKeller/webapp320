import { Meteor } from 'meteor/meteor';
import { Stuff } from '../../../api/stuff/stuff.js';
import { Goals } from '../../../api/stuff/goals.js';
import { assert } from 'meteor/practicalmeteor:chai';

/* global describe, afterEach, beforeEach, it*/
/* eslint-env mocha */

// empty the database
function emptyDatabase(db) {
  db.find()
    .forEach(function (item) {
      db.remove(item._id);
    });
}

// Test Adding and Removing items from the Database on both Client and Server Sides
describe('Budget Page Databases', function () {
  beforeEach(function () {
    emptyDatabase(Stuff);   // Empty Database before each test
    emptyDatabase(Goals);
  });

  afterEach(function () {
    emptyDatabase(Stuff);   // Empty Database after each test
    emptyDatabase(Goals);
  });

  it('Add then remove an expense from the Stuff database', function () {
    Stuff.insert({
      name: 'test expense',
      description: 'test description',
      balance: 10,
    });
    const item = Stuff.findOne({ name: 'test expense' });
    assert.equal(Stuff.find()
      .count(), 1);
    Stuff.remove(item._id);
    assert.equal(Stuff.find()
      .count(), 0);
  });

  it('Add then remove a goal from the Goals database', function () {
    Goals.insert({
      name: 'test goal',
      goal: 100,
      balance: 10,
      needed: 90,
    });
    const item = Goals.findOne({ name: 'test goal' });
    assert.equal(Goals.find()
      .count(), 1);
    Goals.remove(item._id);
    assert.equal(Goals.find()
      .count(), 0);
  });
});

describe('Budget Page Helpers', function () {
  if (Meteor.isClient) {
    import './Budget_Page.html';
    import '../Budget/Budget_Page.js';

    beforeEach(function () {
      emptyDatabase(Stuff);   // Empty Database before each test
      emptyDatabase(Goals);
    });

    afterEach(function () {
      emptyDatabase(Stuff);   // Empty Database after each test
      emptyDatabase(Goals);
    });

    it('Difference function subtracts correctly', function () {
      // define the helper function
      function diff(goal, balance) {
        return Template.Budget_Page.__helpers[' difference'](goal, balance);
      }

      // basic subtraction
      assert.equal(diff(0, 0), 0);
      assert.equal(diff(0, 1), -1);
      assert.equal(diff(1, 0), 1);
      assert.equal(diff(1, 1), 0);
      assert.equal(diff(1.00, .01), 0.99);
      assert.equal(diff(0.01, 1.00), -0.99);
      assert.equal(diff(0.34, 0.33), 0.01);
      assert.equal(diff(0.33, 0.34), -0.01);
      assert.equal(diff(0.34, 0.33), 0.01);
    });

    it('stuffList returns the Stuff schema', function () {
      // define the helper function
      function stuffList() {
        return Template.Budget_Page.__helpers[' stuffList']();
      }

      assert.equal(stuffList()
        .count(), Stuff.find()
        .count());

      // add item to Stuff database
      Stuff.insert({
        name: 'test expense',
        description: 'test description',
        balance: 10,
      });

      // verify that the correct database is returned
      assert.equal(stuffList()
        .count(), Stuff.find()
        .count());
    });

    it('goalList returns the Goals schema', function () {
      // define the helper function
      function goalList() {
        return Template.Budget_Page.__helpers[' goalList']();
      }

      assert.equal(goalList()
        .count(), Goals.find()
        .count());

      // add item to Stuff database
      Goals.insert({
        name: 'test goal',
        goal: 100,
        balance: 10,
        needed: 90,
      });

      // verify that the correct database is returned
      assert.equal(goalList()
        .count(), Goals.find()
        .count());
    });

    this.slow(0);
    it('Adding and removing 2 items should take no longer than 20ms', function (done) {
      Stuff.insert({
        name: 'test expense',
        description: 'test description',
        balance: 10,
      });
      Goals.insert({
        name: 'test goal',
        goal: 100,
        balance: 10,
        needed: 90,
      });
      const stuffItem = Stuff.findOne({ name: 'test expense' });
      const goalItem = Goals.findOne({ name: 'test goal' });
      Stuff.remove(stuffItem._id);
      Goals.remove(goalItem._id);
      this.timeout(20);
      done();
    });

    it('Adding 500 items to the database should take no longer than 1000ms', function (done) {
      // add items to each database
      for (let i = 0; i < 250; i++) {
        Stuff.insert({
          name: 'test expense' + i,
          description: 'test description',
          balance: 0.01,
        });
        Goals.insert({
          name: 'test goal' + i,
          goal: 100.00,
          balance: 10.25,
        });
      }
      this.timeout(1000);
      this.slow(0);
      done();
    });
  }
});
