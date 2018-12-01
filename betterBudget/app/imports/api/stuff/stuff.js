import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
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
    optional: false,
    max: 50,
    autoform: {
      group: 'Add Item',
      placeholder: 'Description',
    },
  },
  balance: {
    label: 'Balance',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Add Item',
      placeholder: 'Balance',
    },
  },
});

Stuff.attachSchema(StuffSchema);
