import { Template } from 'meteor/templating';
import { Stuff } from '../../../api/stuff/stuff.js';
import { assert } from './meteor/practicalmeteor:chai';

// These imports give errors
// import './Budget_Page.html';
// import './Budget_Page';

// Test helpers with Template.Budget_Page.__helpers[' difference']();

/* eslint-env mocha */

// Just a simple test to test that testing is working
describe('Budget Page', function () {
  // test adding an expense
  it('This test passes!', function () {
    assert.equal(Stuff.find().count(), 0);
  });
});


// Test that the expense belongs to the current user

// Test removing an expense item

// Test adding a goal item

// Test removing a goal item
