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
    max: 50,
    autoform: {
      group: 'Add Goal',
      placeholder: 'Item Name',
    },
  },
  goal: {
    label: 'Goal',
    type: Number,
    optional: false,
    max: 50,
    autoform: {
      group: 'Add Goal',
      placeholder: 'Goal',
    },
  },
  saved: {
    label: 'Saved',
    type: Number,
    optional: false,
    max: 50,
    autoform: {
      group: 'Add Goal',
      placeholder: '0',
    },
  },
  needed: {
    label: 'Needed',
    type: Number,
    optional: false,
    max: 50,
    autoform: {
      group: 'Add Goal',
      placeholder: '0',
    },
  },
});

Goals.attachSchema(GoalsSchema);
