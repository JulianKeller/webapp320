import { Meteor } from 'meteor/meteor';
import { Stuff } from '../../../api/stuff/stuff.js';
import { Goals } from '../../../api/stuff/goals.js';
import { assert } from 'meteor/practicalmeteor:chai';

/* global describe, afterEach, beforeEach, it */
/* eslint-env mocha */

// empty the database
function emptyDatabase(db) {
  db.find().forEach(function (item) {
    db.remove(item._id);
  });
}

// Test the Summary
describe('Add Goal Page', function () {
  if (Meteor.isClient) {
    import './Add_Goal_Page.html';
    import '../Goals/Add_Goal_Page.js';
    import { insert } from './Add_Goal_Page.js';

    beforeEach(function () {
      emptyDatabase(Stuff);   // Empty Database before each test
      emptyDatabase(Goals);
    });

    afterEach(function () {
      emptyDatabase(Stuff);   // Empty Database after each test
      emptyDatabase(Goals);
    });

    it('Invalid input is not allowed in the goal and fields', function () {
      // add items to the database
      Goals.insert({
        name: 'test 1',
        goal: '0',
        balance: '0',
      });
      Goals.insert({
        name: 'test 2',
        goal: .123,
        balance: .123,
      });
      Goals.insert({
        name: 'test 3',
        goal: .1,
        balance: .1,
      });
      Goals.insert({
        name: 'test 4',
        goal: 100.,
        balance: 100.,
      });
      Goals.insert({
        name: 'test 5',
        goal: 0.0,
        balance: 0.0,
      });
      Goals.insert({
        name: 'test 6',
        goal: 123.123659765,
        balance: 123.123659765,
      });
      Goals.insert({
        name: 'test 7',
        goal: '123.12',
        balance: '123.12',
      });
      Goals.insert({
        name: 'test 7',
        goal: 9999999,
        balance: 999999,
      });

      for ( i = 1; i <= 7; i++) {
        let testNum = 'test ' + i.toString();
        let test = Goals.findOne({ name: testNum });
        expect(insert(test.goal)).to.be.false;
        expect(insert(test.balance)).to.be.false;
      }
    });

    it('Only valid input is allowed in the goal and fields', function () {
      // add items to the database
      Goals.insert({
        name: 'test 1',
        goal: 0,
        balance: 0,
      });
      Goals.insert({
        name: 'test 2',
        goal: .00,
        balance: .12,
      });
      Goals.insert({
        name: 'test 3',
        goal: 0.01,
        balance: 0.01,
      });
      Goals.insert({
        name: 'test 4',
        goal: 100,
        balance: 100,
      });
      Goals.insert({
        name: 'test 5',
        goal: 1232.34,
        balance: 1232.34,
      });
      Goals.insert({
        name: 'test 6',
        goal: 530234,
        balance: 580234,
      });
      Goals.insert({
        name: 'test 7',
        goal: 3.12,
        balance: 3.12,
      });

      for ( i = 1; i <= 7; i++) {
        let testNum = 'test ' + i.toString();
        let test = Goals.findOne({ name: testNum });
        assert.equal(test, insert(test));
      }
    });
  }
});
