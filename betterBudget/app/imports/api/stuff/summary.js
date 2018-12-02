import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Summary = new Mongo.Collection('Summary');

/**
 * Create the schema for Summary
 */
export const SummarySchema = new SimpleSchema({
  total: {
    label: 'Total',
    type: Number,
    optional: false,
    max: 9999999,
    autoform: {
      group: 'Summary',
      placeholder: '0',
    },
  },
  available: {
    label: 'Available',
    type: Number,
    optional: false,
    max: 9999999,
    autoform: {
      group: 'Summary',
      placeholder: '0',
    },
  },
  addBalance: {
    label: 'Add Balance',
    type: Number,
    optional: false,
    max: 9999999,
    autoform: {
      group: 'Summary',
      placeholder: '0',
    },
  },
});

Summary.attachSchema(SummarySchema);
