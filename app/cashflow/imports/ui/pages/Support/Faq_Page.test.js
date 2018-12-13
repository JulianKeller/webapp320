import { Meteor } from 'meteor/meteor';
import { Question } from '../../../api/stuff/question.js';
import { Support } from '../../../api/stuff/support.js';
import { assert } from 'meteor/practicalmeteor:chai';

/* global describe, afterEach, beforeEach, it*/
/* eslint-env mocha */

// empty the database
function emptyDatabase(db) {
  db.find().forEach(function (item) {
    db.remove(item._id);
  });
}


// Test Adding and Removing items from the Database on both Client and Server Sides
describe('FAQ Page Databases', function () {
  beforeEach(function () {
    emptyDatabase(Question);   // Empty Database before each test
    emptyDatabase(Support);
  });

  afterEach(function () {
    emptyDatabase(Question);   // Empty Database after each test
    emptyDatabase(Support);
  });

  it('Add then remove an email question from the Question database', function () {
    Question.insert({
      email: 'test@test.com',
      message: 'test message',
    });
    const item = Question.findOne({ email: 'test@test.com' });
    assert.equal(Question.find().count(), 1);
    Question.remove(item._id);
    assert.equal(Question.find().count(), 0);
  });

  it('Add then remove a support question from the Support database', function () {
    Support.insert({
      issue: 'test issue',
      details: 'test details',
    });
    const item = Support.findOne({ issue: 'test issue' });
    assert.equal(Support.find().count(), 1);

    console.log(item);
    Support.remove(item._id);
    assert.equal(Support.find().count(), 0);
  });
});

describe('FAQ Page Helpers', function (){
  if (Meteor.isClient) {
    import './Faq_Page.html';
    import './Faq_Page.js';

    beforeEach(function () {
      emptyDatabase(Question);   // Empty Database before each test
      emptyDatabase(Support);
    });

    afterEach(function () {
      emptyDatabase(Question);   // Empty Database after each test
      emptyDatabase(Support);
    });

    it('Options helper returns expected strings', function () {
      // define the helper function
      function options() {
        return Template.Faq_Page.__helpers[' options']();
      }
      assert.equal(options().no_display, 'My budget(s) are not displaying correctly.');
      assert.equal(options().no_add, 'I cannot add a new item/goal.');
      assert.equal(options().no_update_bal, 'My balance is not updating correctly.');
      assert.equal(options().no_update_info, 'I\'m having trouble updating my information.');
      assert.equal(options().delete_acct, 'I\'d like to delete my account.');
      assert.equal(options().other, 'Other (Please describe below)');
    });

    it('questionCollection returns the Question schema', function () {
      // define the helper function
      function questionCollection() {
        return Template.Faq_Page.__helpers[' questionCollection']();
      }
      assert.equal(questionCollection(), Question);
    });

    it('supportCollection returns the Support schema', function () {
      // define the helper function
      function supportCollection() {
        return Template.Faq_Page.__helpers[' supportCollection']();
      }
      assert.equal(supportCollection(), Support);
    });

    this.slow(0);
    it('Adding and removing a question and support item should take no longer than 20ms', function(done){
      Question.insert({
        email: 'test@test.com',
        message: 'test message',
      });
      Support.insert({
        issue: 'test issue',
        details: 'test details',
      });
      const questionI = Question.findOne({ email: 'test@test.com' });
      const supportI = Support.findOne({ issue: 'test issue' });
      Question.remove(questionI._id);
      Support.remove(supportI._id);
      this.timeout(20);
      done();
    });
  }

});
