// import { Template } from 'meteor/templating';
import { Stuff } from '../../../api/stuff/stuff.js';
import { assert } from 'meteor/practicalmeteor:chai';

// All of these  imports give errors
// import 'app/cashflow/imports/ui/pages/Budget/Budget_Page.html';
// import 'app/cashflow/imports/ui/pages/Budget/Budget_Page.js';

// import '../../../../pages/Budget/Budget_Page.html';
// import '../../../../pages/Budget/Budget_Page.js';

// import '../Budget_Page.html';
// import '../Budget_Page';

// import './Budget_Page.html';
// import './Budget_Page';

// import 'Budget_Page.html';
// import 'Budget_Page';


/* eslint-env mocha */

// Test helpers with Template.Budget_Page.__helpers[' difference']();
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
