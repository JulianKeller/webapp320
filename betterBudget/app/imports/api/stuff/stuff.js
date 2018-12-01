import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Add Contact',
      placeholder: 'First Name',
    },
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Add Contact',
      placeholder: 'Last Name',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Add Contact',
      placeholder: 'Address',
    },
  },
  phone: {
    label: 'Telephone',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Add Contact',
      placeholder: 'Telephone',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Add Contact',
      placeholder: 'Email',
    },
  },
});

Stuff.attachSchema(StuffSchema);
