import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Goals = new Mongo.Collection('Goals');

/**
 * Create the schema for Goals
 */
export const GoalsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 9999999,
    autoform: {
      group: 'Add Goal',
      placeholder: 'Goal Name',
    },
  },
  goal: {
    label: 'Goal Amount',
    type: Number,
    decimal: true,
    optional: false,
    max: 9999999,
    autoform: {
      group: 'Add Goal',
      placeholder: '$ Goal Amount',
    },
  },
  saved: {
    label: 'Amount Saved',
    type: Number,
    decimal: true,
    optional: false,
    max: 9999999,
    autoform: {
      group: 'Add Goal',
      placeholder: '$ Amount Saved',
    },
  },
  needed: {
    label: 'Needed',
    type: Number,
    decimal: true,
    optional: true,
    max: 9999999,
    autoform: {
      group: 'Add Goal',
      placeholder: '$ Amount Needed',
    },
  },
});

Goals.attachSchema(GoalsSchema);
