import { Meteor } from 'meteor/meteor';
import { Stuff } from '../../../api/stuff/stuff.js';
import { assert } from 'meteor/practicalmeteor:chai';

/* global describe, afterEach, beforeEach, it, expect */
/* eslint-env mocha */

// empty the database
function emptyDatabase(db) {
  db.find().forEach(function (item) {
    db.remove(item._id);
  });
}

// Test the Summary
describe('Add Item (Expense) Page', function () {
  if (Meteor.isClient) {
    import './Add_Item_Page.html';
    import './Add_Item_Page.js';
    import { insert } from './Add_Item_Page';

    beforeEach(function () {
      emptyDatabase(Stuff);   // Empty Database before each test
      emptyDatabase(Stuff);
    });

    afterEach(function () {
      emptyDatabase(Stuff);   // Empty Database after each test
      emptyDatabase(Stuff);
    });

    it('Invalid input is not allowed in the description and fields', function () {
      // add items to the database
      Stuff.insert({
        name: 'test 1',
        description: '0',
        balance: '0',
      });
      Stuff.insert({
        name: 'test 2',
        description: .123,
        balance: .123,
      });
      Stuff.insert({
        name: 'test 3',
        description: .1,
        balance: .1,
      });
      Stuff.insert({
        name: 'test 4',
        description: 100.,
        balance: 100.,
      });
      Stuff.insert({
        name: 'test 5',
        description: 0.0,
        balance: 0.0,
      });
      Stuff.insert({
        name: 'test 6',
        description: 123.123659765,
        balance: 123.123659765,
      });
      Stuff.insert({
        name: 'test 7',
        description: '123.12',
        balance: '123.12',
      });
      Stuff.insert({
        name: 'test 7',
        description: 99999999,
        balance: 99999999,
      });


      for ( i = 1; i <= 7; i++) {
        let testNum = 'test ' + i.toString();
        let test = Stuff.findOne({ name: testNum });
        expect(insert(test.balance)).to.be.false;
      }
    });

    it('Only valid input is allowed in the description and fields', function () {
      // add items to the database
      Stuff.insert({
        name: 'test 1',
        description: 0,
        balance: 0,
      });
      Stuff.insert({
        name: 'test 2',
        description: .00,
        balance: .12,
      });
      Stuff.insert({
        name: 'test 3',
        description: 0.01,
        balance: 0.01,
      });
      Stuff.insert({
        name: 'test 4',
        description: 100,
        balance: 100,
      });
      Stuff.insert({
        name: 'test 5',
        description: 1232.34,
        balance: 1232.34,
      });
      Stuff.insert({
        name: 'test 6',
        description: 530234,
        balance: 580234,
      });
      Stuff.insert({
        name: 'test 7',
        description: 3.12,
        balance: 3.12,
      });

      for ( i = 1; i <= 7; i++) {
        let testNum = 'test ' + i.toString();
        let test = Stuff.findOne({ name: testNum });
        assert.equal(test, insert(test));
      }
    });

    it('stuffCollection returns the Stuff schema', function () {
      // define the helper function
      function stuffCollection() {
        return Template.Add_Item_Page.__helpers[' stuffCollection']();
      }
      assert.equal(stuffCollection(), Stuff);
    });

    it('Checking valid input against regex should take no longer than 5ms', function(done){
      // insert item into database
      Stuff.insert({
        name: 'test 1',
        description: 'test',
        balance: 123456.10,
      });
      let test = Stuff.findOne({ name: 'test 1' });
      this.timeout(5);
      this.slow(0);
      insert(test);
      done();
    });

    it('Checking invalid input against regex should take no longer than 5ms', function(done){
      // insert item into database
      Stuff.insert({
        name: 'test 1',
        description: 'test',
        balance: 12310.160,
      });
      let test = Stuff.findOne({ name: 'test 1' });
      this.timeout(5);
      this.slow(0);
      insert(test);
      done();
    });

  }
});
