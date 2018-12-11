// import { Template } from 'meteor/templating';
import { Stuff } from '../../../api/stuff/stuff.js';
import { assert } from 'meteor/practicalmeteor:chai';
// import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner';
// import { removeAllEntities } from '/imports/api/base/BaseUtilities';



/* eslint-env mocha */
// Console.log(Template.Budget_Page.__helpers[' difference']());
// Test helpers with Template.Budget_Page.__helpers[' difference']();
// Just a simple test to test that testing is working
describe('Budget Page', function () {
  if (Meteor.isClient) {
    import './Budget_Page.html';
    import './Budget_Page.js';

    beforeEach(function () {
      // Empty Database after each test
      Stuff.find().forEach(function(item) {
        console.log('before removing ', item._id);
        Stuff.remove(item._id);
      });
    });

    afterEach(function () {
      // Empty Database after each test
      Stuff.find().forEach(function(item) {
        console.log('after removing ', item._id);
        Stuff.remove(item._id);
      });
    });
    
    it('Add then remove an item from the database', function () {
      Stuff.insert({
        name: 'test expense',
        description: 'test description',
        balance: 10,
      });
      const item = Stuff.findOne( { name: 'test expense' } );
      assert.equal(Stuff.find().count(), 1);
      Stuff.remove(item._id);
      assert.equal(Stuff.find().count(), 0);
    });
  }
});
