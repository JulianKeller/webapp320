import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Support = new Mongo.Collection('Support');

export const SupportSchema = new SimpleSchema({
  issue: {
    type: String,
    optional: false,
    label: 'Issue:',
    autoform: {
      group: 'Support',
      placeholder: 'Select Issue',
    },
  },

  details: {
    label: 'Details',
    type: String,
    optional: false,
    max: 250,
    autoform: {
      group: 'Support',
      placeholder: 'Details here...',
      rows: 10,
    },
  },
});

Support.attachSchema(SupportSchema);
