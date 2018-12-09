import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Template } from 'meteor/templating';
import { assert } from 'meteor/practicalmeteor:chai';

import { Stuff } from './stuff.js';

/* eslint-env mocha */

// Test creating and adding an expense item
describe('Stuff Schema', function () {
  // test adding an expense
  it('This test passes!', function () {
    assert.equal(Stuff.find().count(), 0);
  });
  it('This test fails on purpose!', function () {
    assert.equal(Stuff.find().count(), 1);
  });
});

// Test that the expense belongs to the current user

// Test removing an expense item


// Test adding a goal item


// Test removing a goal item
