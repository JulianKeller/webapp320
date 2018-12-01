import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Goals = new Mongo.Collection('Goals');

/*
 * Create the schema for Stuff
 */
export const GoalsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Add Goal',
      placeholder: 'Name',
    },
  },
  goal: {
    label: 'Goal',
    type: Number,
    optional: false,
    max: 20,
    autoform: {
      group: 'Add Goal',
      placeholder: 'Goal Amount',
    },
  },
  saved: {
    label: 'Saved',
    type: Number,
    optional: false,
    max: 30,
    autoform: {
      group: 'Add Goal',
      placeholder: 'Saved',
    },
  },
  needed: {
    label: 'Needed',
    type: Number,
    optional: false,
    max: 20,
    autoform: {
      group: 'Add Goal',
      placeholder: 'Needed',
    },
  },
});

Goals.attachSchema(GoalsSchema);
