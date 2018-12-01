import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Categories = new Mongo.Collection('Categories');

// Categories.allow({
//   insert: function () {
//     return true;
//   },
// });

/**
 * Create the schema for Stuff
 */
export const CategoriesSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Add Category',
      placeholder: 'Name',
    },
  },
  description: {
    label: 'Description',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Add Category',
      placeholder: 'Description',
    },
  },
  amount: {
    label: 'Amount',
    type: Number,
    optional: false,
    max: 999999,
    autoform: {
      group: 'Add Category',
      placeholder: '$ Amount',
    },
  },
});

Categories.attachSchema(CategoriesSchema);
