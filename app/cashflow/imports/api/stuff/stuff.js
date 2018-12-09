import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  owner: {
    label: 'Owner',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Add Item',
      placeholder: 'user Id',
    },
    autoValue: function () {
      return this.userId;
    },
  },
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Add Item',
      placeholder: 'Item Name',
    },
  },
  description: {
    label: 'Description',
    type: String,
    optional: true,
    max: 50,
    autoform: {
      group: 'Add Item',
      placeholder: 'Description',
    },
  },
  balance: {
    label: 'Balance',
    // regEx: /[0-9]+(\.[0-9][0-9]?)?/,
    type: String,
    // regEx: /[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/,
    decimal: true,
    defaultValue: 0,
    optional: false,
    max: 9999999999,
    autoform: {
      group: 'Add Item',
      placeholder: '$ Balance',
    },
    // custom: function () {
    //   if (this.field('balance') === '3') {
    //     console.log('got here');
    //     return 'required';
    //   }
    //   // console.log(this.field('balance') == '3');
    //   return this.field('balance');
    // },
  },
});

Stuff.attachSchema(StuffSchema);
