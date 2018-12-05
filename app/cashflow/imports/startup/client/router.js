import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

Accounts.onLogin(function () {
  BlazeLayout.render('App_Body', { main: 'Budget_Page' });
});

Accounts.onLogout(function () {
  BlazeLayout.render('App_Body', { main: 'Home_Page' });
});


FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/budget', {
  name: 'Budget_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Budget_Page' });
  },
});

FlowRouter.route('/faq', {
  name: 'Faq_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Faq_Page' });
  },
});

FlowRouter.route('/add-item', {
  name: 'Add_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Item_Page' });
  },
});

FlowRouter.route('/edit-item/:_id', {
  name: 'Edit_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Item_Page' });
  },
});

FlowRouter.route('/add-goal', {
  name: 'Add_Goal_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Goal_Page' });
  },
});

FlowRouter.route('/edit-goal/:_id', {
  name: 'Edit_Goal_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Goal_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
