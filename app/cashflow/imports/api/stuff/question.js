import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Question = new Mongo.Collection('Question');

export const QuestionSchema = new SimpleSchema({
  email: {
    label: 'E-mail Address',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      group: 'Question',
      placeholder: 'example@example.com',
    },
  },
  message: {
    label: 'Message:',
    type: String,
    optional: false,
    max: 250,
    autoform: {
      group: 'Question',
      placeholder: 'Your inquiry here...',
      rows: 10,
    },
  },
});

Question.attachSchema(QuestionSchema);
