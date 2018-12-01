import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Summary = new Mongo.Collection('Summary');

/*
 * Create the schema for Stuff
 */
export const SummarySchema = new SimpleSchema({
  balance: {
    label: 'Balance',
    type: Number,
    optional: false,
    max: 20,
    autoform: {
      group: 'Summary',
      placeholder: 'Balance',
    },
  },
  available: {
    label: 'Available',
    type: Number,
    optional: false,
    max: 20,
    autoform: {
      group: 'Summary',
      placeholder: 'Available',
    },
  },
});

Summary.attachSchema(SummarySchema);
